import { Theme } from "@mui/material/styles";

const styleSx = {
  search: (theme: Theme, open: boolean) => {
    const focusStyle = {
      borderColor: "var(--accents-09)",
      color: "var(--defaultColor)",
    };

    return {
      fontFamily: "inherit",
      border: "1px solid var(--neutral-08)",
      padding: "3px 8px",
      borderRadius: "8px",
      transition: "border-color 0.3s, color 0.3s",
      color: "var(--neutral-09)",
      fontSize: 13,
      minHeight: 40,
      width: "100%",

      "&::before, &::after": {
        display: "none",
        content: "none",
      },

      "&:hover": {
        borderColor: "var(--accents-06)",
      },

      "&:focus-within": {
        ...focusStyle,
      },

      "&:has(.MuiInputBase-input:not(:placeholder-shown))": {
        background: "var(--accents-02)",
        color: "var(--defaultColor)",
        borderColor: "var(--accents-10)",
      },

      "& .MuiInputBase-input": {
        "&::placeholder": {
          color: "var(--neutral-09)",
          fontSize: 12,
        },
      },

      [theme.breakpoints.down("md")]: {
        borderColor: "transparent",
        
        "& .MuiInputBase-input": {
          display: "none",
        },
        
        "&.filled": {
          ...(open && focusStyle),
          "& .MuiInputBase-input": {
            display: "block",
          },
        },
      },
    };
  },
};

export default styleSx;
