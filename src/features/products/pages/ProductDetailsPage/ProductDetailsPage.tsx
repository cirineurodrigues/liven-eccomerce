import { useParams } from "react-router-dom";

import _isEmpty from "lodash/isEmpty";

import ProductDetails from "@products/components/ProductDetails";
import ProductNotFound from "@products/components/ProductNotFound";
import { useGetProductByIdQuery } from "@services/productsService";
import ProductDetailsSkeleton from "@features/products/components/ProductDetailsSkeleton/ProductDetailsSkeleton";

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetProductByIdQuery(Number(id));

  if (isLoading) {
    return <ProductDetailsSkeleton />;
  }

  return _isEmpty(data) ? (
    <ProductNotFound />
  ) : (
    <ProductDetails product={data} />
  );
};

export default ProductDetailsPage;
