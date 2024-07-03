import { FieldValues, useFormContext } from "react-hook-form";
import HelperErrorTextComponent from "../HelperErrorText";
import { TextFieldProps } from "../../types/Form";

const TextFieldComponent = <TFieldValues extends FieldValues>({
  config,
  ...props
}: TextFieldProps<TFieldValues>) => {
  const {
    formState: { isSubmitting },
    register,
  } = useFormContext<TFieldValues>();
  return (
    <div className="mt-1">
      <label
        htmlFor={props.name}
        className="mb-1 leading-none text-sm font-medium text-gray-900 dark:text-white"
      >
        {props.label}
      </label>
      <input
        className="border dark:border-0 dark:bg-opacity-15 bg-transparent dark:bg-white border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-2.5 dark:placeholder-gray-300 dark:text-white"
        {...register(props.name, config)}
        disabled={isSubmitting || props.disabled}
        type={props.type || "text"}
        id={props.name}
        autoFocus={props.autoFocus}
        placeholder={props.placeholder}
        autoComplete="off"
      />
      <HelperErrorTextComponent name={props.name} />
    </div>
  );
};

export default TextFieldComponent;
