import { usePathname } from "next/navigation";
import DynamicBreadcrumbs from "../breadcrumbs";
import { EnmuDescription } from "@/constants/enums/breadcrumbs";
import clsx from "clsx";

export default function Breadcrumbs() {
  const activeRoute = usePathname()?.replace(/\//g, "");
  return (
    <div
      className={clsx(
        "pt-[16px] hidden",
        "md:block md:bg-[var(--neutral-02)] md:px-4",
        "lg:bg-transparent lg:px-0"
      )}
    >
      <DynamicBreadcrumbs />
      <p className="text-[14px] text-[var(--neutral-11)] mt-[8px] mb-2 lg:block hidden">
        {EnmuDescription[activeRoute]}
      </p>
    </div>
  );
}
