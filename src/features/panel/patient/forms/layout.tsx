import { ReactNode } from "react";
// import Error from "./error";
import TitleForm from "./titleForm";
import Footer from "./footer";

export default function Layout({
  children,
  preStep,
  error,
  title,
  onSubmit,
}: {
  children: ReactNode;
  preStep?: () => void;
  error: ReactNode;
  title: string;
  onSubmit: () => void;
}) {
  return (
    <form className="w-full h-full" onSubmit={onSubmit}>
      <div className="py-[16px] h-[calc(100%-64px)] overflow-auto">
        <div className="w-[520px] mx-auto">
          {/* error  */}
          {error && (
            <div className="my-[16px]">
              <div className="h-[41px]">{error}</div>
            </div>
          )}
          {/* error  */}

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
