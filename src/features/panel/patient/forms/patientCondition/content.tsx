import FieldForm from "@/components/fieldForm";
import DatePatientCondition from "./Date";
import UploadPatientFile from "./upload";
import { IAddPatientCondition, IContentFormPatient } from "@/interface/patient";
import { IFiledUpload } from "@/interface/fieldForm";

export default function ContentPatientCondition({
  setFieldValue,
  values,
  errors,
  touched,
}: IContentFormPatient<IAddPatientCondition>) {
  return (
    <>
      <FieldForm
        setValue={(value) => setFieldValue("patientInjured", value)}
        label="عضو آسیب دیده"
        fieldValue={values.patientInjured}
        error={Boolean(touched?.patientInjured && errors?.patientInjured)}
      />
      <FieldForm
        setValue={(value) => setFieldValue("patientProblem", value)}
        label="ارزیابی اولیه/مشکل بیمار"
        fieldValue={values.patientProblem}
        error={Boolean(touched?.patientProblem && errors?.patientProblem)}
        type="tel"
        variant="textarea"
      />
      <FieldForm
        setValue={(value) => setFieldValue("medications", value)}
        label="ذکر محدودیت‌ها/داروی مصرفی"
        fieldValue={values.medications}
        error={Boolean(touched?.medications && errors?.medications)}
        type="tel"
        variant="textarea"
      />

      <DatePatientCondition
        label="تاریخ انجام عکس ام آر آی"
        setValue={(value) => setFieldValue("dateMri", value)}
        fieldValue={values.dateMri}
        error={Boolean(touched?.dateMri && errors?.dateMri)}
      />

      <FieldForm
        setValue={(value) => setFieldValue("resultMri", value)}
        label="نتیجه ارزیابی عکس ام آر آی"
        fieldValue={values.resultMri}
        error={Boolean(touched?.resultMri && errors?.resultMri)}
        type="tel"
        variant="textarea"
      />
      <UploadPatientFile
        title="فایل‌های خود را در این قسمت بارگزاری نمایید."
        accept="*"
        setFieldValue={(files: IFiledUpload) => setFieldValue("files", files)}
      />
    </>
  );
}
