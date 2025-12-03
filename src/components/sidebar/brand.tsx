import SignatureLogo from "@/icons/signatureLogo.svg";
export default function Brand() {
  return (
    <div className="flex md:items-center">
      <div className="w-[40px] h-[40px] relative">
        <SignatureLogo />
      </div>
      <div className="flex-1 pr-[8px] gap-[2px] flex flex-col">
        <h4 className="text-[16px] text-[var(--defaultColor)] font-medium">
          فیزیتا
        </h4>
        <p className="text-[12px] font-normal text-[var(--neutral-11)] hidden lg:block">
          سامانه انجمن فیزیوتراپیست‌های ایران
        </p>
      </div>
    </div>
  );
}
