import { signIn } from "aws-amplify/auth";
import { SubmitHandler } from "react-hook-form";
import FormComponent from "../../../components/Form";
import TextFieldComponent from "../../../components/TextField";
import SubmitComponent from "../../../components/Submit";
import { SigninInputs } from "../../../types/SignUp";
import PasswordFieldComponent from "../../../components/PasswordField";
import { Link } from "react-router-dom";

const SigninComponent = () => {
  const handleSubmit: SubmitHandler<SigninInputs> = async (values) => {
    const response = await signIn({
      username: values.username,
      password: values.password,
    });
    console.log(response);
  };

  return (
    <FormComponent<SigninInputs>
      className="w-1/6 px-4 py-3"
      onSubmit={handleSubmit}
    >
      <h1>Iniciar sesión</h1>
      <TextFieldComponent
        name="username"
        config={{
          required: true,
          pattern: {
            value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/g,
            message: "Proporciona un teléfono de 10 dígitos.",
          },
        }}
        label="Teléfono"
        type="username"
      />
      <PasswordFieldComponent
        name="password"
        config={{ required: true, min: 8 }}
        label="Contraseña"
      />
      <SubmitComponent>Continuar</SubmitComponent>
      <Link to="/recover" className="mt-2 text-xs no-underline hover:underline">
        ¿Olvidaste tu contraseña?
      </Link>
      <div className="flex items-center text-xs gap-1 mt-2">
        ¿Aún no estás registrado?
        <Link to="/signup" className="no-underline hover:underline">
          Crear ahora
        </Link>
      </div>
    </FormComponent>
  );
};

export default SigninComponent;
