import { ReactNode, Suspense } from "react";
import PanelLayout from "@/features/panel/layout";

const GeneralLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense fallback={<div>Loading search...</div>}>
      <div
        className="lg:p-[20px] lg:gap-5 flex h-[100vh] overflow-hidden"
        dir="rtl"
      >
        <PanelLayout>{children}</PanelLayout>
      </div>
    </Suspense>
  );
};

export default GeneralLayout;
