import { signUp } from "aws-amplify/auth";
import { SubmitHandler } from "react-hook-form";
import FormComponent from "../../../components/Form";
import TextFieldComponent from "../../../components/TextField";
import SubmitComponent from "../../../components/Submit";
import { SignupInputs } from "../../../types/SignUp";
import PasswordFieldComponent from "../../../components/PasswordField";
import { Link } from "react-router-dom";

const SignupComponent = () => {
  const handleSubmit: SubmitHandler<SignupInputs> = async (values) => {
    await signUp({
      username: values.phone,
      password: values.password,
      options: {
        userAttributes: {
          name: values.fullname,
        },
      },
    });
  };

  return (
    <FormComponent<SignupInputs>
      className="w-1/6 px-4 py-3"
      onSubmit={handleSubmit}
    >
      <h1>Registro de usuario</h1>
      <TextFieldComponent
        autoFocus
        name="fullname"
        config={{ required: true }}
        label="Nombre completo"
      />
      <TextFieldComponent
        name="phone"
        config={{
          required: true,
          pattern: {
            value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/g,
            message: "Proporciona un teléfono de 10 dígitos.",
          },
        }}
        label="Teléfono"
        type="phone"
      />
      <PasswordFieldComponent
        name="password"
        config={{ required: true, min: 8 }}
        label="Contraseña"
      />
      <SubmitComponent>Crear cuenta</SubmitComponent>
      <div className="flex items-center text-xs gap-1 mt-2">
        ¿Ya tengo una cuenta?
        <Link to="/signin" className="no-underline hover:underline">
          Iniciar sesión
        </Link>
      </div>
    </FormComponent>
  );
};

export default SignupComponent;
