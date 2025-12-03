"use client";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
export default function Usetheme() {
  const theme = useTheme();
  const phone = useMediaQuery(theme.breakpoints.down("sm"));
  const tablet = useMediaQuery(theme.breakpoints.down("md"));
  return {
    isPhone: phone,
    isTablet: Boolean(tablet && !phone),
    isDesktop: Boolean(!tablet && !phone),
  };
}
