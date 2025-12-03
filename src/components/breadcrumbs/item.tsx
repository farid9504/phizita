import { EnmuBreadcrumbs } from "@/constants/enums/breadcrumbs";
import Link from "next/link";
import { useMemo } from "react";

export default function ItemBreadcrumbs({
  path,
  index,
  length,
  href,
}: {
  path: string;
  index: number;
  length: number;
  href: string;
}) {
  const label = decodeURIComponent(path);
  const lastLabel: string = href.replace(/\//g, "");

  const isLast = useMemo(() => index === length - 1, [index, length]);
  return (
    <Link
      href={href}
      className={
        isLast
          ? "text-base text-[var(--defaultColor)]"
          : "text-[var(--neutral-10)]"
      }
    >
      {EnmuBreadcrumbs[isLast ? lastLabel : label]}
    </Link>
  );
}
