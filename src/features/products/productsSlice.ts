import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "@app/store";

interface IProductState {
  products: number[];
}

const initialState: IProductState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<number>) => {
      [...state.products, action.payload];
    },
  },
});

export const { addProduct } = productsSlice.actions;

// selectors

export const selectProducts = (state: RootState) => state.products.products;

export default productsSlice.reducer;
