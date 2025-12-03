import { JSX } from "@emotion/react/jsx-runtime";
import NavItem from "../navItem";
import { usePathname } from "next/navigation";
import { ListItem } from "@mui/material";
import { useMemo } from "react";

export default function Item({
  icon,
  label,
  href,
  className,
}: {
  icon: JSX.Element;
  label: string;
  href: string;
  className?: string;
}) {
  const pathName = usePathname();

  const isSelected = useMemo(
    () => pathName === href || (pathName.startsWith(href) && href !== "/"),
    [href, pathName]
  );

  return (
    <ListItem className={`!p-[0] ${className ?? ""}`}>
      <NavItem icon={icon} label={label} href={href} selected={isSelected} />
    </ListItem>
  );
}
