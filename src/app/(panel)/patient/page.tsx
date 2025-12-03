import PatientList from "@/features/panel/patient/list";
export default function Patient() {
  return (
    <div className="w-full h-full overflow-hidden flex flex-col lg:p-[24px]">
      <PatientList />
    </div>
  );
}
