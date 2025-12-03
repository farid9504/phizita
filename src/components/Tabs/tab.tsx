import clsx from "clsx";
const Tab = ({
  label,
  onClick,
  active,
  className,
}: {
  label: string;
  onClick: () => void;
  active: boolean;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        className,
        "lg:text-[16px] cursor-pointer relative",
        "lg:p-[16px] flex-1 text-center",
        { "text-[var(--accents-11)]": active },
        { "text-[var(--neutral-10)]": !active }
      )}
      onClick={onClick}
    >
      {label}
      {active && (
        <div
          className={clsx(
            "absolute h-[6px] bg-[var(--accents-09)] w-full",
            "lef-0 bottom-0 right-0"
          )}
          style={{
            borderTopRightRadius: "4px",
            borderTopLeftRadius: "4px",
          }}
        ></div>
      )}
    </div>
  );
};
export default Tab;
