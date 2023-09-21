import React from "react";
import { TableDataProps } from "../types/file-upload";

const TableData: React.FC<TableDataProps> = ({
  sheetData = [],
  filteredData = [],
  handleSort = () => {},
  sortKey,
  sortDirection,
}) => {
  return (
    <div className="m-4">
      {sheetData.length > 0 && (
        <table className="min-w-full divide-y divide-gray-200 dark:divide-grayLight">
          <thead>
            {Object.keys(sheetData[0]).map((header) => (
              <th
                key={header}
                scope="col"
                className="px-6 py-2 text-base font-bold text-left capitalize cursor-pointer text-coal"
                onClick={() => handleSort(header)}
              >
                {header}
                {sortKey === header && (
                  <span>{sortDirection === "asc" ? " ▲" : " ▼"}</span>
                )}
              </th>
            ))}
          </thead>
          {filteredData.length > 0 ? (
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredData.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, idx) => (
                    <td
                      className="px-6 py-1 text-sm font-light text-gray-800 whitespace-nowrap dark:text-gray-200"
                      key={idx}
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>No data</tbody>
          )}
        </table>
      )}
    </div>
  );
};

export default TableData;
