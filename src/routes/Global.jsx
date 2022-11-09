import { Routes, Route } from "react-router-dom";
import ProductPageCoba from "../pages/ProductPageCoba";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import Private from "./Private";
import User from "./User";
import Admin from "./Admin";

const GlobalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<Private />}>
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />
      </Route>
      <Route path="/productPage" element={<ProductPageCoba />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default GlobalRoutes;
