"use client";
import { Input } from "@mui/material";
import styleSx from "./style";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useDebouncedQueryParam from "@/utils/useDebouncedQueryParam";
import ClickOutSide from "@/utils/clickOutSide";
import StartAdornment from "./startAdornment";

export default function Search({
  placeholder,
  keyQuery,
}: {
  placeholder: string;
  keyQuery: string;
}) {
  const searchParams = useSearchParams();

  const paramsValue = searchParams.get(keyQuery) || "";

  const [value, setValue] = useState<string>(paramsValue);

  const { wrapperRef, open, setOpen } = ClickOutSide({
    enable: Boolean(paramsValue),
  });

  useDebouncedQueryParam(keyQuery, value);

  useEffect(() => {
    setOpen(Boolean(paramsValue));
  }, [paramsValue]);

  useEffect(() => {
    if (!open) setValue("");
  }, [open]);

  return (
    <div className="relative" ref={wrapperRef}>
      <Input
        sx={(theme) => styleSx.search(theme, open)}
        className={`delay-150 ${open ? "filled" : ""}`}
        placeholder={placeholder}
        disableUnderline
        onChange={(e) => setValue(e.target.value)}
        value={value}
        onFocus={() => setOpen(true)}
        autoFocus={open}
        startAdornment={
          <StartAdornment
            haveValue={Boolean(value)}
            clear={() => setValue("")}
          />
        }
      />
    </div>
  );
}
