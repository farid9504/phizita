import { IAddTreatmentPeriod } from "@/interface/patient";
import { schemaTreatmentPeriod } from "@/Schema/addPatient";
import { useFormik } from "formik";

export function useTreatmentPeriod({
  onSubmit,
  data,
}: {
  onSubmit: (key: IAddTreatmentPeriod) => void;
  data: IAddTreatmentPeriod;
}) {
  const formik = useFormik({
    initialValues: data,
    onSubmit,
    validationSchema: schemaTreatmentPeriod,
    validateOnBlur: true,
    validateOnChange: true,
  });
  return { formik };
}
