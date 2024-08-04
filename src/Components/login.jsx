import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import loginvalidation from "../middleware/loginSchema";
import { useNavigate } from "react-router-dom";
import Particle from "./practicals";

function Login() {
  const [users, setUsers] = useState([{}]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/user");
      setUsers(response.data);
    } catch (err) {
      // setError(err.message);
    }
  };

  const checkExistence = async (data) => {
    // Check if the user with provided email and password exists
    const user = users.find((user) => user.email === data.email);
    if (
      user &&
      user.email === data.email &&
      (await bcrypt.compare(data.password, user.password))
    ) {
      alert("incorrect password");
      return {};
    } else {
      return user;
    }
  };

  const handleLogin = async () => {
    try {
      const result = await loginvalidation({ email, password });
      if (result.success) {
        const user = checkExistence({ email, password });
        console.log(user);
        if (user) {
          navigate("/landingpage");
          console.log("Logged in successfully");
          alert("You are logged in!");
        } else {
          alert("User not found please register your self");
        }
      } else {
        alert("Invalid data, try again");
      }
    } catch (err) {
      console.error("Error logging in:", err);
      alert("Error logging in. Please try again later.");
    }
  };

  return (
    <div className="App flex justify-center items-center h-screen bg-blue">
      <Particle className="-z-10" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-blue-200 bg-opacity-30 backdrop-blur-sm text-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3"
      >
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <input
          className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white"
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="mb-6 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white"
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/Register")}
          className="bg-blue-500 hover:bg-blue-700 ml-12 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          register
        </button>
        <br />
        <br />
        <button
          onClick={fetchUsers}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Give all users
        </button>
        <div>
          <ul>
            {users.map((user, index) => (
              <li key={index}>{user.email}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
