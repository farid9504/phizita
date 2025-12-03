import { Irows } from "@/interface/table";
import AddPatientAndAction from "./addPatientAndAction";
import Button from "@/components/button";
import Filter from "@/icons/fielld/filter.svg";
import Usetheme from "@/utils/theme";
import clsx from "clsx";
export default function TableAction({
  selectedRows,
  openFilter,
}: {
  selectedRows: Irows[];
  openFilter: () => void;
}) {
  const { isPhone } = Usetheme();
  return (
    <div
      className={clsx("h-[56px] flex justify-between items-center px-[16px]", {
        "shadow-[var(--shadow-md)]": isPhone,
      })}
    >
      <div>
        <Button
          className="w-[97px] h-[40px] flex justify-center items-center gap-2"
          color="accent"
          variant="soft"
          onClick={openFilter}
        >
          <Filter />
          فیلترها
        </Button>
      </div>
      <AddPatientAndAction selectedRows={selectedRows} />
    </div>
  );
}
