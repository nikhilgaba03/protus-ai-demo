const {
  discountRateForTier,
} = require("./loyalty");

function calculateQuote(items, options = {}) {
  const subtotalPaise = items.reduce(
    (total, item) => total + item.pricePaise * item.quantity,
    0,
  );

  const discountRate =
    discountRateForTier(options.customerTier);

  const discountPaise =
    Math.round(subtotalPaise * discountRate);

  const discountedSubtotalPaise =
    subtotalPaise - discountPaise;

  const shippingPaise =
    discountedSubtotalPaise >= 200000
      ? 0
      : 9900;

  const taxablePaise =
    discountedSubtotalPaise + shippingPaise;

  const taxPaise =
    Math.round(taxablePaise * 0.18);

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
