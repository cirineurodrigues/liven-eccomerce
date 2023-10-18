import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import IMAGES from "@constants/Images";
import PATHS from "@constants/Paths";

const ProductNotFound: React.FC = () => {
  const navigate = useNavigate();

  const goToProductsPage = () => navigate(PATHS.ROOT);

  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      height="100%"
      justifyContent="center"
    >
      <Typography variant="h4" py={6}>
        Sorry, we couldn't find this product.
      </Typography>
      <Box mb={6}>
        <img src={IMAGES.EMPTY_STATE.SRC} style={{ maxWidth: 500 }} />
      </Box>
      <Button onClick={goToProductsPage}>See Other Products</Button>
    </Box>
  );
};

export default ProductNotFound;
