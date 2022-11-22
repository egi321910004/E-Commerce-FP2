import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const User = () => {
    const auth = JSON.parse(localStorage.getItem("auth"));

    const navigate = useNavigate();

    useEffect(() => {
        if (auth?.roles !== "user") {
            navigate("/admin");
        }
    })

    return (
        <Outlet />
    );
};

export default User;