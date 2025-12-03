import Button from "@/components/button";
import Upload from "@/icons/outlined/upload.svg";
import { IFiledUpload } from "@/interface/fieldForm";
import clsx from "clsx";
import { useId } from "react";
export default function UploadFiled({
  title,
  accept,
  setFieldValue,
  multiple,
}: {
  title: string;
  accept?: string;
  setFieldValue: (key: IFiledUpload) => void;
  multiple?: boolean;
}) {
  const id = useId();
  return (
    <div
      className={clsx(
        "h-[184px] rounded-lg p-4",
        "border-dashed border-[#D0D5DD] border-[1px]",
        "text-xs text-[var(--neutral-08)]"
      )}
    >
      <div className="flex flex-col justify-between h-full items-center">
        <div className="flex flex-col gap-3 items-center font-normal">
          <Upload />
          <p>{title}</p>
        </div>

        {/* upload file */}
        <div>
          <input
            id={id}
            className="hidden"
            type="file"
            accept={accept}
            onChange={(e) => {
              if (!e.target.files) return;

              const filesArray: File[] = Array.from(e.target.files);
              setFieldValue(filesArray);

              e.target.value = "";
            }}
            multiple={multiple}
          />
          <Button
            className="w-[100px] h-10"
            color="accent"
            variant="soft"
            typeButton="button"
          >
            <label
              htmlFor={id}
              className="flex justify-center items-center w-full h-full cursor-pointer"
            >
              انتخاب فایل
            </label>
          </Button>
        </div>
      </div>
    </div>
  );
}
