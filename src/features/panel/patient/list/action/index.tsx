import Button from "@/components/button";
import CustomPopover from "@/components/customPopover";
import ItemPopover from "@/components/itemPopover";
import { MoreVert } from "@mui/icons-material";
import Edit from "@/icons/outlined/edit.svg";
import React from "react";
import clsx from "clsx";
import Print from "@/icons/outlined/print.svg";
import Delete from "@/icons/outlined/delete.svg";
import { Irows } from "@/interface/table";
export default function Action({
  selectedRows,
  deleteDialog,
}: {
  selectedRows: Irows[];
  deleteDialog: () => void;
}) {
  return (
    <CustomPopover
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      aria-labelledby="page-size-popover"
      className="mt-[14px]"
      trigger={
        <Button
          color="neutral"
          variant="outline"
          className="w-[40px] h-[40px] flex items-center justify-center"
          aria-haspopup="true"
        >
          <MoreVert fill="currentColor" />
        </Button>
      }
    >
      <div
        className={clsx(
          "border-[1px] border-[var(--neutral-01)]",
          "shadow-[var(--shadow-md)] rounded-[8px]",
          "lg:w-60 flex gap-2 flex-col py-2"
        )}
      >
        <ItemPopover
          disabled={Boolean(selectedRows.length && selectedRows.length > 1)}
        >
          <Edit fill="currentColor" />
          ویرایش پرونده بیمار
        </ItemPopover>
        <ItemPopover>
          <Print fill="currentColor" />
          چاپ لیست بیماران
        </ItemPopover>
        <ItemPopover
          disabled={Boolean(selectedRows.length && selectedRows.length > 1)}
          className="text-[var(--semantics-red-09)]"
          onClick={deleteDialog}
        >
          <Delete fill="currentColor" />
          حذف از لیست بیماران
        </ItemPopover>
      </div>
    </CustomPopover>
  );
}
