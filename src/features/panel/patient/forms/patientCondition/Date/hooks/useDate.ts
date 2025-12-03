"use client";
import { IFieldDate } from "@/interface/fieldForm";
import { jMoment } from "@/utils/moment";
import { useState } from "react";

export function useDate(setValue: (key: IFieldDate) => void) {
  const [open, setOpen] = useState<boolean>(false);

  const formated = (inputDate: IFieldDate) => {
    if (inputDate) {
      return jMoment(inputDate).format("dddd DD MMM‌ماه  YYYY");
    }
    return String();
  };
  const clear = () => {
    setValue(null);
    setOpen(false);
  };
  return { setOpen, formated, clear, open };
}
