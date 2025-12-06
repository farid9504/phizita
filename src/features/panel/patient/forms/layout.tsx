import { ReactNode } from "react";
// import Error from "./error";
import TitleForm from "./titleForm";
import Footer from "./footer";
import Error from "./error";

export default function Layout({
  children,
  preStep,
  title,
  onSubmit,
  step,
}: {
  children: ReactNode;
  preStep?: () => void;
  title: string;
  onSubmit: () => void;
  step: number;
}) {
  return (
    <form className="w-full h-full" onSubmit={onSubmit}>
      <div className="py-[16px] h-[calc(100%-64px)] overflow-auto">
        <div className="w-[520px] mx-auto">
          <Error step={step} />
          <div className="flex flex-col gap-[40px]">
            <div className="mt-[16px]">
              <TitleForm title={title} />
            </div>
            {children}
          </div>
        </div>
      </div>
      <Footer preStep={preStep} />
    </form>
  );
}
