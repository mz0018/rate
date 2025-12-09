import React, { useState } from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Admin = () => {

  const [visible, setVisible] = useState(false);

  return (
    <section
      className="w-full grid grid-cols-1 md:grid-cols-2 bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: 'url("/img/munisipyo.jpg")' }}
    >
     <div className="hidden md:flex items-center px-6 h-full relative">
        <div className="absolute inset-0 bg-gray-900 opacity-90 z-0"></div>

        <div className="flex items-center gap-6 relative z-10">
          <img
            src="/img/logo.png"
            alt="Admin Login Background"
            className="w-24 h-24 object-cover"
          />

          <div>
            <h2
              className="sm:block self-start text-lg sm:text-xl lg:text-2xl font-bold tracking-wider whitespace-nowrap uppercase"
              style={{ color: "var(--heading-color)" }}
            >
              Municipality of Solano
            </h2>
            <span
              className="sm:block text-xs sm:text-sm lg:text-base capitalize text-white"
            >
              Province of Nueva Vizcaya
            </span>
            <span
              className="sm:block text-xs sm:text-sm lg:text-base capitalize text-gray-400"
            >
              Client's satisfaction and feedback form
            </span>
          </div>
        </div>
      </div>

      {/* Right side*/}
      <div className="bg-[var(--bg-color)] min-h-screen flex items-center justify-center">
        <form action="/admin-login" method="POST" className="w-full lg:w-2/3 px-2 space-y-5">
          
          <h2 className="text-5xl">Log In</h2>
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

          <p className="text-sm text-blue-700 hover:font-semibold cursor-pointer text-center tracking-widest">
            Forgot your password?
          </p>

        </form>
      </div>
    </section>
  );
};

export default Admin;
