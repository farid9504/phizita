import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import CustomePagination from "../customPagination";
import style from "./style";
import { Itable } from "@/interface/table";
import { useTable } from "./hooks/useTable";

export default function DesktopTable({
  rows = [],
  columns = [],
  setSelectedRows,
}: Itable) {
  const {
    page,
    pageSize,
    handleSelectionChange,
    paginatedRows,
    selectedIds,
    setPage,
    setPageSize,
    filterModel,
    handleFilterChange,
  } = useTable({ rows, setSelectedRows, columns });

  return (
    <Paper sx={{ width: "100%", height: "100%" }}>
      <div style={{ height: "calc(100% - 64px)" }}>
        <DataGrid
          filterMode="server"
          // filterModel={filterModel}
          rows={paginatedRows}
          columns={columns}
          checkboxSelection
          hideFooter
          disableRowSelectionOnClick
          paginationModel={{ page: page - 1, pageSize }}
          onRowSelectionModelChange={handleSelectionChange}
          rowSelectionModel={selectedIds}
          rowHeight={48}
          columnHeaderHeight={48}
          getRowId={(row) => row.id}
          sx={style.dataGrid}
          slotProps={{
            filterPanel: style.filterPanel,
          }}
          onFilterModelChange={handleFilterChange}
        />
      </div>

      <CustomePagination
        page={page}
        setPage={setPage}
        count={Math.ceil(rows.length / pageSize)}
        pageSize={pageSize}
        setPageSize={setPageSize}
        total={rows.length}
      />
    </Paper>
  );
}
