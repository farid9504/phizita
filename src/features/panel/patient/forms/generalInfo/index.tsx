import { IAddPatientGeneralInfo } from "@/interface/patient";
import Layout from "../layout";
import Error from "./error";
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
    <Layout
      error={<Error />}
      title="مشخصات بیمار"
      onSubmit={formik.handleSubmit}
    >
      <ContentGeneralInfo
        setFieldValue={formik.setFieldValue}
        values={formik.values}
        errors={formik.errors}
        touched={formik.touched}
      />
    </Layout>
  );
}
