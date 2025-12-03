import BottomSheet from "@/components/bottomSheet";
import Usetheme from "@/utils/theme";
import { Typography } from "@mui/material";
import Print from "@/icons/outlined/print.svg";
import Delete from "@/icons/outlined/delete.svg";
import Edit from "@/icons/outlined/edit.svg";
import BottomSheetItem from "@/components/bottomSheet/item";
import { Irows } from "@/interface/table";

export default function PhoneAction({
  open,
  onClose,
  deleteDialog,
  selectedRows,
}: {
  open: boolean;
  onClose: () => void;
  deleteDialog: () => void;
  selectedRows: Irows[];
}) {
  const { isPhone, isTablet } = Usetheme();

  const className = `flex flex-col justify-center items-center ${
    isTablet ? "gap-6" : "gap-2"
  }`;

  if (Boolean(isPhone || isTablet)) {
    return (
      <BottomSheet open={open} onClose={onClose}>
        <div className={isTablet ? "p-[32px]" : "p-[16px]"}>
          <Typography
            className="text-sm font-medium"
            sx={{ fontFamily: "inherit" }}
          >
            لطفا عملیات موردنظر خود را انتخاب نمایید.
          </Typography>
          <div
            className={`w-full flex justify-between mt-6 ${
              isTablet ? "gap-8" : "gap-2"
            }`}
          >
            <BottomSheetItem
              type="alert"
              onClick={deleteDialog}
            >
              <div className={className}>
                {isTablet ? "حذف از لیست بیماران" : "حدف"}
                <Delete fill="currentColor" />
              </div>
            </BottomSheetItem>

            <BottomSheetItem type="default">
              <div className={className}>
                {isTablet ? "چاپ لیست بیماران" : "چاپ"}

                <Print fill="currentColor" />
              </div>
            </BottomSheetItem>

            <BottomSheetItem
              type="default"
            >
              <div className={className}>
                {isTablet ? "ویرایش پرونده بیمار" : "ویرایش"}
                <Edit fill="currentColor" />
              </div>
            </BottomSheetItem>
          </div>
        </div>
      </BottomSheet>
    );
  }
  return <></>;
}
