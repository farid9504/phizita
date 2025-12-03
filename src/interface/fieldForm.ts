export interface IValueFieldSelect {
  value: string | boolean;
  label: string;
}

export interface IFormField<T> {
  error?: boolean;
  label: string;
  helperText?: string | boolean;
  setValue: (key: T) => void;
}

export interface IFieldForm extends IFormField<string> {
  fieldValue: string | number | null;
  type?: string;
  maxLength?: number;
  variant?: "input" | "textarea";
  onFocus?: () => void;
  disabled?: boolean;
}

export interface ISelectField extends IFormField<IValueFieldSelect | null> {
  fieldValue: IValueFieldSelect | null;
  options: IValueFieldSelect[];
}
export type IFieldDate = Date | null;

export type IFiledUpload = File[] | null;
