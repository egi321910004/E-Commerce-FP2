import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import Rekap from "../pages/Rekap";
import ProductDetail from "../components/ProductDetail";
import Private from "./Private";
import Admin from "./Admin";
import User from "./User";
const GlobalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<Private />}>
      <Route element={<Admin />}>
      <Route path="/rekap" element={<Rekap />} />
      </Route>
      <Route element={<User />}>
      <Route path="/cartPage" element={<CartPage />} />
      </Route>
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/product-detail/:id" element={<ProductDetail />} />
    </Routes>
  );
};

export default GlobalRoutes;
