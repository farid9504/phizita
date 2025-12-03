import Alert from "@/components/alert";

export default function Error() {
  return (
    <Alert type="error">
      برای ورود به سامانه لطفا
      <strong className="mx-[4px]">نام کاربری</strong>و
      <strong className="mx-[4px]">رمز عبور</strong>
      خود را وارد کنید.
    </Alert>
  );
}
