import fs from "fs";
import csv from "csv-parser";
import iconv from "iconv-lite";
import XLSX from "xlsx"
const csvFilePath = '/Users/harshpatel/Desktop/Set-Center/tests/Backend/CSVUpload/CSVs/M03仕入先マスタ_BackUp20240426.xlsx'; // Update with the correct path to your CSV file
const jsonFilePath = '/Users/harshpatel/Desktop/Set-Center/tests/Backend/CSVUpload/CSVs/output.json'; // Update with the path where you want to save the JSON file

// Read Excel file
const workbook = XLSX.readFile(csvFilePath);
const sheet_name = workbook.SheetNames[0]; // Assuming data is in the first sheet

// Convert Excel data to JSON
const excel_data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name], { defval: '', raw: false });

// Write JSON to file
const json_data = JSON.stringify(excel_data, null, 2);
fs.writeFileSync(jsonFilePath, json_data, 'utf-8');

console.log('Conversion complete. JSON file created.');

   