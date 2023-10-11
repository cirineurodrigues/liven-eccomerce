import { Route, Routes } from "react-router-dom";

import PATHS from "@constants/Paths";
import Cart from "@features/cart";
import Products from "@features/products";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route element={<Products />} path={PATHS.ROOT} />
      <Route element={<Cart />} path={PATHS.CART} />
    </Routes>
  );
};

export default Router;
