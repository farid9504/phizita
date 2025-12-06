import { useSteps } from "./hooks/useSteps";
import styles from "./Steps.module.scss";
import Successful from "@/icons/outlined/successful.svg";
export function Step({
  label,
  index,
  level,
}: {
  label: string;
  index: number;
  level: number;
}) {
  const { getStatus } = useSteps(level);
  const state = getStatus(index);
  return (
    <div className="flex flex-col font-medium">
      <div className={`${styles.stepCircle} ${styles[state]}`}>
        {state === "successful" ? (
          <Successful fill="currentColor" className="scale-[1.3]" />
        ) : (
          index
        )}
      </div>
      <p className={`${styles.stepTitle} ${styles[state]}`}>{label}</p>
    </div>
  );
}
