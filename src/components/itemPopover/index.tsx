import { ReactNode } from "react";
import { Typography } from "@mui/material";
import style from "./itemPopover.module.scss";
import clsx from "clsx";

export default function ItemPopover({
  children,
  disabled,
  className,
  onClick,
}: {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}) {
  const handleClick = () => {
    if (!disabled) {
      onClick?.();
    }
  };
  return (
    <div
      className={clsx(className, `${style.item} text-[var(--defaultColor)]`)}
      aria-disabled={disabled ? "true" : "false"}
      onClick={handleClick}
    >
      <Typography
        className="flex gap-[10px]"
        style={{ fontFamily: "inherit", fontSize: 14, color: "inherit" }}
      >
        {children}
      </Typography>
    </div>
  );
}
