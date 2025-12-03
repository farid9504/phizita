import DateField from "@/components/fieldForm/date";
import { IFieldDate } from "@/interface/fieldForm";
import { Dispatch, SetStateAction } from "react";

export default function Calendar({
  setDate,
  value
}: {
  setDate: Dispatch<SetStateAction<IFieldDate>>;
  value: IFieldDate;
}) {
  return (
    <div>
      <DateField onChange={(date) => setDate(date)} value={value}/>
    </div>
  );
}
