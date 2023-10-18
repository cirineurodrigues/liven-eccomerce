import _isEqual from "lodash/isEqual";

import { toast } from "react-toastify";

import { useAppDispatch } from "@app/hooks";
import {
  addProduct,
  decrementQuantity,
  incrementQuantity,
  removeProduct,
} from "@cart/cartSlice";
import { ICart } from "@cart/types/CartTypes";
import { IProduct } from "@products/types/ProductTypes";

interface IUseCart {
  handleAddOrIncrementProduct: (
    product: IProduct,
    productAlreadyInCart: boolean
  ) => void;
  handleIncrementProduct: (productInCart: ICart) => void;
  handleRemoveOrDecrementProduct: (productInCart: ICart) => void;
}

const useCart = (): IUseCart => {
  const dispatch = useAppDispatch();

  const handleAddOrIncrementProduct = (
    product: IProduct,
    productAlreadyInCart: boolean
  ) => {
    if (productAlreadyInCart) {
      dispatch(incrementQuantity(product.id));
    } else {
      dispatch(addProduct(product));
    }

    toast.success(
      <>
        <strong>{product.title}</strong> has been added to cart.
      </>
    );
  };

  const handleIncrementProduct = (productInCart: ICart) => {
    dispatch(incrementQuantity(productInCart?.id));

    toast.success(
      <>
        <strong>{productInCart?.title}</strong> has been added to cart.
      </>
    );
  };

  const handleRemoveOrDecrementProduct = (productInCart: ICart) => {
    if (_isEqual(productInCart?.quantity, 1)) {
      dispatch(removeProduct(productInCart?.id));
    } else {
      dispatch(decrementQuantity(productInCart?.id));
    }

    toast.success(
      <>
        <strong>{productInCart?.title}</strong> has been removed from cart.
      </>
    );
  };
  return {
    handleAddOrIncrementProduct,
    handleIncrementProduct,
    handleRemoveOrDecrementProduct,
  };
};

export default useCart;
