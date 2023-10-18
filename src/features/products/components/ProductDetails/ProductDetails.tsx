import { useEffect } from "react";

import { toast } from "react-toastify";

import _isUndefined from "lodash/isUndefined";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

import { useAppDispatch } from "@app/hooks";
import { addProduct } from "@cart/cartSlice";
import CustomContainer from "@components/CustomContainer";
import { IProduct } from "@products/types/ProductTypes";
import { handleImageSrc } from "@utils/functionUtils";
import { formatToCurrency } from "@utils/stringUtils";

interface IProductDetailsProps {
  product: IProduct;
}

const ProductDetails: React.FC<IProductDetailsProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  const formatedPrice = formatToCurrency(product.price);

  const imageSrc = handleImageSrc(product?.image);

  const addProductToCart = () => {
    toast.success(
      <>
        <strong>{product.title}</strong> has been added to cart.
      </>
    );
    dispatch(addProduct(product));
  };

  useEffect(() => {
    if (!_isUndefined(product?.title)) {
      document.title = `Liven Ecommerce | ${product?.title}`;
    }
  }, [product?.title]);

  return (
    <Paper sx={{ height: "100%" }}>
      <CustomContainer boxProps={{ height: "100%" }} sx={{ height: "100%" }}>
        <Grid container height="100%" spacing={2}>
          <Grid item md={6} xs={12}>
            <Box
              alignItems="center"
              display="flex"
              height="100%"
              justifyContent="center"
            >
              <img
                alt={product?.description}
                loading="lazy"
                src={imageSrc}
                style={{ maxWidth: 350, objectFit: "contain" }}
                width="100%"
              />
            </Box>
          </Grid>
          <Grid
            display="flex"
            flexDirection="column"
            justifyContent="center"
            item
            md={6}
            xs={12}
          >
            <Box py={6}>
              <Typography component="h1" variant="h4">
                {product?.title}
              </Typography>
              <Typography component="h2" pt={2} variant="body1">
                {product?.category}
              </Typography>
              <Box
                alignItems="center"
                display="flex"
                justifyContent="space-between"
              >
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
                <Typography align="right" component="h1" py={4} variant="h6">
                  {formatedPrice}
                </Typography>
              </Box>
              <Typography variant="body1">{product?.description}</Typography>
            </Box>
            <Box>
              <Button onClick={addProductToCart} fullWidth>
                Add To Cart
              </Button>
            </Box>
          </Grid>
        </Grid>
      </CustomContainer>
    </Paper>
  );
};

export default ProductDetails;
