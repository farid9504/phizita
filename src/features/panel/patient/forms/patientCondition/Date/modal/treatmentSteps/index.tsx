// import FieldForm from "@/components/fieldForm";

export default function TreatmentSteps({
  formatedDate,
}: {
  formatedDate: string;
}) {
  // const [steps , setSteps] = useState<>()
  if (formatedDate)
    return (
      <div className="w-full h-full py-[32px] px-[40px] text-[14px] font-medium flex flex-col">
        <p>
          لطفاً اقدامات لازم برای جلسه اول دوره درمانی بیمار در تاریخ{" "}
          {formatedDate} را وارد نمایید.
        </p>
        <div className="flex-1 overflow-auto">
          {/* <FieldForm 
          
          /> */}
        </div>
      </div>
    );
}
