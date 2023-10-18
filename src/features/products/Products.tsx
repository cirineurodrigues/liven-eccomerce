// import _isEmpty from "lodash/isEmpty";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { useGetAllProductsQuery } from "@services/productsService";
import ProductCard from "@products/components/ProductCard/ProductCard";
import ProductCardsSkeleton from "./components/ProductCardsSkeleton";

const Products: React.FC = () => {
  const { data, isLoading } = useGetAllProductsQuery();

  return (
    <Box>
      <Typography component="h1" py={2} variant="h4">
        All Products
      </Typography>
      <Grid container spacing={2}>
        {isLoading && <ProductCardsSkeleton />}
        {data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
