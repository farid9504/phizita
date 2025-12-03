"use client";
import MainTabs from "@/components/mainTabs";
import { useState } from "react";
import { Irows } from "@/interface/table";
import clsx from "clsx";
import AddPatientAndAction from "./addPatientAndAction";
import Usetheme from "@/utils/theme";
export default function HeaderAndAction({
  selectedRows,
}: {
  selectedRows: Irows[];
}) {
  const tabs = [
    { value: "all", label: "همه بیماران (76)" },
    { value: "under_treatment", label: "بیماران تحت درمان (56)" },
    { value: "treated", label: "بیماران درمان شده (20)" },
  ];
  const [activeTab, setActiveTab] = useState<string>("all");
  const { isDesktop } = Usetheme();
  return (
    <>
      <div
        className={clsx(
          "w-[100vw] md:w-auto overflow-auto",
          "flex"
        )}
      >
        <MainTabs
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={(active) => setActiveTab(active)}
        />
      </div>
      {isDesktop && <AddPatientAndAction selectedRows={selectedRows} />}
    </>
  );
}
