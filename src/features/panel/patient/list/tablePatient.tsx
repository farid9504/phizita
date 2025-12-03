import Table from "@/components/table";
import { columnsPatient } from "@/constants/patient/Columns";
import { Irows } from "@/interface/table";
import { PatientListData } from "./data";
export default function TablePatient({
  setSelectedRows,
}: {
  setSelectedRows?: (key: Irows[]) => void;
}) {
  return (
    <Table
      columns={columnsPatient}
      rows={PatientListData}
      setSelectedRows={(rows: Irows[]) => setSelectedRows?.(rows)}
    />
  );
}
