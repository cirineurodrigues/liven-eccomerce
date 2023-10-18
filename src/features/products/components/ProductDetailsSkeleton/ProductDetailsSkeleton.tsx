import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";

import CustomContainer from "@components/CustomContainer";

const ProductDetailsSkeleton: React.FC = () => {
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
              <Skeleton height="100%" width="100%" />
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
              <Skeleton height={42} width="100%" />
              <Skeleton
                height={24}
                sx={(theme) => ({ paddingTop: theme.spacing(2) })}
                width="100%"
              />

              <Box
                alignItems="center"
                display="flex"
                justifyContent="space-between"
                py={4}
              >
                <Skeleton
                  height={24}
                  sx={(theme) => ({ marginRight: theme.spacing(1) })}
                  width={120}
                />
                <Skeleton height={40} width={60} />
              </Box>
              {new Array(5).fill("").map((_, index) => (
                <Skeleton key={index.toString()} height={24} width="100%" />
              ))}
            </Box>
            <Box>
              <Skeleton height={36.5} width="100%" />
            </Box>
          </Grid>
        </Grid>
      </CustomContainer>
    </Paper>
  );
};

export default ProductDetailsSkeleton;
