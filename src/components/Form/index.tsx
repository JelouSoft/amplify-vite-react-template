import React, { ReactNode } from "react";
import {
  DefaultValues,
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import handleErrors from "../../helpers/handleErrors";

interface Props<TFieldValues extends FieldValues> {
  children: ReactNode;
  onSubmit: SubmitHandler<TFieldValues>;
  defaultValues?: DefaultValues<TFieldValues>;
  className?: ReactNode;
  onKeyDown?: React.FormEventHandler<HTMLFormElement>;
}

const FormComponent = <TFieldValues extends FieldValues>({
  defaultValues,
  ...props
}: Props<TFieldValues>) => {
  const methods = useForm({
    defaultValues,
  });
  const onSubmit: SubmitHandler<TFieldValues> = async (values) => {
    try {
      await props.onSubmit(values);
    } catch (error) {
      const errorResponse = handleErrors<TFieldValues>(error);
      if (errorResponse)
        methods.setError(errorResponse.input, {
          type: errorResponse.type,
          message: errorResponse.message,
        });
    }
  };
  return (
    <FormProvider {...methods}>
      <form
        onKeyDown={props.onKeyDown}
        onSubmit={methods.handleSubmit(onSubmit)}
        className={`flex flex-1 flex-col overflow-hidden ${props.className}`}
      >
        {props.children}
      </form>
    </FormProvider>
  );
};

export default FormComponent;
