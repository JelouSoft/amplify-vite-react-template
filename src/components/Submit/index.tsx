import { ReactNode } from "react";

interface Props {
  className?: ReactNode;
  children: ReactNode;
  fullWidth?: boolean;
}

const SubmitComponent = ({ children, fullWidth, ...props }: Props) => {
  return (
    <button
      type="submit"
      {...props}
      className={`mt-2 ${
        fullWidth ? "w-full" : "w-fit"
      } text-white whitespace-nowrap bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
        props.className
      }`}
    >
      {children}
    </button>
  );
};

export default SubmitComponent;
