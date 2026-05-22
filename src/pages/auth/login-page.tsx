// pages/LoginPage.tsx

import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {

  const navigate = useNavigate();

  const handleLogin = () => {
  localStorage.setItem("token", "fake-jwt-token");

  navigate("/");
};

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Welcome Back
        </h2>

        <p className="text-gray-500 mt-2">
          Login to continue to your dashboard
        </p>
      </div>

      <form onSubmit={handleLogin} className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-xl hover:opacity-90 transition"
        >
          Login
        </button>
      </form>

      <p className="text-sm text-gray-500 mt-6 text-center">
        Don&apos;t have an account?{" "}
        <Link
          to="/auth/signup"
          className="text-black font-semibold"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
}