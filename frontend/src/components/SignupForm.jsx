import { useForm } from "react-hook-form";
import axios from "axios";

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", data, {
        headers: { "Content-Type": "application/json" },
      });
      reset();
      alert("Signup successful!");
      console.log("User Registered:", res.data);
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Signup failed: " + (err.response?.data?.message || "Server error"));
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-sm mx-auto mt-10 bg-white p-6 rounded-lg shadow-md flex flex-col gap-4"
    >
      <h2 className="text-2xl font-bold text-center mb-4 text-green-700">Sign Up</h2>
      
      <input
        type="text"
        placeholder="Username"
        {...register("username", { required: "Username is required" })}
        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      {errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}

      <input
        type="email"
        placeholder="Email"
        {...register("email", { required: "Email is required" })}
        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}

      <input
        type="password"
        placeholder="Password"
        {...register("password", { required: "Password is required" })}
        className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
      >
        {isSubmitting ? "Signing Up..." : "Sign Up"}
      </button>
    </form>
  );
}

export default SignupForm;
