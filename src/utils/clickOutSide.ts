"use client";

import { useEffect, useRef, useState } from "react";

export default function ClickOutSide({ enable = false }: { enable: Boolean }) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (enable) return;
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [enable]);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  return { wrapperRef, open, setOpen };
}
