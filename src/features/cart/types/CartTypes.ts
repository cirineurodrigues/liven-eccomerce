import { IProduct } from "@features/products/types/ProductTypes";

export interface ICart extends IProduct {
  quantity: number;
}
