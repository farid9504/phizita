import { GridColDef } from "@mui/x-data-grid";
import VerticalMenu from "@/icons/fielld/verticalMenu.svg";


export const columnsPatient: GridColDef[] = [
  {
    field: "fullName",
    headerName: "مشخصــــات بیمــــار",
    flex: 1,
    minWidth: 160,
    filterable: true,
  },
  {
    field: "nationalCode",
    headerName: "شماره ملی",
    flex: 1,
    minWidth: 120,
    filterable: true,
  },
  {
    field: "phoneNumber",
    headerName: "شماره همراه",
    flex: 1,
    minWidth: 120,
    filterable: true,
  },
  {
    field: "physiotherapist",
    headerName: "فیزیوتراپیست",
    flex: 1,
    minWidth: 156,
    filterable: true,
  },
  {
    field: "status",
    headerName: "وضعیت درمانی",
    flex: 1,
    minWidth: 140,
    sortable: false,
    filterable: true,
    renderCell: (params) => <>{params.value}</>,
  },
  {
    field: "date",
    headerName: "تاریخ اولین معاینه",
    flex: 1,
    minWidth: 128,
    filterable: true,
    renderCell: (params) => <>{params.value}</>,
  },
  {
    field: "action",
    headerName: "",
    width: 50,
    sortable: false,
    disableColumnMenu: true,
    filterable: false,
    renderCell: () => (
      <div className="w-full h-full flex items-center justify-center">
        <VerticalMenu fill="var(--neutral-10)" />
      </div>
    ),
  },
];
