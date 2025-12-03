import { GridColDef, GridRowId } from "@mui/x-data-grid";

export interface Irows {
  id: GridRowId;
  [key: string]: any;
}

export interface Itable {
  rows: Irows[];
  columns: GridColDef[];
  setSelectedRows?: (rows: Irows[]) => void;
}
