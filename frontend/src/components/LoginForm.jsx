import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);

      login(res.data.token, res.data.user);

      navigate("/dashboard");

    } catch (err) {
      setError("Login failed! Please check your credentials.");
    }
    setIsSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-10 bg-white p-6 rounded-lg shadow-md flex flex-col gap-4"
    >
      <h2 className="text-2xl font-bold text-center mb-4 text-green-700">Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        required
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
      >
        {isSubmitting ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}

export default LoginForm;

