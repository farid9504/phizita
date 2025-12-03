"use client";
import Nav from "@/components/navigation";
import Sidebar from "@/components/sidebar";
import clsx from "clsx";
import { ReactNode, useState } from "react";

export default function PanelLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Sidebar open={open} setOpen={setOpen} />
      <div className="flex flex-1 lg:px-[20px] flex-col">
        <Nav toggleMunu={() => setOpen((p) => !p)} />
        <div
          className={clsx(
            "lg:w-[calc(100vw-380px)] w-full h-full lg:overflow-hidden",
            "lg:border-[var(--neutral-05)] lg:border-[1px] rounded-[16px]"
          )}
        >
          {children}
        </div>
      </div>
    </>
  );
}
