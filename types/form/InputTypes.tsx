export enum InputType {
  Input = "input",
  Textarea = "textarea",
}

export enum ExtraType {
  Password = "password",
  Number = "number",
  Date = "date",
}

export interface InputProps {
  type: InputType.Input | InputType.Textarea;
  error?: boolean;
  helperText?: string;
  label?: string;
  placeholder: string;
  value?: string;
  onChange?: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onBlur?: () => void;
  id: string;
  extraType?: ExtraType.Password | ExtraType.Number | ExtraType.Date;
  defaultValue?: string;
}
