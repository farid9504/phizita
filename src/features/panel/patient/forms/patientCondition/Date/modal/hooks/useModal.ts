"use client";
import { IFieldDate } from "@/interface/fieldForm";
import { Dispatch, SetStateAction, useCallback, useState } from "react";

export function useModal({
  fieldValue,
  setOpen,
  setValue,
}: {
  fieldValue: IFieldDate;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setValue: (key: IFieldDate) => void;
}) {
  const [activeTab, setActiveTab] = useState("visitTime");
  const [date, setDate] = useState<IFieldDate>(fieldValue);

  const tabs = [
    { value: "visitTime", label: "زمان مراجعه بیمار" },
    { value: "treatmentSteps", label: "مراحل درمانی بیمار" },
  ];

  const onSubmit = useCallback(() => {
    setValue(date);
    setOpen(false);
  }, [date]);

  return { tabs, activeTab, setActiveTab, setDate, date, onSubmit };
}
