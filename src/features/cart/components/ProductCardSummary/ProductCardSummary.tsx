import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import useCart from "@cart/hooks/useCart";
import { ICart } from "@cart/types/CartTypes";
import EllipsisText from "@components/EllipsisText";
import { formatToCurrency } from "@utils/stringUtils";
import { handleImageSrc } from "@utils/functionUtils";

interface IProductCardSummaryProps {
  productInCart: ICart;
}

const ProductCardSummary: React.FC<IProductCardSummaryProps> = ({
  productInCart,
}) => {
  const { handleIncrementProduct, handleRemoveOrDecrementProduct } = useCart();

  const formatedPrice = formatToCurrency(
    productInCart.price * productInCart.quantity
  );
  const imageSrc = handleImageSrc(productInCart?.image);

  return (
    <>
      <Box
        sx={(theme) => ({
          padding: theme.spacing(1),

          [theme.breakpoints.up("md")]: {
            padding: theme.spacing(2),
          },
        })}
      >
        <Box alignItems="center" display="flex" justifyContent="space-between">
          <Box alignItems="center" display="flex" justifyContent="center">
            <img
              src={imageSrc}
              style={{ objectFit: "contain" }}
              height={40}
              width={40}
            />
          </Box>
          <Box flex={1} px={2}>
            <Tooltip title={productInCart?.title}>
              <EllipsisText component="h2" fontWeight={500} variant="body1">
                {productInCart?.title}
              </EllipsisText>
            </Tooltip>
          </Box>
          <Box
            alignItems="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Box alignItems="center" display="flex" justifyContent="center">
              <IconButton
                aria-label="decrement product"
                onClick={() => handleRemoveOrDecrementProduct(productInCart)}
              >
                <RemoveIcon />
              </IconButton>
              <Typography component="p" px={1} variant="h6">
                {productInCart?.quantity}
              </Typography>
              <IconButton
                aria-label="increment product"
                onClick={() => handleIncrementProduct(productInCart)}
              >
                <AddIcon />
              </IconButton>
            </Box>
            <Box>
              <Typography variant="body2">{formatedPrice}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider />
    </>
  );
};

export default ProductCardSummary;
