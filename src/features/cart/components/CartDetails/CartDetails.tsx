import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import _isEqual from "lodash/isEqual";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { selectProductsInCart, selectTotal } from "@cart/cartSlice";
import CustomContainer from "@components/CustomContainer";
import IMAGES from "@constants/Images";
import PATHS from "@constants/Paths";
import ProductCardSummary from "../ProductCardSummary";
import { formatToCurrency } from "@src/shared/utils/stringUtils";

interface ICardDetailsProps {
  amountItemsInCart: number;
}

const CardDetails: React.FC<ICardDetailsProps> = ({
  amountItemsInCart = 0,
}) => {
  const navigate = useNavigate();
  const productsInCart = useSelector(selectProductsInCart);
  const total = useSelector(selectTotal);

  const formatedPrice = formatToCurrency(total);
  const hasProducts = amountItemsInCart > 0;

  const goToProductsPage = () => navigate(PATHS.ROOT);

  return (
    <Paper sx={{ height: "100%" }}>
      <CustomContainer boxProps={{ height: "100%" }} sx={{ height: "100%" }}>
        <Grid container height="100%" spacing={2}>
          <Grid
            item
            md={8}
            sx={{
              maxHeight: "calc(100vh - 193px)",
              overflowY: "auto",
            }}
            xs={12}
          >
            {hasProducts ? (
              productsInCart.map((productInCart) => (
                <ProductCardSummary productInCart={productInCart} />
              ))
            ) : (
              <Box
                alignItems="center"
                display="flex"
                height="100%"
                justifyContent="center"
              >
                <img
                  alt={IMAGES.EMPTY_CART.ALT}
                  src={IMAGES.EMPTY_CART.SRC}
                  width="100%"
                  style={{ maxWidth: 500 }}
                />
              </Box>
            )}
          </Grid>
          <Grid
            display="flex"
            flexDirection="column"
            justifyContent="center"
            item
            md={4}
            xs={12}
          >
            <Box py={4}>
              <Typography align="center" component="h1" variant="h4">
                My Cart
              </Typography>
              <Typography align="center" py={2}>
                {hasProducts ? (
                  <>
                    You have <strong>{amountItemsInCart}</strong>{" "}
                    {_isEqual(amountItemsInCart, 1) ? "item" : "items"} in your
                    cart
                  </>
                ) : (
                  "Your cart is empty."
                )}
              </Typography>
              {hasProducts && (
                <Box
                  alignItems="center"
                  display="flex"
                  justifyContent="space-evenly"
                >
                  <Typography>Total:</Typography>
                  <Typography>{formatedPrice}</Typography>
                </Box>
              )}
            </Box>
            {!hasProducts && (
              <Box py={4}>
                <Button fullWidth onClick={goToProductsPage}>
                  See Our Products
                </Button>
              </Box>
            )}
          </Grid>
        </Grid>
      </CustomContainer>
    </Paper>
  );
};

export default CardDetails;
