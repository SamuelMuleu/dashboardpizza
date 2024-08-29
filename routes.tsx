import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./src/pages/app/dashboard";
import { SignIn } from "./src/pages/auth/sign-in";
import { AppLayout } from "./src/pages/_layouts/app";
import { AuthLayout } from "./src/pages/_layouts/auth";

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
]);
