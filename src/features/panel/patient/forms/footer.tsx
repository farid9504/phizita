import Button from "@/components/button";

export default function Footer({ preStep }: { preStep?: () => void }) {
  const className = "py-[8px] px-[12px]";
  return (
    <div
      className="px-[70px] text-[12px] h-[64px] border-t-[1px] border-t-[var(--neutral-05)] gap-[8px] flex justify-end items-center"
      style={{ boxShadow: "0px -1px 2px 0px #00000014" }}
    >
      <Button className={className} variant="soft" color="neutral">
        انصراف
      </Button>
      {preStep && (
        <Button className={className} variant="soft" color="neutral" onClick={preStep}>
          مرحله قبلی
        </Button>
      )}
      <Button
        className={className}
        variant="solid"
        color="accent"
        typeButton="submit"
      >
        مرحله بعدی
      </Button>
    </div>
  );
}
