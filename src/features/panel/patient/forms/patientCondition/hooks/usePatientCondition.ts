import { IAddPatientCondition } from "@/interface/patient";
import { schemaPatientCondition } from "@/Schema/addPatient";
import { useFormik } from "formik";

export function usePatientCondition({
  onSubmit,
  data,
}: {
  onSubmit: (key: IAddPatientCondition) => void;
  data: IAddPatientCondition;
}) {
  const formik = useFormik({
    initialValues: data,
    onSubmit,
    validationSchema: schemaPatientCondition,
    validateOnBlur: true,
    validateOnChange: true,
  });
  return { formik };
}
