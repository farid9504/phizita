import { IAddPatientGeneralInfo } from "@/interface/patient";
import Layout from "../layout";
import ContentGeneralInfo from "./content";
import { useGeneralInfo } from "./hooks/useGeneralInfo";

export default function GeneralInfo({
  onSubmit,
  data,
}: {
  onSubmit: (key: IAddPatientGeneralInfo) => void;
  data: IAddPatientGeneralInfo;
}) {
  const { formik } = useGeneralInfo({ data, onSubmit });
  return (
    <Layout title="مشخصات بیمار" onSubmit={formik.handleSubmit} step={0}>
      <ContentGeneralInfo
        setFieldValue={formik.setFieldValue}
        values={formik.values}
        errors={formik.errors}
        touched={formik.touched}
      />
    </Layout>
  );
}
