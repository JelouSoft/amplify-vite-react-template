import FormComponent from "../../../components/Form";
import TextFieldComponent from "../../../components/TextField";
import SubmitComponent from "../../../components/Submit";
import { RecoverInputs, SigninInputs } from "../../../types/SignUp";
import { Link } from "react-router-dom";
import { resetPassword } from "aws-amplify/auth";
import { SubmitHandler } from "react-hook-form";

const RecoverComponent = () => {
  const handleSubmit: SubmitHandler<RecoverInputs> = async (values) => {
    const output = await resetPassword({ username: values.username });
    const { nextStep } = output;
    switch (nextStep.resetPasswordStep) {
      case "CONFIRM_RESET_PASSWORD_WITH_CODE":
        console.log(
          `Confirmation code was sent to ${nextStep.codeDeliveryDetails.deliveryMedium}`
        );
        // Collect the confirmation code from the user and pass to confirmResetPassword.
        break;
      case "DONE":
        console.log("Successfully reset password.");
        break;
    }
  };

  return (
    <FormComponent<SigninInputs>
      className="w-1/6 px-4 py-3"
      onSubmit={handleSubmit}
    >
      <h1>Recupera tu cuenta</h1>
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
      <div className="flex items-center justify-end gap-4">
        <Link to="/signin" className="text-sm mt-2">
          Cancelar
        </Link>
        <SubmitComponent>Continuar</SubmitComponent>
      </div>
    </FormComponent>
  );
};

export default RecoverComponent;
