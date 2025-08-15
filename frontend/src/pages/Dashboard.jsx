import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b w-full">
        <div className="max-w-3xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <h1 className="text-xl font-semibold text-green-700">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-xl border border-gray-200 hover:bg-green-100 transition"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-2 py-8">
        <div className="w-full max-w-md bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4 text-green-700">Your Profile</h2>
          {user ? (
            <ul className="space-y-2 text-gray-700">
              <li>
                <span className="font-medium">Username:</span>{" "}
                {user.username || "—"}
              </li>
              <li>
                <span className="font-medium">Email:</span> {user.email}
              </li>
              <li>
                <span className="font-medium">ID:</span> {user.id || user._id}
              </li>
            </ul>
          ) : (
            <p className="text-gray-600">Loading user info…</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;