import FieldForm from "@/components/fieldForm";
import { Dispatch, SetStateAction } from "react";

export default function DefaultField({
  label,
  value,
  setOpen,
  clearDate,
  error
}: {
  label: string;
  value: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  clearDate: () => void;
  error: boolean;
}) {
  return (
    <FieldForm
      onFocus={() => setOpen(true)}
      label={label}
      fieldValue={value}
      setFieldValue={() => clearDate()}
      error={error}
    />
  );
}
