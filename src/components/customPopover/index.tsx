import { ICustomPopoverProps } from "@/interface/customPopover";
import { Popover } from "@mui/material";
import React, { useState } from "react";


export default function CustomPopover({
  children,
  trigger,
  ...popoverProps
}: ICustomPopoverProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  function handleClick(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
    if (trigger.props.onClick) {
      trigger.props.onClick(event);
    }
  }
  const open = Boolean(anchorEl);
  return (
    <>
      {React.cloneElement(trigger, { onClick: handleClick })}
      <Popover
        {...popoverProps}
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
      >
        {children}
      </Popover>
    </>
  );
}
