import { PRODUCT_CATEGORIES } from "@products/types/ProductTypes";

export const BASE_URL = "https://fakestoreapi.com";

export const ENDPOINTS = {
  PRODUCT_BY_ID: (productId: number) => `/products/${productId}`,
  PRODUCTS: "/products",
  PRODUCTS_BY_CATEGORY: (productCategory: PRODUCT_CATEGORIES) =>
    `/products/category/${productCategory}`,
};
