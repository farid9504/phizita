export default function TitleLine({
  title,
  position = "center",
}: {
  title: string;
  position: "center" | "right" | "left";
}) {
  const line = (
    <div className="h-[1px] rounded-lg flex-1 bg-[var(--neutral-04)]"></div>
  );
  const titleElm = (
    <span
      className="text-[14px] font-normal text-[var(--neutral-10)]"
      dir={"auto"}
    >
      {title}
    </span>
  );
  return (
    <div
      className="flex items-center gap-3"
      dir={position === "right" ? "rtl" : position === "left" ? "ltr" : "auto"}
    >
      {position === "center" && (
        <>
          {line}
          {titleElm}
          {line}
        </>
      )}
      {Boolean(position === "right" || position === "left") && (
        <>
          {titleElm}
          {line}
        </>
      )}
    </div>
  );
}
