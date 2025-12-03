import Usetheme from "@/utils/theme";
import { Box } from "@mui/material";
import { ReactNode } from "react";
import styles from "./BottomSheet.module.scss";
import clsx from "clsx";
export default function BottomSheetItem({
  children,
  type = "default",
  className = "",
  disabled = false,
  onClick,
}: {
  children: ReactNode;
  type?: "default" | "alert" | "selected";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}) {
  const { isTablet } = Usetheme();
  const handleClick = () => {
    if (!disabled) {
      onClick?.();
    }
  };
  return (
    <Box
      onClick={handleClick}
      className={clsx(
        className,
        `flex items-center justify-center rounded-xl text-sm border-[1px]`,
        styles[type],
        { "opacity-30": disabled }
      )}
      sx={{
        width: isTablet ? 213.33 : 104,
        height: isTablet ? 128 : 80,
      }}
      aria-disabled={disabled}
    >
      {children}
    </Box>
  );
}
