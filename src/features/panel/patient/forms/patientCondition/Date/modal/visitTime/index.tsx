import { Dispatch, SetStateAction } from "react";
import Calendar from "./calendar";
import TimeSections from "./timeSections";
import { IFieldDate } from "@/interface/fieldForm";

export default function VisitTime({
  setDate,
  formatedDate,
  value
}: {
  setDate: Dispatch<SetStateAction<IFieldDate>>;
  formatedDate: string;
  value: IFieldDate;
}) {
  return (
    <div className="pt-[16px]">
      <p className="text-[var(--defaultColor)] text-[14px] font-medium">
        زمان مراجعه بیمار برای شروع دوره درمانی‌اش را انتخاب نمایید.
      </p>
      <div className="mt-[20px] h-[340px] flex gap-[20px]">
        <Calendar setDate={setDate} value={value}/>
        <div className="w-[1px] bg-[#e5e5e5]"></div>
        <TimeSections formatedDate={formatedDate} />
      </div>
    </div>
  );
}
