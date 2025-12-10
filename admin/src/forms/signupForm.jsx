import React from "react";
import useSignUpHook from "../hooks/useSignUpHook";  
const SignUpForm = () => {
  const { formData, handleInputChange, handleSubmit, loading, error, success } = useSignUpHook();

  return (
    <div className="sign-up-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}  
            placeholder="Enter your name"
            required
          />
        </div>

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

        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange} 
            placeholder="Confirm your password"
            required
          />
        </div>

        {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>}
        {success && <div className="success-message" style={{ color: 'green' }}>Sign-up successful!</div>}

        <div>
          <button
            type="submit"
            className="bg-green-500 p-2 rounded-sm text-white"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
