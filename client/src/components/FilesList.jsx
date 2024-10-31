import React, { useState, useEffect } from "react";

const FilesList = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Gọi API để lấy danh sách tài liệu từ Google Drive
    fetch("http://localhost:3001/api/auth/callback/google") 
      .then((response) => {
        if (!response.ok) {
          throw new Error("Không thể lấy danh sách tài liệu");
        }
        return response.json();
      })
      .then((data) => setFiles(data))
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold">Danh sách tài liệu</h2>
      <ul className="mt-2">
        {files.length > 0 ? (
          files.map((file) => (
            <li key={file.id} className="p-2 border-b">
              {file.name}
            </li>
          ))
        ) : (
          <p>Không có tài liệu nào</p>
        )}
      </ul>
    </div>
  );
};

export default FilesList;
