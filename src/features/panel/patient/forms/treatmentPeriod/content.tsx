import FieldForm from "@/components/fieldForm";
import { IAddTreatmentPeriod, IContentFormPatient } from "@/interface/patient";

export default function ContentTreatmentPeriod({
  setFieldValue,
  values,
  errors,
  touched,
}: IContentFormPatient<IAddTreatmentPeriod>) {
  return (
    <>
      <FieldForm
        setValue={(value) => setFieldValue("medicalSystem", value)}
        label="شماره نظام پزشکی"
        fieldValue={values.medicalSystem}
        error={Boolean(touched?.medicalSystem && errors?.medicalSystem)}
        type="number"
      />
      <FieldForm
        setValue={(value) => setFieldValue("doctorName", value)}
        label="نام پزشک"
        fieldValue={values.doctorName}
        error={Boolean(touched?.doctorName && errors?.doctorName)}
      />
      <FieldForm
        setValue={(value) => setFieldValue("doctorSpecialty", value)}
        label="تخصص پزشک"
        fieldValue={values.doctorSpecialty}
        error={Boolean(touched?.doctorSpecialty && errors?.doctorSpecialty)}
      />
      <FieldForm
        setValue={(value) => setFieldValue("physiotherapistName", value)}
        label="نام فیزیوتراپیست"
        fieldValue={values.physiotherapistName}
        error={Boolean(
          touched?.physiotherapistName && errors?.physiotherapistName
        )}
      />
      <FieldForm
        setValue={(value) => setFieldValue("treatmentSessions", value)}
        label="تعداد جلسه درمانی"
        fieldValue={values.treatmentSessions}
        error={Boolean(touched?.treatmentSessions && errors?.treatmentSessions)}
      />
    </>
  );
}
