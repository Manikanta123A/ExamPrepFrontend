import React, { ReactEventHandler, useState } from "react";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!user.name || !user.email || !user.password) {
      setError("All fields are required!");
      return;
    }

    try {
      
    } catch (err) {
      setError("Something went wrong!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {/* Animated Card */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg w-96"
      >
        {/* Animated Title */}
        <motion.h2
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-3xl font-bold text-center text-white mb-5"
        >
          Sign Up
        </motion.h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Animated Input Fields */}
          {["name", "email", "password"].map((field, index) => (
            <motion.div
              key={field}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative"
            >
              <input
                type={field === "password" ? "password" : "text"}
                name={field}
                placeholder=" "
                className="peer w-full p-3 border border-gray-300 rounded-lg bg-white/10 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-pink-400"
                onChange={handleChange}
              />
              <label
                className="absolute left-3 top-3 text-gray-300 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-lg peer-focus:top-3 peer-focus:text-sm peer-focus:text-white"
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
            </motion.div>
          ))}

          {/* Animated Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full p-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
          >
            Sign Up
          </motion.button>
        </form>

        {/* Animated Link */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-sm text-white mt-5"
        >
          Already have an account?{" "}
          <a href="/login" className="text-pink-300 font-bold hover:underline">
            Login
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Signup;
