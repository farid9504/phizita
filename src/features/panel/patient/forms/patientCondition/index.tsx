import { Dispatch, SetStateAction } from "react";
import { IAddPatientCondition } from "@/interface/patient";
import Error from "./error";
import Layout from "../layout";
import ContentPatientCondition from "./content";
import { usePatientCondition } from "./hooks/usePatientCondition";

export default function PatientCondition({
  setStep,
  onSubmit,
  data,
}: {
  setStep: Dispatch<SetStateAction<number>>;
  onSubmit: (key: IAddPatientCondition) => void;
  data: IAddPatientCondition;
}) {
  const { formik } = usePatientCondition({ data, onSubmit });
  return (
    <Layout
      preStep={() => setStep((p) => p - 1)}
      error={<Error />}
      title="جزئیات وضعیت بیمار"
      onSubmit={formik.handleSubmit}
    >
      <ContentPatientCondition
        setFieldValue={formik.setFieldValue}
        errors={formik.errors}
        values={formik.values}
        touched={formik.touched}
      />
    </Layout>
  );
}
