const ExcelJS = require('exceljs');

exports.convertToExcel = async (jsonData) => {
  try {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sheet 1');

    const headers = Object.keys(jsonData[0]);
    worksheet.columns = headers.map(header => ({ header, key: header }));

    jsonData.forEach((item) => {
      worksheet.addRow(item);
    });

    const buffer = await workbook.xlsx.writeBuffer();
    return buffer;
  } catch (err) {
    console.error('Error converting to Excel:', err);
    throw err;
  }
};
