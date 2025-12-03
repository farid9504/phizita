import clsx from "clsx";
import Loading from "../loading";
import DownloadIcon from "@/icons/outlined/download.svg";
import AttachIcon from "@/icons/fielld/attach.svg";
import FailedIcon from "@/icons/outlined/failed.svg";
import { formatFileSize } from "@/utils/fileSize";
import { downloadFile } from "@/utils/downloadFile";
import DeleteIcon from "@/icons/outlined/delete.svg";

export default function PreviewFile({
  file,
  state = "loading",
  onDelete,
}: {
  file: File;
  state: "loading" | "error" | "success";
  onDelete: () => void;
}) {
  return (
    <div
      dir="ltr"
      className={clsx(
        "w-full h-[72px] flex gap-2",
        "rounded-lg border p-[14px] border-[var(--neutral-04)]",
        "hover:border-[var(--accents-06)] hover:border-2",
        { "active:border-[var(--accents-09)]": state === "success" }
      )}
    >
      <div className="w-[20px] h-[20px]">
        {state === "loading" && (
          <Loading color="inherit" className={"text-[var(--accents-09)]"} />
        )}
        {state === "success" && <AttachIcon className="text-black" />}
        {state === "error" && (
          <FailedIcon className="text-[var(--semantics-red-11)]" />
        )}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-between">
            <span className="tetx-[14px] font-normal">{file.name}</span>
            <div className="flex items-center gap-2 font-normal">
              <span className="text-[13px] text-[var(--neutral-10)]">
                {formatFileSize(file.size)}
              </span>
              <span
                className={clsx(
                  "text-[12px]",
                  { "text-[var(--semantics-skyblue-11)]": state === "loading" },
                  { "text-[var(--semantics-red-11)]": state === "error" },
                  { "text-[var(--semantics-green-11)]": state === "success" }
                )}
              >
                {state === "loading" && "در حال بارگزاری"}
                {state === "error" && "بارگزاری ناموفق"}
                {state === "success" && "بارگزاری‌شده"}
              </span>
            </div>
          </div>
          <div className="flex gap-3 text-[var(--neutral-10)]">
            <DownloadIcon
              className="cursor-pointer"
              onClick={() => downloadFile(file)}
            />
            <DeleteIcon className="cursor-pointer" onClick={onDelete} />
          </div>
        </div>
      </div>
    </div>
  );
}
