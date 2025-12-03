import { IMainTabs } from "@/interface/MainTabs";
import Button from "../button";
import clsx from "clsx";
import React from "react";
import Tab from "../Tabs/tab";
import Usetheme from "@/utils/theme";

export default function MainTabs({
  tabs,
  activeTab,
  setActiveTab,
  disabled,
}: IMainTabs) {
  const { isTablet, isPhone, isDesktop } = Usetheme();
  return (
    <div
      className={clsx("gap-[3px] flex rounded-[8px] whitespace-nowrap", {
        "bg-[var(--neutral-03)] p-1": isDesktop,
      })}
    >
      {tabs.map((tab, index) => (
        <React.Fragment key={index}>
          {Boolean(isTablet || isPhone) && (
            <Tab
              className={clsx(
                "h-[40px] p-0 flex-auto w-auto text-[12px]",
                { "px-3 pt-2 pb-3 text-[14px]": isTablet },
                { "flex justify-center items-center px-3": isPhone }
              )}
              label={tab.label}
              onClick={() => setActiveTab(tab.value)}
              active={activeTab === tab.value}
            />
          )}
          {isDesktop && (
            <Button
              className="px-[8px] py-[7.01px] text-[12px] flex-[auto]"
              typeButton="button"
              color={activeTab === tab.value ? "accent" : "neutral"}
              variant={activeTab === tab.value ? "solid" : "ghost"}
              onClick={() => setActiveTab(tab.value)}
              disabled={disabled}
            >
              {tab.label}
            </Button>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
