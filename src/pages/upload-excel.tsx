import { useEffect, useState } from "react";
import { SheetRow, SortDirection } from "../types/file-upload";
import { uploadFile } from "../utils/file-action";

import UploadCard from "../components/UploadCard";
import TableData from "../components/Table";
import Search from "../components/Search";

const UploadExcel = () => {
  const [sheetData, setSheetData] = useState<SheetRow[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);

  useEffect(() => {
    if (sortKey && sortDirection) {
      console.log("ddacsa ")
      const sortedData = [...sheetData].sort((a, b) => {
        const valueA = a[sortKey!] as string | number;
        const valueB = b[sortKey!] as string | number;

        if (valueA < valueB) {
          return sortDirection === "asc" ? -1 : 1;
        } else if (valueA > valueB) {
          return sortDirection === "asc" ? 1 : -1;
        } else {
          return 0;
        }
      });
      setSheetData(sortedData);
    }
  }, [sortKey, sortDirection]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setSelectedFile(file || null);
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          const result = event.target.result as string;
          const parsedData = uploadFile(result);
          setSheetData(parsedData);
        }
      };
      reader.readAsText(file);
    }
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          const result = event.target.result as string;
          const parsedData = uploadFile(result);
          setSheetData(parsedData);
        }
      };
      reader.readAsText(file);
    }
  };

  const handleSort = (column: string) => {
    if (sortKey === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortKey(column);
      setSortDirection("asc");
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = sheetData.filter((row) => {
    return Object.values(row).some((value) => {
      return value.toString().toLowerCase().includes(searchQuery.toLowerCase());
    });
  });

  console.log(sheetData);

  return (
    <>
      {sheetData.length > 0 ? (
        <div className="flex flex-col m-8">
          <h2 className="mb-3 font-extrabold">
            {selectedFile && <p>Selected File: {selectedFile.name}</p>}
          </h2>
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="border divide-y rounded-lg divide-grayLight">
                <div className="px-4 py-3">
                  <Search
                    handleSearchChange={handleSearchChange}
                    searchQuery={searchQuery}
                  />
                </div>
                <div className="overflow-hidden bg-biege">
                  <TableData
                    sheetData={sheetData}
                    filteredData={filteredData}
                    handleSort={handleSort}
                    sortKey={sortKey}
                    sortDirection={sortDirection}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <UploadCard
          handleFileDrop={handleFileDrop}
          handleFileChange={handleFileChange}
        />
      )}
    </>
  );
};

export default UploadExcel;