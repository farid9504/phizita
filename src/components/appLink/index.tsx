import Link from "next/link";
import { ReactNode } from "react";

export default function AppLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link className={`text-[var(--accents-09)] ${className ?? ""}`} href={href}>
      {children}
    </Link>
  );
}
