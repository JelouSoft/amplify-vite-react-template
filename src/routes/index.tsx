import { createBrowserRouter } from "react-router-dom";
import SignupComponent from "../containers/Session/Signup";
import SigninComponent from "../containers/Session/Signin";
import RecoverComponent from "../containers/Session/Recover";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignupComponent />,
  },
  {
    path: "/signin",
    element: <SigninComponent />,
  },
  {
    path: "/recover",
    element: <RecoverComponent />,
  },
]);

export default router;
