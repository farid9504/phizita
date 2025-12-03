import { IheaderAddPatient } from "@/interface/patient";
import { Fragment } from "react";
import styles from "./Steps.module.scss";
import Successful from "@/icons/outlined/successful.svg";
export default function Steps({ data }: { data: IheaderAddPatient[] }) {
  return (
    <div className="flex items-center w-full">
      {data.map((step, key) => (
        <Fragment key={key}>
          <div className="flex flex-col font-medium">
            <div className={`${styles.stepCircle} ${styles[step.status]}`}>
              {step.status === "successful" ? (
                <Successful fill="currentColor" className="scale-[1.3]" />
              ) : (
                key + 1
              )}
            </div>
            <p className={`${styles.stepTitle} ${styles[step.status]}`}>
              {step.title}
            </p>
          </div>
          {data[key + 1] && (
            <div className="flex-1">
              <hr className="border-[var(--neutral-04)]" />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
