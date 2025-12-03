import UploadFiled from "@/components/fieldForm/upload";
import { IFiledUpload } from "@/interface/fieldForm";
import { useUpload } from "./hooks/useUpload";
import PreviewFile from "@/components/previewFile";
import TitleLine from "@/components/titleLine";

export default function UploadPatientFile({
  title,
  accept,
  setFieldValue,
}: {
  title: string;
  accept?: string;
  setFieldValue: (key: IFiledUpload) => void;
}) {
  const { setFilesPatient, filesPatient, handleDelete } =
    useUpload(setFieldValue);
  return (
    <>
      <div className="flex flex-col gap-2">
        <span className="text-[14px] text-[var(--neutral-11)]">
          مستندات بیمار
        </span>
        <p className="text-[12px] text-[var(--neutral-10)]">
          در صورت در اختیار داشتن تصویر ام‌آر‌آی یا نسخه پزشک مرتبط با بیمار،
          لطفاً در این قسمت بارگذاری نمایید.
        </p>
      </div>
      <UploadFiled
        title={title}
        accept={accept}
        setFieldValue={(files) => setFilesPatient(files)}
        multiple
      />
      {Boolean(filesPatient?.length) && (
        <>
          <TitleLine title="لیست فایل‌های شما" position="center" />
          {filesPatient &&
            Array.from(filesPatient).map((file, index) => (
              <PreviewFile
                key={index}
                file={file}
                state="success"
                onDelete={() => handleDelete(index)}
              />
            ))}
        </>
      )}
    </>
  );
}
