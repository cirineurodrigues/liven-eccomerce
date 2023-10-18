import { IProduct } from "@products/types/ProductTypes";

import _isEmpty from "lodash/isEmpty";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { StyledProductTitle } from "./ProductCard.styles";
import { formatToCurrency } from "@src/shared/utils/stringUtils";

import IMAGES from "@constants/Images";

interface IProductProps {
  product: IProduct;
  loading?: boolean;
}

const ProductCard: React.FC<IProductProps> = ({ product }) => {
  const formatedPrice = formatToCurrency(product.price);

  const imageSrc = _isEmpty(product?.image)
    ? IMAGES.DEFAULT_IMAGE.SRC
    : product?.image;

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
        <Box display="flex" height={210} justifyContent="center">
          <img
            alt={product?.description}
            loading="lazy"
            src={imageSrc}
            style={{ maxWidth: 200, objectFit: "contain" }}
            width="100%"
          />
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
            <StyledProductTitle color="secondary" pt={2} variant="h6">
              {product?.title}
            </StyledProductTitle>
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
          <Button fullWidth>Add To Cart</Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default ProductCard;
