import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import CheckValidity from "../middleware/userschema";
import Particle from "./practicals";
import { useNavigate } from "react-router-dom";

function Register() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/user");
      setUsers(response.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  const handleLogin = async () => {
    try {
      const result = await CheckValidity({ user, email, password });
      console.log(result);
      if (result.success === true) {
        console.log("post");
        const response = await axios.post("http://localhost:3000/api/user", {
          user,
          email,
          password,
        });
        setTimeout(() => navigate("/"), 3000);

        console.log("Response message:", response.data.message);
      } else {
        console.log("Validation errors:", result.errors);
        alert("Invalid data");
      }
    } catch (err) {
      console.error("Error logging in:", err);
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
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <input
          className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white"
          id="user"
          type="text"
          placeholder="user"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white"
          id="email"
          type="email"
          placeholder="email"
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
          Register
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
              <li key={index}>
                {user.email}---{user.password}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default Register;
