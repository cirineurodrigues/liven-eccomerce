import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import CustomContainer from "@components/CustomContainer";
import IMAGES from "@constants/Images";
import PATHS from "@constants/Paths";

interface ICardDetailsProps {
  amountItemsInCart: number;
}

const CardDetails: React.FC<ICardDetailsProps> = ({
  amountItemsInCart = 0,
}) => {
  const navigate = useNavigate();

  const hasProducts = amountItemsInCart > 0;

  const goToProductsPage = () => navigate(PATHS.ROOT);

  return (
    <Paper sx={{ height: "100%" }}>
      <CustomContainer boxProps={{ height: "100%" }} sx={{ height: "100%" }}>
        <Grid container height="100%" spacing={2}>
          <Grid item md={8} xs={12}>
            {hasProducts ? (
              <></>
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
            <Box>
              <Typography align="center" component="h1" variant="h4">
                My Cart
              </Typography>
              <Typography align="center" py={2}>
                You have <strong>{amountItemsInCart}</strong>{" "}
                {amountItemsInCart === 1 ? "Item" : "Items"} in your cart
              </Typography>
            </Box>
            {!hasProducts && (
              <Box py={4}>
                <Button fullWidth onClick={goToProductsPage}>
                  SEE OUR PRODUCTS
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
