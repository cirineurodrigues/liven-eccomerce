export const formatToCurrency = (price: number) => {
  const dollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return dollar.format(price);
};
