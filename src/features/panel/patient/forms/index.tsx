"use client";
import { useState } from "react";
import FormPatient from "./main";
import HeaderPatient from "./header";

export default function AddPatient() {
  const [step, setStep] = useState<number>(3);
  return (
    <div className="w-full h-full flex flex-col">
      <HeaderPatient step={step} />
      <FormPatient step={step} setStep={setStep} />
    </div>
  );
}
