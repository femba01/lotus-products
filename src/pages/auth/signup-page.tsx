// pages/SignupPage.tsx

import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Create Account
        </h2>

        <p className="text-gray-500 mt-2">
          Get started with your dashboard account
        </p>
      </div>

      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">
            Full Name
          </label>

          <input
            type="text"
            placeholder="John Doe"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
          />
        </div>

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
            placeholder="Create password"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-xl hover:opacity-90 transition"
        >
          Create Account
        </button>
      </form>

      <p className="text-sm text-gray-500 mt-6 text-center">
        Already have an account?{" "}
        <Link
          to="/auth/login"
          className="text-black font-semibold"
        >
          Login
        </Link>
      </p>
    </div>
  );
}