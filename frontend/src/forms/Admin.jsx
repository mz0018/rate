import React, { useState } from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Admin = () => {

  const [visible, setVisible] = useState(false);

  return (
    <section className="w-full h-screen grid grid-cols-1 md:grid-cols-2">
      
      {/* Left side*/}
      <div className="bg-[#628dec] hidden md:block"></div>

      {/* Right side*/}
      <div className="bg-[var(--bg-color)] min-h-screen flex items-center justify-center">
        <form action="/admin-login" method="POST" className="w-full lg:w-2/3 px-2 space-y-4">
          
          <h2 className="text-xl font-semibold">Login</h2>
          <p className="text-gray-600 text-sm">
            Enter your username and password to securely access your account.
          </p>

          <div>
            <label htmlFor="username" className="block text-sm font-medium text-[var(--text-color)]">
              Username
            </label>

            <div className="relative mt-1">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />

              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                className="block w-full pl-10 pr-3 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[var(--text-color)]">
              Password
            </label>

            <div className="relative mt-1">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />

              <input
                type={visible ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                className="block w-full pl-10 pr-10 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
              />

              <button
                type="button"
                onClick={() => setVisible(!visible)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {visible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-[#628dec] text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors tracking-widest"
            >
              Sign in
            </button>

            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4" />
              <span>Remember Password</span>
            </label>
          </div>

          <p className="text-sm text-blue-700 hover:underline cursor-pointer text-center">
            Forgot your password?
          </p>

        </form>
      </div>
    </section>
  );
};

export default Admin;
