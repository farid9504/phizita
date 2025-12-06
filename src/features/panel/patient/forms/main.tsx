import { Dispatch, SetStateAction } from "react";
import GeneralInfo from "./generalInfo";
import PatientCondition from "./patientCondition";
import { useForms } from "./hooks/useForms";
import TreatmentPeriod from "./treatmentPeriod";

export default function FormAddPatient({
  step,
  setStep,
}: {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}) {
  const { generalSubmit, conditionSubmit, formData, treatmentSubmit, preStep } =
    useForms(setStep);
  return (
    <div className="w-full  h-full overflow-hidden">
      <div className="w-full mx-auto h-full">
        {step === 1 && (
          <GeneralInfo onSubmit={generalSubmit} data={formData.generalInfo} />
        )}
        {step === 2 && (
          <PatientCondition
            preStep={preStep}
            onSubmit={conditionSubmit}
            data={formData.patientCondition}
          />
        )}

        {step === 3 && (
          <TreatmentPeriod
            onSubmit={treatmentSubmit}
            preStep={preStep}
            data={formData.treatmentPeriod}
          />
        )}
      </div>
    </div>
  );
}
