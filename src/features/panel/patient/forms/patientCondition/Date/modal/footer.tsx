import Button from "@/components/button";

export default function Footer({
  cancel,
  submit,
  disabled
}: {
  cancel: () => void;
  submit: () => void;
  disabled:boolean
}) {
  const className = "px-[12.5px] py-[7px] text-[12px]";
  return (
    <div className="w-full h-[72px] border-t-[1px] border-t-[var(--neutral-05)] flex items-center justify-end px-[40px] gap-[8px]">
      <Button
        onClick={cancel}
        className={className}
        variant="soft"
        color="neutral"
      >
        انصراف
      </Button>
      <Button
        onClick={submit}
        className={className}
        variant="solid"
        color="accent"
        disabled={disabled}
      >
        تائید
      </Button>
    </div>
  );
}
