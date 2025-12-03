import { IAddPatientGeneralInfo } from "@/interface/patient";
import { useFormik } from "formik";
import { validationSchema } from "@/Schema/addPatient";

export function useGeneralInfo({
  onSubmit,
  data,
}: {
  onSubmit: (key: IAddPatientGeneralInfo) => void;
  data: IAddPatientGeneralInfo;
}) {
  const formik = useFormik({
    initialValues: data,
    onSubmit,
    validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
  });
  return { formik };
}
