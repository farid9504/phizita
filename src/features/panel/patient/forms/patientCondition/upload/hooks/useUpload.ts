"use client";

import { IFiledUpload } from "@/interface/fieldForm";
import { useEffect, useState } from "react";

export function useUpload(setFieldValue: (key: IFiledUpload) => void) {
  const [filesPatient, setFilesPatient] = useState<IFiledUpload>(null);
  const handleDelete = (index: number) => {
    setFilesPatient((prev) => prev && prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    setFieldValue(filesPatient);
  }, [filesPatient]);

  return { filesPatient, setFilesPatient, handleDelete };
}
