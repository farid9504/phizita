"use client";
import { Pagination, Stack } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { ItemPagination } from "./item";
import PageSize from "./pageSize";
import ResultCount from "./resultCount";

export default function CustomPagination({
  page,
  setPage,
  count,
  pageSize,
  setPageSize,
  total,
}: {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  count: number;
  pageSize: number;
  setPageSize: Dispatch<SetStateAction<number>>;
  total: number;
}) {
  return (
    <Stack
      spacing={4}
      marginTop="16px"
      alignItems="center"
      sx={{
        backgroundColor: "var(--neutral-03)",
        height: "48px",
        justifyContent: "space-between",
        width: "100%",
        padding: "8px 16px",
      }}
      direction="row"
    >
      <PageSize size={pageSize} setSize={(s) => setPageSize(s)} />
      <Pagination
        count={count}
        page={page}
        color="primary"
        sx={{
          "& .MuiPaginationItem-root": {
            fontFamily: "inherit",
            color: "var(--neutral-11)",
          },
        }}
        dir="ltr"
        onChange={(_, newPage) => setPage(newPage)}
        renderItem={(item) => (
          <ItemPagination
            item={item}
            startEllipsis={() =>
              setPage((prevPage) => Math.max(prevPage - pageSize, 1))
            }
            endEllipsis={() =>
              setPage((prevPage) => Math.min(prevPage + pageSize, count))
            }
          />
        )}
      />
      <ResultCount total={total} page={page} pageSize={pageSize} />
    </Stack>
  );
}
