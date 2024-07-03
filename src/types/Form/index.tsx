import { HTMLInputTypeAttribute } from "react";
import { FieldValues, Path, RegisterOptions } from "react-hook-form";

export interface TextFieldProps<TFieldValues extends FieldValues> {
  config?: RegisterOptions<TFieldValues, Path<TFieldValues>>;
  name: Path<TFieldValues>;
  label?: string;
  placeholder?: string;
  fullWidth?: boolean;
  autoFocus?: boolean;
  onKeyDown?: VoidFunction;
  disabled?: boolean;
  helperText?: string;
  type?: HTMLInputTypeAttribute;
}
