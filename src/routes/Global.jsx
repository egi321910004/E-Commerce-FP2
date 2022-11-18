import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";

const GlobalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cartPage" element={<CartPage />} />
    </Routes>
  );
};

export default GlobalRoutes;
