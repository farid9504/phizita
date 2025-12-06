"use client";
import { IFieldForm } from "@/interface/fieldForm";
import { createTheme } from "@mui/material";
import { useCallback, useId, useMemo, useState } from "react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

export function useFieldForm({ maxLength, setValue, fieldValue }: IFieldForm) {
  // RTL Theme & Cache Configuration
  const theme = createTheme({ direction: "rtl" });
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const id = useId();
  const [showPassword, setShowPassword] = useState(false);

  const handleClear = useCallback(() => setValue(""), [setValue]);

  const toggleShowPassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);

  const lengthValue = useMemo(() => String(fieldValue).length, [fieldValue]);

  const errorLength = useMemo(
    () => maxLength === lengthValue,
    [maxLength, lengthValue]
  );
  return {
    id,
    showPassword,
    toggleShowPassword,
    handleClear,
    errorLength,
    lengthValue,
    theme,
    cacheRtl,
  };
}
