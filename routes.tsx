import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./src/pages/app/dashboard";
import { SignIn } from "./src/pages/auth/sign-in";
import { AppLayout } from "./src/pages/_layouts/app";
import { AuthLayout } from "./src/pages/_layouts/auth";
import { SignUp } from "./src/pages/auth/sign-up";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{ path: "/", element: <Dashboard /> }],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [{ path: "/sign-in", element: <SignIn /> }],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [{ path: "/sign-up", element: <SignUp /> }],
  },
]);
