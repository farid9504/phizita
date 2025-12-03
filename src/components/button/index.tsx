import { ReactNode } from "react";
import Loading from "@/components/loading";
import styles from "./Button.module.scss";
export default function Button({
  children,
  onClick,
  className,
  typeButton,
  disabled,
  loading,
  color,
  variant,
}: {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  typeButton?: "button" | "reset" | "submit";
  disabled?: boolean;
  loading?: boolean;
  color: "accent" | "neutral" | "error";
  variant: "solid" | "soft" | "surface" | "outline" | "ghost";
}) {
  const typeCalss = `${styles[color]} ${styles[variant]}`;

  return (
    <button
      className={`rounded-[8px] cursor-pointer font-medium text-[12px] xl:text-[14px] ${
        className ?? ""
      } ${typeCalss}`}
      type={typeButton ?? "button"}
      onClick={(e) => onClick?.(e)}
      disabled={Boolean(disabled)}
    >
      {!loading && children}

      {loading && (
        <span className="w-[19px] h-[19.5px] m-auto flex">
          <Loading />
        </span>
      )}
    </button>
  );
}
