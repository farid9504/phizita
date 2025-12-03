"use client";

import CoverLogin from "@/features/user/login/cover";
import FormLogin from "@/features/user/login/form";
import clsx from "clsx";

export default function Login() {
  return (
    <div className={clsx("w-full h-full flex xl:flex-row", "flex-col")}>
      <CoverLogin />
      <div
        className={
          "flex-1 h-full flex overflow-hidden items-center justify-center"
        }
      >
        <FormLogin />
      </div>
    </div>
  );
}
