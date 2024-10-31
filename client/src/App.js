import React, { useState } from "react";
import LoginButton from "./components/LoginButton";
import FilesList from "./components/FilesList";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // check login
  const handleAuthentication = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Google Drive File Viewer</h1>
      {!isAuthenticated ? (
        <LoginButton onClick={handleAuthentication} />
      ) : (
        <FilesList />
      )}
    </div>
  );
}

export default App;
