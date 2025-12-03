import { Itable } from "@/interface/table";
import TablePhone from "./phoneTable";
import DesktopTable from "./desktopTable";
import Usetheme from "@/utils/theme";
export default function Table({
  rows = [],
  columns = [],
  setSelectedRows,
}: Itable) {
  const { isTablet } = Usetheme();
  return isTablet ? (
    <TablePhone rows={rows} columns={columns} />
  ) : (
    <DesktopTable
      rows={rows}
      columns={columns}
      setSelectedRows={setSelectedRows}
    />
  );
}
