import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import Rekap from "../pages/Rekap";

const GlobalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cartPage" element={<CartPage />} />
      <Route path="/rekap" element={<Rekap />} />
    </Routes>
  );
};

export default GlobalRoutes;
