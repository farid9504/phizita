import {
  IAddPatientCondition,
  IAddPatientGeneralInfo,
  IAddTreatmentPeriod,
} from "@/interface/patient";
import * as Yup from "yup";

// general info
export const validationSchema = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  nationalCode: Yup.string().required(),
  phoneNumber: Yup.string().required(),
  phone: Yup.string().required(),
  address: Yup.string().required(),
});
export const initialGeneralInfo: IAddPatientGeneralInfo = {
  firstName: "",
  lastName: "",
  nationalCode: null,
  phoneNumber: "",
  phone: "",
  address: "",
};

// patient condition
export const schemaPatientCondition = Yup.object({
  patientInjured: Yup.string().required(),
  patientProblem: Yup.string().required(),
  medications: Yup.string().required(),
  dateMri: Yup.string().required(),
  resultMri: Yup.string().required(),
  mriPicure: Yup.boolean(),
});
export const initialPatientCondition: IAddPatientCondition = {
  patientInjured: "",
  patientProblem: "",
  medications: "",
  dateMri: null,
  resultMri: "",
  files: null,
};

// treatment period
export const schemaTreatmentPeriod = Yup.object({
  medicalSystem: Yup.number().required(),
  doctorName: Yup.string().required(),
  doctorSpecialty: Yup.string().required(),
  physiotherapistName: Yup.string().required(),
  treatmentSessions: Yup.number().required(),
  treatmentStartDate: Yup.string().required(),
  basicInsurance: Yup.object({
    value: Yup.string().required("بیمه پایه را انتخاب کنید"),
  }),
  supplementaryInsurance: Yup.object({
    value: Yup.boolean()
      .required("بیمه تکمیلی را انتخاب کنید")
      .typeError("لطفا بیمه تکمیلی را انتخاب کنید"),
  }),
});
export const initialTreatmentPeriod: IAddTreatmentPeriod = {
  medicalSystem: null,
  doctorName: "",
  doctorSpecialty: "",
  physiotherapistName: "",
  treatmentSessions: null,
  treatmentStartDate: "",
  basicInsurance: { value: "", label: "" },
  supplementaryInsurance: { value: "", label: "" },
};
