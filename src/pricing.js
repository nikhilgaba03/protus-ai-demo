function calculateQuote(items) {
  const subtotalPaise = items.reduce(
    (total, item) => total + item.pricePaise * item.quantity,
    0,
  );

  const discountPaise = 0;

  const shippingPaise =
    subtotalPaise >= 200000
      ? 0
      : 9900;

  const taxablePaise =
    subtotalPaise - discountPaise + shippingPaise;

  const taxPaise = Math.round(taxablePaise * 0.18);

  const totalPaise =
    taxablePaise + taxPaise;

  return {
    subtotalPaise,
    discountPaise,
    shippingPaise,
    taxPaise,
    totalPaise,
  };
}

module.exports = {
  calculateQuote,
};
