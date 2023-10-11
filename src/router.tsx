import { createBrowserRouter } from "react-router-dom";

import PATHS from "@constants/Paths";
import Cart from "@features/cart";
import Products from "@features/products";

const router = createBrowserRouter([
  {
    path: PATHS.CART,
    element: <Cart />,
  },
  {
    path: PATHS.ROOT,
    element: <Products />,
  },
]);

export default router;
