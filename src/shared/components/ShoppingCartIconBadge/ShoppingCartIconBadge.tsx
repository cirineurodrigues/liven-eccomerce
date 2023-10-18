import { Link } from "react-router-dom";

import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import PATHS from "@constants/Paths";

interface IShoppingCartIconBadgeProps {
  amountItemsInCart: number;
}

const ShoppingCartIconBadge: React.FC<IShoppingCartIconBadgeProps> = ({
  amountItemsInCart,
}) => {
  return (
    <Link to={PATHS.CART}>
      <IconButton color="primary">
        <Badge badgeContent={amountItemsInCart} color="primary" showZero>
          <ShoppingCartIcon color="primary" />
        </Badge>
      </IconButton>
    </Link>
  );
};

export default ShoppingCartIconBadge;
