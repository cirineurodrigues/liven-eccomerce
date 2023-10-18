import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import { useAppSelector } from "@app/hooks";
import { selectProductAlreadyInCart } from "@cart/cartSlice";
import EllipsisText from "@components/EllipsisText";
import PATHS from "@constants/Paths";
import { IProduct } from "@products/types/ProductTypes";
import { handleImageSrc } from "@utils/functionUtils";
import { formatToCurrency } from "@utils/stringUtils";
import useCart from "@cart/hooks/useCart";

interface IProductProps {
  product: IProduct;
  loading?: boolean;
}

const ProductCard: React.FC<IProductProps> = ({ product }) => {
  const { handleAddOrIncrementProduct } = useCart();
  const navigate = useNavigate();

  const productAlreadyInCart = useAppSelector((state) =>
    selectProductAlreadyInCart(state, product.id)
  );

  const formatedPrice = formatToCurrency(product.price);

  const imageSrc = handleImageSrc(product?.image);

  const handleGoToProductDetails = () =>
    navigate(PATHS.PRODUCT_BY_ID(product.id));

  return (
    <Grid height={520} item lg={4} md={6} xs={12}>
      <Paper
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: theme.spacing(2),
        })}
      >
        <Box
          display="flex"
          height={210}
          justifyContent="center"
          position="relative"
        >
          <img
            alt={product?.description}
            loading="lazy"
            src={imageSrc}
            style={{ maxWidth: 200, objectFit: "contain" }}
            width="100%"
          />
          <Box
            alignItems="center"
            display="flex"
            height="100%"
            justifyContent="center"
            sx={{
              opacity: 0,
              ":hover": {
                background: "#08012A80",
                opacity: 1,
                transition: "opacity .3s",
              },
            }}
            position="absolute"
            width="100%"
          >
            <Button onClick={handleGoToProductDetails} variant="outlined">
              See Details
            </Button>
          </Box>
        </Box>
        <Box flex={1} flexDirection="column" py={2}>
          <Box alignItems="center" display="flex" flexWrap="wrap">
            <Rating
              name="read-only"
              precision={0.1}
              readOnly
              sx={(theme) => ({ marginRight: theme.spacing(1) })}
              value={product?.rating?.rate}
            />
            <Typography variant="body1">{`${product?.rating?.rate} out of 5`}</Typography>
          </Box>
          <Tooltip placement="bottom-start" title={product?.title}>
            <Box>
              <EllipsisText color="secondary" pt={2} variant="h6">
                {product?.title}
              </EllipsisText>
            </Box>
          </Tooltip>
          <Typography color="secondary" variant="body1">
            {product?.category}
          </Typography>
          <Typography
            align="right"
            component="p"
            fontWeight={500}
            py={1}
            variant="h5"
          >
            {formatedPrice}
          </Typography>
        </Box>
        <Box>
          <Button
            onClick={() =>
              handleAddOrIncrementProduct(product, productAlreadyInCart)
            }
            fullWidth
          >
            Add To Cart
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default ProductCard;
