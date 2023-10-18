import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";

interface IProductCardsSkeleton {
  cardsAmount?: number;
}

const ProductCardSkeleton: React.FC<IProductCardsSkeleton> = ({
  cardsAmount = 9,
}) => {
  const fakeProducts = new Array(cardsAmount).fill("");

  return fakeProducts.map((_, index) => (
    <Grid height={520} item key={index.toString()} lg={4} md={6} xs={12}>
      <Paper
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: theme.spacing(2),
        })}
      >
        <Box display="flex" height={210} justifyContent="center">
          <Skeleton height="100%" variant="rounded" width="100%" />
        </Box>
        <Box flex={1} py={2}>
          <Skeleton height={24} width={120} />
          <Skeleton height={32} width="100%" />
          <Skeleton height={24} width="100%" />
          <Box display="flex" justifyContent="flex-end" py={1}>
            <Skeleton height={48} width={50} />
          </Box>
        </Box>
        <Box>
          <Skeleton height={36.5} width="100%" />
        </Box>
      </Paper>
    </Grid>
  ));
};

export default ProductCardSkeleton;
