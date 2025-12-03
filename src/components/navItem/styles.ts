const style = {
  navItem: {
    minHeight: "44px",
    borderRadius: "8px", // default
    transition: "background-color 0.3s ease-in-out",
    color: "var(--neutral-11)",
    padding : '0px',
    "&.Mui-selected": {
      color: "var(--accents-11)",
      backgroundColor: "var(--accents-05)",
    },
    "&:hover": {
      backgroundColor: "var(--neutral-04)",
      color: "var(--neutral-11)",
    },
    "&:disabled": {
      color: "var(--neutral-08)",
    },

    // Responsive override for small screens
    "@media (max-width: 600px)": {
      borderRadius: "0px",
    },
  },
  navIcon: {
    minWidth: "auto",
    color: "inherit",
  },
  navLabel: {
    ".css-rizt0-MuiTypography-root": {
      fontFamily: "inherit",
      fontSize: 14,
    },
  },
};
export default style