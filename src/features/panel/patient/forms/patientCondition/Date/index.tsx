import DefaultField from "./default";
import ModalPatientCondition from "./modal";
import { useDate } from "./hooks/useDate";
import { IFieldDate } from "@/interface/fieldForm";

export default function DatePatientCondition({
  label,
  setValue,
  fieldValue,
  error,
}: {
  label: string;
  setValue: (key: IFieldDate) => void;
  fieldValue: IFieldDate;
  error: boolean;
}) {
  const { setOpen, formated, clear, open } = useDate(setValue);
  return (
    <>
      <DefaultField
        label={label}
        value={formated(fieldValue)}
        setOpen={setOpen}
        clearDate={clear}
        error={error}
      />
      {open && (
        <ModalPatientCondition
          formated={formated}
          setOpen={setOpen}
          fieldValue={fieldValue}
          setValue={setValue}
        />
      )}
    </>
  );
}
