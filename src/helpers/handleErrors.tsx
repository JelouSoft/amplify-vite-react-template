import { AuthError } from "aws-amplify/auth";
import { ServerInputError } from "../types/Error";
import CONSTANTS_ERROR from "../constants/error";
import { FieldValues, Path } from "react-hook-form";

const handleErrors = <TFieldValues extends FieldValues>(
  error: unknown
): ServerInputError<TFieldValues> | undefined => {
  if (error instanceof AuthError) {
    if (error.name === "InvalidPasswordException")
      return {
        input: "password" as Path<TFieldValues>,
        type: "server",
        message: CONSTANTS_ERROR.BAD_PASSWORD_FORMAT,
      };
    if (
      error.name === "InvalidParameterException" &&
      error.message === "Username should be a phone number."
    )
      return {
        input: "phone" as Path<TFieldValues>,
        type: "server",
        message: CONSTANTS_ERROR.BAD_USERNAME_FORMAT,
      };
    if (error.name === "UsernameExistsException")
      return {
        input: "phone" as Path<TFieldValues>,
        type: "server",
        message: CONSTANTS_ERROR.USERNAME_NOT_ALLOWED,
      };
  } else {
    console.error("Error signing up:", error);
  }
};

export default handleErrors;
