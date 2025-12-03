"use client";
import { useState } from "react";
import TablePatient from "./tablePatient";
import { Irows } from "@/interface/table";
import HeaderListPatient from "./header";
import Usetheme from "@/utils/theme";
import TableAction from "./action/tabletAction";
import BottomSheet from "@/components/bottomSheet";

export default function PatientList() {
  const [selectedRows, setSelectedRows] = useState<Irows[]>([]);
  const { isTablet, isPhone } = Usetheme();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <HeaderListPatient selectedRows={selectedRows} />
      {Boolean(isPhone || isTablet) && (
        <TableAction
          selectedRows={selectedRows}
          openFilter={() => setOpen(true)}
        />
      )}
      <div className="flex-1 mt-[16px] overflow-auto border-[1px] border-[var(--neutral-06)] rounded-[8px]">
        <TablePatient setSelectedRows={setSelectedRows} />
      </div>
      {Boolean(isPhone || isTablet) && (
        <BottomSheet open={open} onClose={() => setOpen(false)}>
          <>hiiiii</>
        </BottomSheet>
      )}
    </>
  );
}
