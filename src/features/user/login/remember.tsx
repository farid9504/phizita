import AppLink from "@/components/appLink";
import CheckBoxField from "@/components/checkBoxField";
import { ILoginFieldsProps } from "@/interface/login";

export default function RemeberLogin({
  values,
  setFieldValue,
}: ILoginFieldsProps) {
  return (
    <div className="flex justify-between items-center mt-2">
      <CheckBoxField
        label="مرا به خاطر بسپار!"
        checked={Boolean(values.remember)}
        setFieldValue={(checked) => setFieldValue("remember", checked)}
      />

      <AppLink className="xl:text-[14px] text-[12px] font-normal" href="#">
        رمز عبور خود را فراموش کرده‌اید؟
      </AppLink>
    </div>
  );
}
