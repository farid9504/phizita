// utils/useDebouncedQueryParam.ts
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "use-debounce";
import { useEffect } from "react";

/**
 * Automatically adds/removes query param with debounce
 *
 * @param key - The query parameter key (e.g., "q")
 * @param value - The value to sync to URL
 * @param delay - (optional) debounce delay in ms, default is 500
 */
export default function useDebouncedQueryParam(
  key: string,
  value: string,
  delay = 1000
) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [debouncedValue] = useDebounce(value, value ? delay : 1);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (debouncedValue) {
      params.set(key, debouncedValue);
    } else {
      params.delete(key);
    }

    router.push(`?${params.toString()}`, { scroll: false });
  }, [debouncedValue, key, router, searchParams]);
}
