import React from "react";
import { PiUploadBold } from "react-icons/pi";
import { UploadCardProps } from "../types/file-upload";

const UploadCard: React.FC<UploadCardProps> = ({
  handleFileDrop,
  handleFileChange,
}) => {
  const preventDefault = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className="flex items-center justify-center h-screen px-5 py-4 bg-biege">
      <div className="flex flex-col px-8 py-6 bg-white shadow-xl rounded-xl xl:w-1/4 w-96">
        <h3 className="mb-2 text-lg font-semibold text-coal">Import CSV</h3>
        <p className="mb-8 mr-4 text-sm font-sm text-grayDark">
          Upload to import HR department data to your UI.
        </p>
        <div
          className="py-5 border-2 border-dotted cursor-pointer rounded-xl border-grayLight"
          onDrop={handleFileDrop}
          onDragOver={preventDefault}
        >
          <div className="flex flex-col items-center justify-center p-4 text-center">
            <span className="flex p-1 mb-4 text-4xl rounded-full text-darkGrey">
              <PiUploadBold />
            </span>
            <input
              type="file"
              accept=".csv"
              onChange={handleFileChange}
              className="hidden"
              id="file-input"
            />
            <label
              htmlFor="file-input"
              className="mb-2 text-sm font-sm text-charcoal"
            >
              Drag and drop or <span className="text-orange">choose file</span>{" "}
              to upload
            </label>
            <p className="text-sm font-sm text-grayLight">CSV only</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadCard;
