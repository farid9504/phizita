import { MouseEvent, useEffect, useMemo, useState } from "react";
import Button from "../button";
import { Popover, Typography } from "@mui/material";
import Up from "@/icons/fielld/up.svg";
import { PaginationSize } from "@/constants/pagination";

const PageSize = ({
  size,
  setSize,
}: {
  size: number;
  setSize: (key: number) => void;
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const isOpen = useMemo(() => Boolean(anchorEl), [anchorEl]);

  useEffect(() => setAnchorEl(null), [size]);

  return (
    <div className="w-[99px]">
      <Button
        className="w-[99px] h-[32px] text-[12px] flex items-center justify-center"
        color="neutral"
        variant="surface"
        onClick={(e: MouseEvent<HTMLButtonElement>) =>
          setAnchorEl(e.currentTarget)
        }
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {size} / صفحه
        <Up
          fill="var(--defaultColor)"
          className={`mr-[8px] ${isOpen ? "rotate-[180deg]" : ""} `}
        />
      </Button>
      <Popover
        open={isOpen}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        aria-labelledby="page-size-popover"
      >
        {PaginationSize.map((pSize) => (
          <div key={pSize} onClick={() => setSize(pSize)}>
            <Typography
              sx={{
                fontFamily: "inherit",
                fontSize: 12,
                color: "var(--neutral-11)",
                minHeight: 16,
                margin: "8px",
                cursor: "pointer",
                p: 1,
              }}
              className={`hover:bg-[var(--neutral-04)] ${
                pSize === size ? "bg-[var(--neutral-04)]" : ""
              }`}
            >
              {pSize} در هر صفحه
            </Typography>
          </div>
        ))}
      </Popover>
    </div>
  );
};

export default PageSize;
