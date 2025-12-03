import clsx from "clsx";
import styles from "./Loading.module.scss";
export default function Loading({
  color,
  className,
}: {
  color?: string;
  className?:string;
}) {
  return (
    <span
      className={clsx(styles.loader , className)}
      style={{ borderColor: color ?? "#fff" }}
    ></span>
  );
}
