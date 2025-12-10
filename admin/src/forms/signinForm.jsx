import React from "react";
import useSignInHook from "../hooks/useSignInHook";

const SignInForm = () => {
  const { formData, handleInputChange, handleSubmit, loading, error, success } = useSignInHook();

  return (
    <div className="sign-in-container">
      <form onSubmit={handleSubmit} className="signin-form">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange} 
            placeholder="Enter your password"
            required
          />
        </div>

        {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>}
        {success && <div className="success-message" style={{ color: 'green' }}>Sign-in successful!</div>}

        <div>
          <button
            type="submit"
            className="bg-blue-500 p-2 rounded-sm text-white"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
