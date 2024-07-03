import { FieldValues, Path } from "react-hook-form";

export interface ServerInputError<TFieldValues extends FieldValues> {
  input: Path<TFieldValues>;
  type: string;
  message: string;
}
