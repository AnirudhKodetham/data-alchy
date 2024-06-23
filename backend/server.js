const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const csvController = require('./controllers/csvController');
const excelController = require('./controllers/excelController');
const pdfController = require('./controllers/pdfController');
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());  // Enable CORS for all routes

app.post('/convert', async (req, res) => {
  const { data, type } = req.body;

  console.log('Received data:', data);
  console.log('Requested type:', type);

  if (!data || !type) {
    console.error('Invalid input:', req.body);
    return res.status(400).send('Invalid input');
  }

  let jsonData;
  try {
    jsonData = JSON.parse(data);
    console.log('Parsed JSON data:', jsonData);
  } catch (err) {
    console.error('Failed to parse JSON:', err);
    return res.status(400).send('Invalid JSON data');
  }

  let result;
  try {
    switch (type) {
      case 'csv':
        result = csvController.convertToCSV(jsonData);
        res.header('Content-Type', 'text/csv');
        res.attachment('converted.csv');
        res.send(result);
        break;
      case 'excel':
        result = await excelController.convertToExcel(jsonData);
        res.header('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.attachment('converted.xlsx');
        res.send(result);
        break;
      case 'pdf':
        result = await pdfController.convertToPDF(jsonData);
        res.header('Content-Type', 'application/pdf');
        res.attachment('converted.pdf');
        res.send(result);
        break;
      default:
        console.error('Unsupported file type:', type);
        return res.status(400).send('Unsupported file type');
    }
  } catch (err) {
    console.error('Error converting data:', err);
    res.status(500).send('Error converting data');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
