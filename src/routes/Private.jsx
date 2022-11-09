import React from "react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Private() {
  const auth = JSON.parse(localStorage.getItem("auth"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  });

  return <Outlet />;
}
