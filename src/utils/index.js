//formatear el precio al peso colombiano
export const formatPrice = (price) => {
  return Number(price).toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0
  });
};
