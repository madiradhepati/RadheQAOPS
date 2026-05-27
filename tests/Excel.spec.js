const ExcelJs = require('exceljs');
const { test, expect } = require('@playwright/test');
 
async function writeExcelTest(searchText, replaceText, change, filePath) 
{
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
  await delay(500);
  const workbook = new ExcelJs.Workbook();
  await workbook.xlsx.readFile(filePath);
  const worksheet = workbook.getWorksheet('Sheet1');
  const output = readExcel(worksheet, searchText); // not async
 
  const cell = worksheet.getCell(output.row, output.column + change.colChange);
  cell.value = replaceText;
  await workbook.xlsx.writeFile(filePath);
}
 
// This does no async work, so don't mark it async.
function readExcel(worksheet, searchText) {
  let output = { row: -1, column: -1 };
  worksheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, colNumber) => {
      if (cell.value === searchText) {
        output = { row: rowNumber, column: colNumber };
      }
    });
  });
  return output;
}

 
test('Upload download excel validation', async ({ page }) => {
  const textSearch = 'Mango';
  const updateValue = '900';
  await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html');
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download' }).click();
  const download = await downloadPromise;
  const filename = await download.suggestedFilename();
  download.saveAs('/Users/radhe/Downloads/' + filename);
  console.log(filename);
  const filePath = '/Users/radhe/Downloads/download.xlsx';
  await writeExcelTest(textSearch, updateValue, { rowChange: 0, colChange: 2 }, filePath);
 
  await page.locator('#fileinput').setInputFiles(filePath);
 
  const desiredRow = await page.getByRole('row').filter({ has: page.getByText(textSearch) });
  await expect(desiredRow.locator('#cell-4-undefined')).toContainText(updateValue);
});















