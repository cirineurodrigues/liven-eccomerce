const PATHS = {
  CART: "/cart",
  PRODUCT: "/product/:id",
  PRODUCT_BY_ID: (id: number) => `/product/${id}`,
  ROOT: "/",
};

export default PATHS;
