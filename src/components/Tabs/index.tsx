import { ITab } from "@/interface/tabs";
import Tab from "./tab";

export default function Tabs({ tabs, activeTab, setActiveTab }: ITab) {
  return (
    <div className="flex w-full whitespace-nowrap">
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          onClick={() => setActiveTab(tab.value)}
          active={activeTab === tab.value}
        />
      ))}
    </div>
  );
}
