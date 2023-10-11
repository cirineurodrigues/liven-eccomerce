import { Link } from "react-router-dom";

import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useAppSelector } from "@app/hooks";
import { selectAmountProductsAtCart } from "@cart/cartSlice";
import PATHS from "@constants/Paths";

const ShoppingCartIconBadge: React.FC = () => {
  const amountProductsAtCart = useAppSelector(selectAmountProductsAtCart);

  return (
    <Link to={PATHS.CART}>
      <IconButton color="primary">
        <Badge badgeContent={amountProductsAtCart} color="primary" showZero>
          <ShoppingCartIcon color="primary" />
        </Badge>
      </IconButton>
    </Link>
  );
};

export default ShoppingCartIconBadge;
