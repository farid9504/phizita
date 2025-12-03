import clsx from "clsx";
import HeaderAndAction from "./action/headerAndAction";
import { Irows } from "@/interface/table";
import Usetheme from "@/utils/theme";

export default function HeaderListPatient({
  selectedRows,
}: {
  selectedRows: Irows[];
}) {
  const { isTablet, isDesktop } = Usetheme();
  return (
    <div className="md:bg-[var(--neutral-02)] lg:bg-transparent md:px-4 md:pt-4 lg:p-0">
      <div className={"md:block hidden"}>
        <h2 className="text-[14px] font-medium text-[var(--defaultColor)]">
          لیست بیماران من
        </h2>
      </div>
      <div
        className={clsx(
          "mt-0 flex justify-between gap-2",
          { "flex-col mt-3": isTablet },
          { "flex-row mt-[20px]": isDesktop }
        )}
      >
        <HeaderAndAction selectedRows={selectedRows} />
      </div>
    </div>
  );
}
