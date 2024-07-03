import { FieldValues } from "react-hook-form";
import { TextFieldProps } from "../../types/Form";
import TextFieldComponent from "../TextField";
import ShowPasswordFieldComponent from "./ShowPasswordField";
import { useState } from "react";

const PasswordFieldComponent = <TFieldValues extends FieldValues>(
  props: TextFieldProps<TFieldValues>
) => {
  const [show, setShow] = useState(false);
  const handleShowPaswordChange = (show: boolean) => {
    setShow(show);
  };
  return (
    <>
      <TextFieldComponent {...props} type={show ? "text" : "password"} />
      <ShowPasswordFieldComponent onChange={handleShowPaswordChange} />
    </>
  );
};

export default PasswordFieldComponent;
