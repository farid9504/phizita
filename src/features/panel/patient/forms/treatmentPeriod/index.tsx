import { Formik } from "formik";
import { IAddTreatmentPeriod } from "@/interface/patient";
import {
  initialTreatmentPeriod,
  schemaTreatmentPeriod,
} from "@/Schema/addPatient";
import { Dispatch, SetStateAction } from "react";
import Layout from "../layout";
import FieldForm from "@/components/fieldForm";

export default function TreatmentPeriod({
  onSubmit,
  setStep,
}: {
  onSubmit: (key: IAddTreatmentPeriod) => void;
  setStep: Dispatch<SetStateAction<number>>;
}) {
  return (
    <Formik
      initialValues={initialTreatmentPeriod}
      onSubmit={onSubmit}
      validationSchema={schemaTreatmentPeriod}
    >
      {({ setFieldValue, values, errors, touched }) => (
        <Layout
          error={<></>}
          title="جزئیات دوره درمانی بیمار"
          preStep={() => setStep((p) => p - 1)}
        >
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
            error={Boolean(
              touched?.treatmentSessions && errors?.treatmentSessions
            )}
          />
          {/* <TreatmentDate /> */}
        </Layout>
      )}
    </Formik>
  );
}
