import UserAvatar from "../avatar";
import Down from "@/icons/fielld/down.svg";
export default function UserFeedBack() {
  return (
    <div className="flex items-center">
      <UserAvatar />
      <div className="flex-1 flex flex-col md:gap-0.5 lg:gap-1 ms-[8px]">
        <p className="text-[14px] font-medium text-[var(--defaultColor)]">
          عنوان مطب درمانی
        </p>
        <p className="text-[12px] text-[var(--neutral-11)]">
          4 پزشک فعال
        </p>
      </div>
      <Down fill="var(--defaultColor)" className="scale-[.7] ms-[12px]" />
    </div>
  );
}
