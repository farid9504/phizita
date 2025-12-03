"use client";

import { PaginationSize } from "@/constants/pagination";
import { Itable } from "@/interface/table";
import useDebouncedQueryParam from "@/utils/useDebouncedQueryParam";
import { GridFilterModel, GridRowSelectionModel } from "@mui/x-data-grid";
import { useCallback, useEffect, useMemo, useState } from "react";

export const useTable = ({ rows = [], setSelectedRows, columns }: Itable) => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(PaginationSize[0]);
  const [selectedIds, setSelectedIds] = useState<GridRowSelectionModel>([]);
  const [filterModel, setFilterModel] = useState<GridFilterModel>();

  const paginatedRows = useMemo(() => {
    const start = (page - 1) * pageSize;
    return rows.slice(start, start + pageSize);
  }, [rows, page, pageSize]);

  const handleSelectionChange = useCallback(
    (newSelection: GridRowSelectionModel) => {
      setSelectedIds(newSelection);
    },
    []
  );

  useEffect(() => {
    if (setSelectedRows) {
      const idSet = new Set(selectedIds);
      const selectedRows = rows?.filter((row) => idSet.has(row.id));
      setSelectedRows(selectedRows);
    }
  }, [selectedIds, rows]);

  const handleFilterChange = (newFilterModel: GridFilterModel) => {
    setFilterModel(newFilterModel);
  };
  const item = filterModel?.items?.[0];

  columns.map((column) =>
    useDebouncedQueryParam(
      column.field,
      column.field === item?.field ? item?.value : null
    )
  );

  return {
    paginatedRows,
    page,
    pageSize,
    handleSelectionChange,
    selectedIds,
    setPage,
    setPageSize,
    filterModel,
    handleFilterChange,
  };
};
