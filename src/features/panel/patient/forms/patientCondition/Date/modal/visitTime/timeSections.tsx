"use client";

import Button from "@/components/button";
import MainTabs from "@/components/mainTabs";
import { useState } from "react";

export default function TimeSections({
  formatedDate,
}: {
  formatedDate: string;
}) {
  const [activeTab, setActiveTab] = useState<string>("am");

  const btnClassName = "w-[88px] h-[40px]";

  const times = ["7:00", "7:30", "8:00", "8:30", "9:00", "9:30", "10:00"];

  const [timeVisit, setTimeVisit] = useState("");
  return (
    <div className="w-[400px]">
      {Boolean(formatedDate) && (
        <>
          <p className="text-[16px] text-[--defaultColor] font-medium">
            {formatedDate}
          </p>
          <div className="mt-[16px]">
            <MainTabs
              tabs={[
                { value: "am", label: "نوبت‌های قبل‌ از ظهر" },
                { value: "pm", label: "نوبت‌های بعد از ظهر" },
              ]}
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            />
            <div
              className="flex flex-wrap mt-[16px] gap-y-[24px] gap-x-[16px]"
              dir="ltr"
            >
              {times.map((time, index) => (
                <Button
                  key={index}
                  variant={"outline"}
                  color={time === timeVisit ? "accent" : "neutral"}
                  className={btnClassName}
                  onClick={() => setTimeVisit(time)}
                >
                  {time}
                </Button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
