const style = {
  dataGrid: {
    border: 0,
    fontFamily: "inherit",
    "& .MuiDataGrid-cell": { textAlign: "start" },

    "& .MuiDataGrid-container--top [role=row], & .MuiDataGrid-container--bottom [role=row]":
      {
        backgroundColor: "var(--neutral-05)",
      },
    "& .MuiDataGrid-columnHeader": {
      fontSize: 14,
      color: "var(--neutral-11)",
    },
  },
  filterPanel: {
    sx: {
      fontFamily: "inherit",
      "& .MuiInputBase-root": { fontFamily: "inherit" },
      "& .MuiInputBase-input": { fontFamily: "inherit" },
      "& .MuiFormLabel-root": { fontFamily: "inherit" },
    },
  },
};
export default style;
