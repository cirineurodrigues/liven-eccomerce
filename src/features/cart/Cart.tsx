import { useEffect } from "react";

import { useAppSelector } from "@app/hooks";
import { selectAmountItemsInCart } from "@cart/cartSlice";
import CartDetails from "@cart/components/CartDetails";

const Cart: React.FC = () => {
  const amountItemsInCart = useAppSelector(selectAmountItemsInCart);

  useEffect(() => {
    document.title = `Liven Ecommerce | Cart`;
  }, []);

  return <CartDetails amountItemsInCart={amountItemsInCart} />;
};

export default Cart;
