import { Divider } from "@mui/material";

export default function TitleSidebar({ title }: { title: string }) {
  return (
    <div className="flex items-center w-full">
      <span className="text-[14px] text-[var(--neutral-10)] md:m-auto lg:me-[6px]">
        {title}
      </span>
      <Divider className="flex-1 border-[var(--neutral-10)] lg:block hidden" />
    </div>
  );
}
