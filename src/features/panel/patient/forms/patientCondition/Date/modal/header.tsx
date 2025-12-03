import Tabs from "@/components/Tabs";
import { Dispatch, SetStateAction } from "react";

export default function Header({
  activeTab,
  setActiveTab,
  tabs,
}: {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
  tabs: { value: string; label: string }[];
}) {
  return (
    <div className="flex flex-col border-b-[var(--neutral-05)] border-b-[1px] px-[20px]">
      <div className="py-[16px]">
        <h4 className="text-[18px] font-medium text-[rgb(var(--oppositeColor))]">
          جزئیات دوره درمانی بیمار (جلسه اول)
        </h4>
      </div>
      <div className="flex-1 flex w-full h-[40px]">
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
