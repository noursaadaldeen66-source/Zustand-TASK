import React, { useState } from "react";
import { useUserStore } from "../store/userStore";

function LoginPage() {
  const [username, setUsername] = useState("johndoe");
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");

  const {
    login,
    logout,
    isLoggedIn,
    username: currentUsername,
  } = useUserStore();

  const handleLogin = () => {
    if (username && firstName && lastName) {
      login({ username, firstName, lastName });
    }
  };

  const inputStyles =
    "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500";
  const buttonStyles =
    "w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";
  const dangerButtonStyles =
    "w-full px-4 py-2 font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2";

  if (isLoggedIn) {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Welcome, {currentUsername}!</h2>
        <p>You are logged in.</p>
        <button onClick={logout} className={dangerButtonStyles}>
          Log Out
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Login Page</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Username
        </label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={inputStyles}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          First Name
        </label>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className={inputStyles}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Last Name
        </label>
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className={inputStyles}
        />
      </div>
      <button onClick={handleLogin} className={buttonStyles}>
        Log In
      </button>
    </div>
  );
}

export default LoginPage;
