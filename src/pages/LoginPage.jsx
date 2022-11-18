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

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@jualan.com" && password === "admin123") {
      const auth = {
        token: "tokenadmin",
        roles: "admin",
      };
      localStorage.setItem("auth", JSON.stringify(auth));
      navigate("/admin");
    } else {
      auth({ email, password })
        .then((res) => {
          const auth = {
            token: res.data.token,
            roles: "user",
          };
          localStorage.setItem("auth", JSON.stringify(auth));
          navigate("/");
        })
        .catch((err) => {});
    }
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div onSubmit={handleLogin} className=" flex flex-col justify-center min-h-screen overflow-hidden bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-gray-700 underline">Sign in</h1>
          <form className="mt-6">
            <div className="mb-2">
              <label for="email" className="block text-sm font-semibold text-gray-800">
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
              <label for="password" className="block text-sm font-semibold text-gray-800">
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
              <button className="w-full px-4 py-2 tracking-wide text-white bg-gradient-to-r from-yellow-200 via-green-200 to-green-300 rounded-md">Login</button>
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
