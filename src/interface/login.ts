export interface ILogin {
    userName : string,
    password : string,
    remember : boolean
}
export interface ILoginFieldsProps {
  values: ILogin;
  errors?: { userName?: string; password?: string };
  touched?: { userName?: boolean; password?: boolean };
  setFieldValue: (field: string, value: string | boolean) => void;
}