import { useId } from "react";
import UnSelected from "@/icons/outlined/unSelected.svg";
import Selected from "@/icons/outlined/selected.svg";
import { IconButton } from "@mui/material";

export default function CheckBoxField({
  label,
  checked,
  setFieldValue,
}: {
  label: string;
  checked: boolean;
  setFieldValue: (key: boolean) => void;
}) {
  const id = useId();

  return (
    <>
      <input
        className="hidden"
        id={id}
        checked={checked}
        type="checkbox"
        aria-checked={checked}
        readOnly
      />
      <label
        onClick={() => setFieldValue(!checked)}
        className="flex xl:text-[14px] select-none items-center cursor-pointer text-[12px]"
        htmlFor={id}
      >
        <IconButton
          className="me-[8px]"
          aria-label={checked ? "Deselect" : "Select"}
        >
          {checked ? <Selected /> : <UnSelected stroke="var(--neutral-11)" />}
        </IconButton>
        {label && <span>{label}</span>}
      </label>
    </>
  );
}
