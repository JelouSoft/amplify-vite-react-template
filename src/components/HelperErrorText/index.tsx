import { FieldValues, Path, useFormContext } from "react-hook-form";
import CONSTANTS_ERROR from "../../constants/error";

interface Props<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
}

const HelperErrorTextComponent = <TFieldValues extends FieldValues>(
  props: Props<TFieldValues>
) => {
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <div className="text-xs text-red-700 dark:text-red-400 w-full">
      {errors[props.name] &&
        (errors[props.name]?.type === "required"
          ? CONSTANTS_ERROR.REQUIRED_INPUT
          : `${errors[props.name]?.message}`)}
    </div>
  );
};

export default HelperErrorTextComponent;
