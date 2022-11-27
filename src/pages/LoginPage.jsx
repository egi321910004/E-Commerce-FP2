import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../API";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const authenticate = localStorage.getItem("auth");

  useEffect(() => {
    if (authenticate) {
      authenticate.roles === "user" ? navigate("/") : navigate("/admin");
    }
  }, [navigate]);

  function handleLogin(email, password) {
    return new Promise(function (resolve, reject) {
      let token = "";
      setTimeout(() => {
        token = "";
        if (email === "admin@bukapedia.com" && password === "admin123")
          resolve({ email, role: "admin" });
        axios
          .post("https://fakestoreapi.com/auth/login", {
            username: email,
            password,
          })
          .then((res) => {
            console.log("LOGIN RESPONSE", res);
            token = res.data.token;
            console.log("LOGIN TOKEN", token);
            resolve({ email, role: "user", token });
          })
          .catch((err) => reject("Email/username atau password salah"));
      }, 1000);
    });
  }

  return (
    <>
      <div
        onSubmit={handleLogin}
        className=" flex flex-col justify-center min-h-screen overflow-hidden bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"
      >
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-gray-700 underline">
            Sign in
          </h1>
          <form className="mt-6">
            <div className="mb-2">
              <label
                for="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              {/* EMAIL */}
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                for="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              {/* PASSWORD */}
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <a href="#" className="text-xs text-rose-600 hover:underline">
              Forget Password?
            </a>
            {/* LOGIN */}
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white bg-gradient-to-r from-yellow-200 via-green-200 to-green-300 rounded-md">
                Login
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Don't have an account?{" "}
            <a href="#" className="font-medium text-green-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
