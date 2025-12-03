import FieldForm from "@/components/fieldForm";
import {
  IAddPatientGeneralInfo,
  IContentFormPatient,
} from "@/interface/patient";

export default function ContentGeneralInfo({
  setFieldValue,
  values,
  errors,
  touched,
}: IContentFormPatient<IAddPatientGeneralInfo>) {
  return (
    <>
      <FieldForm
        setValue={(value) => setFieldValue("nationalCode", value)}
        label="شماره ملی"
        fieldValue={values.nationalCode}
        error={Boolean(touched?.nationalCode && errors?.nationalCode)}
        type="number"
      />
      <FieldForm
        setValue={(value) => setFieldValue("firstName", value)}
        label="نام"
        fieldValue={values.firstName}
        error={Boolean(touched?.firstName && errors?.firstName)}
      />
      <FieldForm
        setValue={(value) => setFieldValue("lastName", value)}
        label="نام خانوادگی"
        fieldValue={values.lastName}
        error={Boolean(touched?.lastName && errors?.lastName)}
      />
      <FieldForm
        setValue={(value) => setFieldValue("phoneNumber", value)}
        label="شماره همراه"
        fieldValue={values.phoneNumber}
        error={Boolean(touched?.phoneNumber && errors?.phoneNumber)}
        type="tel"
      />
      <FieldForm
        setValue={(value) => setFieldValue("phone", value)}
        label="شماره تلفن ثابت"
        fieldValue={values.phone}
        error={Boolean(touched?.phone && errors?.phone)}
        type="tel"
      />
      <FieldForm
        setValue={(value) => setFieldValue("address", value)}
        label="آدرس محل سکونت"
        fieldValue={values.address}
        error={Boolean(touched?.address && errors?.address)}
        variant="textarea"
      />
    </>
  );
}
