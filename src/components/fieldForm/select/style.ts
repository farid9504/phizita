export const textFieldStyles = {
  root: {
    "& .MuiOutlinedInput-root": {
      fontFamily: "inherit",
      borderRadius: "8px",
      fontSize: "14px",
      "& fieldset": {
        borderColor: "var(--neutral-08)",
      },
      "&:hover fieldset": {
        borderColor: "var(--accents-06)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "var(--accents-09)",
      },
      "&.Mui-error fieldset": {
        borderColor: "var(--semantics-red-11)",
      },
    },

    "& .MuiInputLabel-root": {
      fontSize: "14px",
      fontFamily: "inherit",
      color: "var(--neutral-09)",
      "&.Mui-focused": {
        color: "var(--neutral-11)",
      },
      "&.Mui-error": {
        color: "var(--semantics-red-11)",
      },
    },
  },
};
