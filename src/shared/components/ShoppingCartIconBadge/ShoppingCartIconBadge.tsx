import { useNavigate } from "react-router-dom";

import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useAppSelector } from "@app/hooks";
import { selectAmountProductsAtCart } from "@cart/cartSlice";
import PATHS from "@constants/Paths";

const ShoppingCartIconBadge: React.FC = () => {
  const navigate = useNavigate();

  const amountProductsAtCart = useAppSelector(selectAmountProductsAtCart);

  const navigateToCart = () => navigate(PATHS.CART);

  return (
    <IconButton color="primary" onClick={navigateToCart}>
      <Badge badgeContent={amountProductsAtCart} color="primary" showZero>
        <ShoppingCartIcon color="primary" />
      </Badge>
    </IconButton>
  );
};

export default ShoppingCartIconBadge;
