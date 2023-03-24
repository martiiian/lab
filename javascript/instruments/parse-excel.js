const Excel = require('exceljs');
const wb = new Excel.Workbook();
const fileName = 'exel.xlsx';

const readExcel = async () => {
  await wb.xlsx.readFile(fileName);

  //You can use the index number also eg. 0 for selecting the sheet
  let worksheet = wb.getWorksheet("Протокол");

  worksheet.eachRow({ includeEmpty: true }, async (row, rowNumber) => {
    console.log(row.getCell(1).value);
  })
}

readExcel()
