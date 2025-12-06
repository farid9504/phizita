import { IAddPatientCondition } from "@/interface/patient";
import Layout from "../layout";
import ContentPatientCondition from "./content";
import { usePatientCondition } from "./hooks/usePatientCondition";

export default function PatientCondition({
  preStep,
  onSubmit,
  data,
}: {
  preStep?: () => void;
  onSubmit: (key: IAddPatientCondition) => void;
  data: IAddPatientCondition;
}) {
  const { formik } = usePatientCondition({ data, onSubmit });
  return (
    <Layout
      preStep={preStep}
      title="جزئیات وضعیت بیمار"
      onSubmit={formik.handleSubmit}
      step={1}
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
