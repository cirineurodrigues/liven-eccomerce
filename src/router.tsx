import { Route, Routes } from "react-router-dom";

import PATHS from "@constants/Paths";
import Cart from "@features/cart";
import ProductsPage from "@products/pages/ProductsPage";
import ProductDetailsPage from "@products/pages/ProductDetailsPage";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route element={<Cart />} path={PATHS.CART} />
      <Route element={<ProductDetailsPage />} path={PATHS.PRODUCT} />
      <Route element={<ProductsPage />} path={PATHS.ROOT} />
    </Routes>
  );
};

export default Router;
