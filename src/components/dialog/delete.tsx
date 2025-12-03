import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import CustomDialog from ".";
import ErrorIcon from "./assets/error.svg";
import Button from "../button";

export default function DeleteDialog({
  title,
  open,
  onClose,
  description,
  onConfirm,
}: {
  title: string;
  open: boolean;
  onClose: () => void;
  description: string;
  onConfirm: () => void;
}) {
  const fontFamily = { fontFamily: "inherit", textAlign: "center" };
  return (
    <CustomDialog open={open} onClose={onClose}>
      <div className="flex justify-center">
        <ErrorIcon />
      </div>
      <DialogTitle
        sx={fontFamily}
        className="text-base text-[rgb(var(--oppositeColor))] font-medium"
      >
        {title}
      </DialogTitle>

      <DialogContent className="mt-4">
        <DialogContentText
          sx={{ ...fontFamily, fontSize: 14 }}
          className="text-[var(--neutral-11)]"
        >
          {description}
        </DialogContentText>
      </DialogContent>

      <DialogActions className="flex gap-4 w-full mt-8">
        <Button
          className="flex-1 h-12"
          variant="outline"
          color="neutral"
          onClick={onClose}
        >
          انصراف
        </Button>
        <Button
          className="flex-1 h-12"
          color="error"
          variant="outline"
          onClick={onConfirm}
        >
          حذف
        </Button>
      </DialogActions>
    </CustomDialog>
  );
}
