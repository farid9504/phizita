import { ReactNode } from "react";
import style from "./Alert.module.scss";
import Warning from "@/icons/outlined/warning.svg";
export default function Alert({
  children,
  type,
}: {
  children: ReactNode;
  type: "error";
}) {
  return (
    <div className={`${style.alert} ${style[type]} xl:text-[14px] text-[10px]`}>
      <Warning className="me-[8px]" />
      {children}
    </div>
  );
}
