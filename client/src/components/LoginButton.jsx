import React from "react";

const LoginButton = () => {
  const handleLogin = () => {
    window.location.href = "http://localhost:3001/api/auth"; 
  };

  return (
    <button
      onClick={handleLogin}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Đăng nhập với Google
    </button>
  );
};

export default LoginButton;
