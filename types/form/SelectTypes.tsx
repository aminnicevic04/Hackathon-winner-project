export interface OptionProps {
  label: string;
  value: string;
}

export interface SelectProps {
  options: OptionProps[];
  onChange: any;
  value?: string;
  id: string;
}
