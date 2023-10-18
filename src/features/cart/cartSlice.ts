import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "@app/store";
import { IProduct } from "@products/types/ProductTypes";

interface ICartState {
  cartProducts: IProduct[];
}

const initialState: ICartState = {
  cartProducts: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      state.cartProducts.push(action.payload);
    },
  },
});

export const { addProduct } = cartSlice.actions;

// selectors

export const selectAmountItemsInCart = (state: RootState) =>
  state.cart.cartProducts.length;

export const selectProductsAtCart = (state: RootState) =>
  state.cart.cartProducts;

export default cartSlice.reducer;
