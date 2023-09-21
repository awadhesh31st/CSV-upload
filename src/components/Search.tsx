import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { SearchProps } from "../types/file-upload";

const Search: React.FC<SearchProps> = ({
  searchQuery = "",
  handleSearchChange,
}) => {
  return (
    <div className="relative max-w-xs">
      <label className="sr-only">Search</label>
      <input
        type="text"
        name="hs-table-with-pagination-search"
        className="block w-full px-10 py-2 text-sm border-2 border-opacity-50 rounded-md border-grayLight focus:border-grayLight"
        placeholder="Search content"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-xl pointer-events-none">
        <BiSearchAlt />
      </div>
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none"></div>
    </div>
  );
};

export default Search;
