import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { cloneElement } from "react";
import { JSX } from "react/jsx-dev-runtime";
import style from "./styles";
import Link from "next/link";
import clsx from "clsx";
export default function NavItem({
  label,
  icon,
  selected,
  href,
}: {
  label: string;
  icon: JSX.Element;
  selected: boolean;
  href: string;
}) {
  return (
    <ListItemButton sx={style.navItem} selected={selected}>
      <div className="p-4 lg:px-3 lg:py-[9.5px] w-full md:px-2.5 py-2">
        <Link
          href={href}
          className={clsx(
            "flex items-center w-full h-full",
            "md:justify-center md:flex-col",
            'lg:flex-row lg:justify-end',
          )}
        >
          {/* icon */}
          <ListItemIcon sx={style.navIcon}>
            {cloneElement(icon, { fill: "CurrentColor" })}
          </ListItemIcon>

          {/* label */}
          <ListItemText
            primary={label}
            sx={style.navLabel}
            className="text-start md:text-center lg:text-start ms-[8px]"
          />
        </Link>
      </div>
    </ListItemButton>
  );
}
