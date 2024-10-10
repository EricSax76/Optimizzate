import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa el hook useNavigate

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Instancia del hook useNavigate

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí iría tu lógica de autenticación. Simularemos el login correcto.
    if (formData.username === "" && formData.password === "") {
      // Si el login es correcto, redirigimos a la Homepage
      navigate("/home"); // Redirige a la ruta de la Homepage
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default LoginPage;