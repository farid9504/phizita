import { Badge, styled } from "@mui/material";

const StyledBadge = styled(Badge)(() => ({
    width: 24,
    height: 24,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: isMobile ? 0 : "2px",
    // borderColor: "var(--neutral-07)",
    borderRadius: "50%",
    ".MuiBadge-badge": {
      border: "2px solid white",
      borderRadius: "50%",
      backgroundColor: "var(--semantics-red-11)",
      width: "10px",
      minWidth: 10,
      height: "10px",
      top: 6,
      right: 6,
      padding: "0px",
    },
  })
);
export default StyledBadge;
