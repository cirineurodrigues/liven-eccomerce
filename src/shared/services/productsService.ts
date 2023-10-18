import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IProduct } from "@products/types/ProductTypes";
import { BASE_URL, ENDPOINTS } from "@constants/Endpoints";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<IProduct[], void>({
      query: () => ENDPOINTS.PRODUCTS,
    }),
    getProductById: builder.query<IProduct, number>({
      query: (productId) => `${ENDPOINTS.PRODUCT_BY_ID(productId)}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery } = productsApi;
