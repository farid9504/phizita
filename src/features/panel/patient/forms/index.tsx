"use client";
import { useState } from "react";
import FormPatient from "./main";
import HeaderPatient from "./header";

export default function ContentAddPatient() {
  const [step, setStep] = useState<number>(1);
  return (
    <div className="w-full h-full flex flex-col">
      <HeaderPatient step={step} />
      <FormPatient step={step} setStep={setStep} />
    </div>
  );
}
