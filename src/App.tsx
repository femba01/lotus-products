import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AuthLayout from "./pages/auth/auth-layout";
import LoginPage from "./pages/auth/login-page";
import SignupPage from "./pages/auth/signup-page";

import Dashboard from "./pages/dashboard/dashboard";

import NotFound from "./components/NotFound";
import DashboardLayout from "./pages/dashboard/dashboard-layout";
import ProtectedRoute from "./routes/protectedRoutes";
import ProductList from "./pages/products/product-list";
import ProductDetails from "./pages/products/[id]";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Auth Routes */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Navigate to="login" replace />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>

        {/* Protected Wrapper */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<ProductList />} />
            <Route path="products/:id" element={<ProductDetails/>} />
          </Route>
        </Route> 

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}