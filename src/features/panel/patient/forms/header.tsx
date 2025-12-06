import Steps from "@/components/steps";
import { patientTabs } from "@/constants/patient/tabs";

export default function HeaderPatient({ step }: { step: number }) {
  return (
    <div className="w-full h-[108px] border-b border-neutral-200 flex items-center justify-center">
      <div className="w-full px-6 md:px-16">
        <Steps data={patientTabs} step={step} />
      </div>
    </div>
  );
}
