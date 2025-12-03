import Dashboard from "@/icons/building/dashboard.svg";
import Patient from "@/icons/building/patient.svg";
import PhysioSessions from "@/icons/building/physioSessions.svg";
import WorkOutManagement from "@/icons/building/workOutManagement.svg";
import FinacialReport from "@/icons/building/finacialReport.svg";
import Settings from "@/icons/building/settings.svg";
import HelpCenter from "@/icons/building/helpCenter.svg";

import TitleSidebar from "./title";
import Item from "./item";
import MobileHeader from "./mobileHeader";
import Brand from "./brand";
import { List } from "@mui/material";
import clsx from "clsx";
export default function SidebarContent() {
  const listStyle = { width: "100%", padding: "0" };
  return (
    <>
      <div className="md:hidden block w-full">
        <MobileHeader />
      </div>
      <div className="hidden md:block p-4 md:px-2 md:pt-[40px] md:pb-[32px] lg:p-4">
        <Brand />
      </div>
      <div
        className={clsx(
          "w-full h-[calc(100%-168px)] overflow-auto",
          "md:h-[calc(100%-60px)] md:px-2",
          "lg:p-4"
        )}
      >
        <div
          className={clsx(
            "p-4 flex items-center h-[62px]",
            "md:h-auto md:p-2 md:my-4",
            "lg:mg:mb-1 lg:mt-0 lg:mb-2"
          )}
        >
          <TitleSidebar title="منو اصلی" />
        </div>
        <div className="md:mb-[32px]">
          <List sx={listStyle} className="flex flex-col gap-1">
            <Item
              icon={<Dashboard />}
              label="داشبورد"
              href="/"
              className="lg:mb-[12px]"
            />
            <Item icon={<Patient />} label="مدیریت بیماران" href="/patient" />
            <Item
              icon={<PhysioSessions />}
              label="مدیریت دوره‌های فیزیوتراپی"
              href="#"
            />
            <Item
              icon={<WorkOutManagement />}
              label="مدیریت ورزش‌های فیزیوتراپی"
              href="#"
            />
            <Item icon={<FinacialReport />} label="گزارش‌های مالی" href="#" />
          </List>
        </div>

        <div
          className={clsx(
            "p-4 flex items-center h-[62px] mb-0.5",
            "md:mb-0 md:h-auto md:px-2",
            "lg:py-0 lg:mb-4"
          )}
        >
          <TitleSidebar title="موارد بیشتر" />
        </div>

        <List sx={listStyle} className="flex flex-col gap-1">
          <Item icon={<Settings />} label="تنظیمات" href="#" />
          <Item icon={<HelpCenter />} label="مرکز پشتیبانی" href="#" />
        </List>
      </div>
    </>
  );
}
