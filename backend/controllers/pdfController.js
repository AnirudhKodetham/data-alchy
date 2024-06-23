const PDFDocument = require('pdfkit');

exports.convertToPDF = (jsonData) => {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument();
      const result = [];

      doc.on('data', (chunk) => result.push(chunk));
      doc.on('end', () => {
        const pdfBuffer = Buffer.concat(result);
        resolve(pdfBuffer);
      });

      // Add table headers
      const headers = Object.keys(jsonData[0]);
      headers.forEach(header => {
        doc.text(header, { continued: true, underline: true }).text('   ');
      });
      doc.text('');

      // Add table rows
      jsonData.forEach((item) => {
        headers.forEach(header => {
          doc.text(item[header], { continued: true }).text('   ');
        });
        doc.text('');
      });

      doc.end();
    } catch (err) {
      console.error('Error converting to PDF:', err);
      reject(err);
    }
  });
};
