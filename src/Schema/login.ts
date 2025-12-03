import { ILogin } from "@/interface/login";
import * as Yup from "yup";
export const validationSchema = Yup.object({
  userName: Yup.string().required(),
  password: Yup.string().required(),
  remember: Yup.boolean(),
});
export const initialValues: ILogin = {
  userName: "",
  password: "",
  remember: false,
};
