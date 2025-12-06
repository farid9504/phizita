import {
  IAddPatientCondition,
  IAddPatientGeneralInfo,
  IAddTreatmentPeriod,
} from "@/interface/patient";
import {
  initialPatientCondition,
  initialGeneralInfo,
  initialTreatmentPeriod,
} from "@/Schema/addPatient";
import { Dispatch, SetStateAction, useState } from "react";

export function useForms(setStep: Dispatch<SetStateAction<number>>) {
  const [formData, setFormData] = useState<{
    generalInfo: IAddPatientGeneralInfo;
    patientCondition: IAddPatientCondition;
    treatmentPeriod: IAddTreatmentPeriod;
  }>({
    generalInfo: initialGeneralInfo,
    patientCondition: initialPatientCondition,
    treatmentPeriod: initialTreatmentPeriod,
  });

  const Next = () => setStep((p) => p + 1);

  const generalSubmit = (data: IAddPatientGeneralInfo) => {
    setFormData((prev) => ({ ...prev, generalInfo: data }));
    Next();
  };

  const conditionSubmit = (data: IAddPatientCondition) => {
    setFormData((prev) => ({ ...prev, patientCondition: data }));
    Next();
  };

  const treatmentSubmit = (data: IAddTreatmentPeriod) => {
    setFormData((prev) => ({ ...prev, treatmentPeriod: data }));
  };

  const preStep = () => setStep((p) => p - 1);

  return {
    formData,
    generalSubmit,
    conditionSubmit,
    treatmentSubmit,
    preStep,
  };
}
