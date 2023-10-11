import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "@app/store";

interface ICartState {
  cartProducts: number[];
}

const initialState: ICartState = {
  cartProducts: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<number>) => {
      [...state.cartProducts, action.payload];
    },
  },
});

export const { addProduct } = cartSlice.actions;

// selectors

export const selectAmountProductsAtCart = (state: RootState) =>
  state.cart.cartProducts.length;

export const selectProducts = (state: RootState) => state.cart.cartProducts;

export default cartSlice.reducer;
