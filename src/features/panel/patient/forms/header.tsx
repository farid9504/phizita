import Steps from "@/components/steps";
import { IheaderAddPatient } from "@/interface/patient";

export default function HeaderPatient({ step }: { step: number }) {
  const getStatus = (currentStep: number) => {
    if (step === currentStep) return "active";
    if (step > currentStep) return "successful";
    return "default";
  };

  // Directly create the steps array, no need for useMemo
  const steps: IheaderAddPatient[] = [
    {
      title: "اطلاعات عمومی بیمار",
      status: getStatus(1),
    },
    {
      title: "ارزیابی وضعیت بیمار",
      status: getStatus(2),
    },
    { title: "دوره درمانی بیمار", status: getStatus(3) },
  ];

  return (
    <div className="w-full h-[108px] border-b border-neutral-200 flex items-center justify-center">
      <div className="w-full px-6 md:px-16">
        <Steps data={steps} />
      </div>
    </div>
  );
}
