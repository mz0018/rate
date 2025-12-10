import React, { useState } from "react";
import axios from "axios";

const useSignInHook = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/it/signin`, formData);

      setSuccess(true);
      console.log("Sign-In Success:", response.data);
    } catch (error) {
      setError("Sign-in failed. Please check your credentials.");
      console.error("Sign-In Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    handleInputChange,
    handleSubmit,
    loading,
    error,
    success,
  };
};

export default useSignInHook;
