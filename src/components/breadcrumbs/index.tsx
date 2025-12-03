"use client";

import { Breadcrumbs } from "@mui/material";
import { usePathname } from "next/navigation";
import { FC } from "react";
import ItemBreadcrumbs from "./item";

const DynamicBreadcrumbs: FC = () => {
  const pathnames: string[] = usePathname().split("/").filter(Boolean);
  return (
    <div>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator="/"
        sx={{ fontSize: 12, fontFamily: "inherit", fontWeight: 500 }}
      >
        {pathnames.map((path, index) => (
          <ItemBreadcrumbs
            path={path}
            index={index}
            key={index}
            length={pathnames.length}
            href={`/${pathnames.slice(0, index + 1).join("/")}`}
          />
        ))}
      </Breadcrumbs>
    </div>
  );
};

export default DynamicBreadcrumbs;
