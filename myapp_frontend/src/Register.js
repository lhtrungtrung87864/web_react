import React, { useState } from "react";
import axios from "axios";
import "./Auth.css"; // Dùng chung CSS với trang Login
import { Link } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/myapp_backend/register.php", {
        username,
        password,
      });
      setMessage(res.data.message);
    } catch (err) {
      setMessage("Lỗi kết nối server");
    }
  };

  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleRegister}>
        <h3>Register Here</h3>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Nhập tên đăng nhập"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Nhập mật khẩu"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>
        {message && <p style={{ textAlign: "center", marginTop: "15px" }}>{message}</p>}

        <div className="social" style={{ justifyContent: "center" }}>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
            🔙 Quay lại đăng nhập
          </Link>
        </div>
      </form>
    </>
  );
}
