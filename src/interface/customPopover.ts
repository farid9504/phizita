import { PopoverProps } from "@mui/material";
import { ReactElement } from "react";

export interface ICustomPopoverProps
  extends Omit<PopoverProps, "open" | "anchorEl" | "onClose"> {
  children: ReactElement;
  trigger: ReactElement<{ onClick?: React.MouseEventHandler }>;
}