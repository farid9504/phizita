import { FormikHelpers } from "formik";
import { IFieldDate, IFiledUpload, IValueFieldSelect } from "./fieldForm";

export interface IheaderAddPatient {
  title: string;
  status: "default" | "active" | "successful";
}
export interface IAddPatientGeneralInfo {
  firstName: string;
  lastName: string;
  nationalCode: number | null;
  phoneNumber: string;
  phone: string;
  address: string;
}

export interface IAddPatientCondition {
  patientInjured: string;
  patientProblem: string;
  medications: string;
  dateMri: IFieldDate;
  resultMri: string;
  files: IFiledUpload;
}

export interface IAddTreatmentPeriod {
  medicalSystem: number | null;
  doctorName: string;
  doctorSpecialty: string;
  physiotherapistName: string;
  treatmentSessions: number | null;
  treatmentStartDate: string;
  basicInsurance: IValueFieldSelect;
  supplementaryInsurance: IValueFieldSelect;
}

export interface IContentFormPatient<T> {
  setFieldValue: FormikHelpers<T>["setFieldValue"];
  values: T;
  errors: { [K in keyof T]?: string };
  touched: { [K in keyof T]?: boolean };
}
