// routes/protected-route.tsx

import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const token = localStorage.getItem("token");

  // Not authenticated
  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }

  // Authenticated
  return <Outlet />;
}