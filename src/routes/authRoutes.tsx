import { Route, Navigate } from "react-router-dom";
import AuthLayout from "../pages/auth/auth-layout";
import LoginPage from "../pages/auth/login-page";
import SignupPage from "../pages/auth/signup-page";

type Props = {};

export default function AuthRoutes({ }: Props) {
  return (
    <Route path="/auth" element={<AuthLayout />}>
      <Route index element={<Navigate to="login" replace />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="sign-up" element={<SignupPage />} />
    </Route>
  );
}