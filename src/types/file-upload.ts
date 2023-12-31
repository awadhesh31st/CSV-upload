export interface SheetRow {
  [key: string]: string | number;
}

export interface UploadCardProps {
  handleFileDrop?: (e: React.DragEvent<HTMLDivElement>) => void;
  handleFileChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface TableDataProps {
  sheetData?: SheetRow[];
  filteredData?: SheetRow[];
  handleSort?: (column: string) => void;
  sortKey?: string | null;
  sortDirection?: SortDirection;
}

export interface SearchProps {
  searchQuery?: string;
  handleSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type SortDirection = "asc" | "desc" | null;
