import { IAddTreatmentPeriod } from "@/interface/patient";
import Layout from "../layout";
import ContentTreatmentPeriod from "./content";
import { useTreatmentPeriod } from "./hooks/useTreatmentPeriod";

export default function TreatmentPeriod({
  onSubmit,
  preStep,
  data,
}: {
  onSubmit: (key: IAddTreatmentPeriod) => void;
  preStep: () => void;
  data: IAddTreatmentPeriod;
}) {
  const { formik } = useTreatmentPeriod({ data, onSubmit });
  return (
    <Layout
      onSubmit={formik.handleSubmit}
      title="جزئیات دوره درمانی بیمار"
      preStep={preStep}
      step={2}
    >
      <ContentTreatmentPeriod
        setFieldValue={formik.setFieldValue}
        values={formik.values}
        touched={formik.touched}
        errors={formik.errors}
      />
    </Layout>
  );
}
