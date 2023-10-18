import { Link } from "react-router-dom";

import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import PATHS from "@constants/Paths";

interface IShoppingCartIconBadgeProps {
  amountProductsAtCart: number;
}

const ShoppingCartIconBadge: React.FC<IShoppingCartIconBadgeProps> = ({
  amountProductsAtCart,
}) => {
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
