interface Props {
  onChange: (show: boolean) => void;
}

const ShowPasswordFieldComponent = (props: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.checked);
  };
  return (
    <div className="mt-1">
      <label
        htmlFor="showPassword"
        className="text-gray-900 dark:text-white font-thin text-xs flex items-center"
      >
        <input
          type="checkbox"
          id="showPassword"
          className="w-3.5 h-3.5 mx-1"
          onChange={handleChange}
        />
        Mostrar contraseña
      </label>
    </div>
  );
};

export default ShowPasswordFieldComponent;
