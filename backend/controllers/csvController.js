const json2csv = require('json2csv').parse;

exports.convertToCSV = (jsonData) => {
  try {
    const csv = json2csv(jsonData);
    return csv;
  } catch (err) {
    console.error('Error converting to CSV:', err);
    throw err;
  }
};
