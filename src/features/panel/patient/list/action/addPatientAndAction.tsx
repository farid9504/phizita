"use clinet";
import Link from "next/link";
import Action from ".";
import Button from "@/components/button";
import Plus from "@/icons/fielld/plus.svg";
import { Irows } from "@/interface/table";
import Usetheme from "@/utils/theme";
import { MoreVert } from "@mui/icons-material";
import { useEffect, useState } from "react";
import PhoneAction from "./phoneAction";
import DeletePatient from "./deletePateint";

export default function AddPatientAndAction({
  selectedRows,
}: {
  selectedRows: Irows[];
}) {
  const { isDesktop, isTablet, isPhone } = Usetheme();

  const [open, setOpen] = useState<boolean>(false);

  const [deleteDialog, setDeleteDialog] = useState(false);

  useEffect(() => setOpen(false), [deleteDialog]);
  
  return (
    <div className={"md:flex gap-[8px] md:justify-end"}>
      <Link href="patient/add" className="md:flex hidden">
        <Button
          color="accent"
          variant="solid"
          className="flex justify-center items-center w-[159px] h-[40px] text-[14px]"
        >
          <Plus fill="currentColor" className="me-[10px]" />
          افزودن بیمارجدید
        </Button>
      </Link>
      {isDesktop && (
        <Action
          selectedRows={selectedRows}
          deleteDialog={() => setDeleteDialog(true)}
        />
      )}
      {Boolean(isTablet || isPhone) && (
        <>
          <div
            onClick={() => setOpen(true)}
            className="w-[40px] h-[40px] flex items-center justify-center text-[var(--neutral-11)]"
          >
            <MoreVert />
          </div>
          <PhoneAction
            open={open}
            onClose={() => setOpen(false)}
            deleteDialog={() => setDeleteDialog(true)}
            selectedRows={selectedRows}
          />
        </>
      )}
      <DeletePatient
        open={deleteDialog}
        onClose={() => setDeleteDialog(false)}
      />
    </div>
  );
}
