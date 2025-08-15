import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow p-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Welcome 👋</h1>
        <p className="text-gray-600 mb-8">
          MERN + JWT auth starter. Sign up or log in to access your dashboard.
        </p>

        {user ? (
          <div className="space-y-4">
            <p className="text-gray-700">
              Logged in as <span className="font-semibold">{user.username || user.email}</span>
            </p>
            <div className="flex gap-3 justify-center">
              <Link
                to="/dashboard"
                className="px-5 py-2 rounded-xl border border-gray-200 hover:bg-gray-100"
              >
                Go to Dashboard
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/login"
              className="px-5 py-2 rounded-xl border border-gray-200 hover:bg-gray-100"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="px-5 py-2 rounded-xl bg-black text-white hover:opacity-90"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
