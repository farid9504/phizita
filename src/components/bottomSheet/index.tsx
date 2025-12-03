import { Drawer } from "@mui/material";
import { ReactElement } from "react";

export default function BottomSheet({
  children,
  onClose,
  open,
}: {
  children: ReactElement;
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          p: 2,
          maxHeight: "60vh",
          fontFamily: "inherit",
        },
      }}
    >
      <div
        className="w-full h-[32px] flex justify-center items-center"
        onClick={onClose}
      >
        <span className="w-8 h-1 bg-[#79747E] block opacity-40 rounded-full"></span>
      </div>
      {children}
    </Drawer>
  );
}
