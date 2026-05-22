// layouts/AuthLayout.tsx

import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2">
        
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center bg-black text-white p-10">
          <h1 className="text-4xl font-bold mb-4">
            Lotus Dashboard
          </h1>

          <p className="text-gray-300 leading-relaxed">
            Manage products, monitor operations, and build better workflows
            with a fast and modern dashboard experience.
          </p>
        </div>

        {/* Right Side */}
        <div className="p-6 md:p-10 flex items-center">
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}