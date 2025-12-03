import FieldForm from "@/components/fieldForm";
import { ILoginFieldsProps } from "@/interface/login";

export default function LoginFields({
  values,
  errors,
  setFieldValue,
  touched,
}: ILoginFieldsProps) {
  return (
    <>
      <FieldForm
        setValue={(value) => setFieldValue("userName", value)}
        label="نام کاربری"
        fieldValue={values.userName}
        error={Boolean(touched?.userName && errors?.userName)}
        maxLength={20}
      />
      <FieldForm
        setValue={(value) => setFieldValue("password", value)}
        label="رمزعبور"
        type="password"
        fieldValue={values.password}
        error={Boolean(touched?.password && errors?.password)}
        maxLength={20}
      />
    </>
  );
}
