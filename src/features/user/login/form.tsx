import { Formik, Form } from "formik";
import { ILogin } from "@/interface/login";
import { initialValues, validationSchema } from "@/Schema/login";
import HeaderForm from "./header";
import LoginFields from "./fields";
import LoginActions from "./actions";
import clsx from "clsx";
import RemeberLogin from "./remember";

export default function FormLogin() {
  const onSubmit = (values: ILogin) => {
    console.log("Form data", values);
  };

  return (
    <div
      className={clsx(
        "xl:max-w-[100%] xl:min-w-[440px] m-auto xl:h-auto",
        "min-w-full h-full p-[32px]"
      )}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ setFieldValue, values, errors, touched }) => (
          <Form className={clsx("xl:h-auto xl:block", "h-full flex flex-col")}>
            <div className="flex-1 xl:flex-auto">
              <div className={"flex flex-col relative gap-[48px]"}>
                <HeaderForm />
                <LoginFields
                  values={values}
                  errors={errors}
                  touched={touched}
                  setFieldValue={setFieldValue}
                />
              </div>
              <RemeberLogin values={values} setFieldValue={setFieldValue} />
            </div>
            <div className="mt-[54px]">
              <LoginActions
                showError={
                  Boolean(touched?.userName && errors?.userName) ||
                  Boolean(touched?.password && errors?.password)
                }
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
