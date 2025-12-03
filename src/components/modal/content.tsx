import { ReactNode } from "react";
import styles from "./Modal.module.scss";

export default function ContentModal({ children }: { children: ReactNode }) {
  return (
    <div className={styles.content} onClick={(e) => e.stopPropagation()}>
      {children}
    </div>
  );
}
