import { SheetRow } from "../types/file-upload";

export const uploadFile = (data: string): SheetRow[] => {
  const rows = data.split("\n");
  const headers = rows[0].split(",");

  const csvData: SheetRow[] = [];
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i].split(",");
    if (row.length === headers.length) {
      const rowData: SheetRow = {};
      for (let j = 0; j < headers.length; j++) {
        rowData[headers[j]] = row[j];
      }
      csvData.push(rowData);
    }
  }

  return csvData;
};
