import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import _isUndefined from "lodash/isUndefined";

import type { RootState } from "@app/store";
import { IProduct } from "@products/types/ProductTypes";
import { ICart } from "./types/CartTypes";

interface ICartState {
  cartProducts: ICart[];
}

const initialState: ICartState = {
  cartProducts: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      const currentProduct = state.cartProducts.find(
        (product) => product.id === action.payload.id
      );

      let quantity = 1;

      if (!_isUndefined(currentProduct)) {
        quantity = currentProduct.quantity++;
      }

      state.cartProducts.push({ ...action.payload, quantity });
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const currentProduct = state.cartProducts.find(
        (item) => item.id === action.payload
      );

      if (!_isUndefined(currentProduct)) currentProduct.quantity--;
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const currentProduct = state.cartProducts.find(
        (item) => item.id === action.payload
      );

      if (!_isUndefined(currentProduct)) currentProduct.quantity++;
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const cartWithoutProduct = state.cartProducts.filter(
        (item) => item.id !== action.payload
      );

      state.cartProducts = cartWithoutProduct;
    },
  },
});

export const {
  addProduct,
  decrementQuantity,
  incrementQuantity,
  removeProduct,
} = cartSlice.actions;

// selectors

export const selectAmountItemsInCart = (state: RootState): number =>
  state.cart.cartProducts.reduce(
    (previousValue, currentValue) => (previousValue += currentValue.quantity),
    0
  );

export const selectProductAlreadyInCart = (
  state: RootState,
  productId: number
): boolean =>
  !_isUndefined(state.cart.cartProducts.find((item) => item.id === productId));

export const selectProductsInCart = (state: RootState): ICart[] =>
  state.cart.cartProducts;

export const selectTotal = (state: RootState): number =>
  state.cart.cartProducts.reduce(
    (previousValue, currentValue) =>
      (previousValue += currentValue.price * currentValue.quantity),
    0
  );

export default cartSlice.reducer;
