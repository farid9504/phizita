import Alert from "@/components/alert";

export default function Error() {
  return (
    <Alert type="error">
      پرکردن تمامی فیلدهای
      <strong className="mx-1 inline-block">ارزیابی وضعیت بیمار</strong>
      ضروری است
    </Alert>
  );
}
