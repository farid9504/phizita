import Usetheme from "@/utils/theme";
import { Dialog } from "@mui/material";
import { CSSProperties, ReactNode } from "react";

export default function CustomDialog({
  children,
  open,
  onClose,
  style,
}: {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  style?: CSSProperties;
}) {
  const { isPhone } = Usetheme();
  return (
    <Dialog
      PaperProps={{
        sx: {
          ...style,
          fontFamily: "inherit",
          padding: 3,
          borderRadius: 4,

          width: isPhone ? 328 : 480,
        },
      }}
      onClose={onClose}
      open={open}
    >
      {children}
    </Dialog>
  );
}
