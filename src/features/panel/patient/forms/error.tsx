import Alert from "@/components/alert";
import { patientTabs } from "@/constants/patient/tabs";

export default function Error({ step }: { step: number }) {
  return (
    <div className="my-[16px]">
      <div className="h-[41px]">
        <Alert type="error">
          پرکردن تمامی فیلدهای
          <strong className="mx-1 inline-block">{patientTabs[step]}</strong>
          ضروری است
        </Alert>
      </div>
    </div>
  );
}
