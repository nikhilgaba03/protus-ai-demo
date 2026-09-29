const GOLD_DISCOUNT_RATE = 0.10;

function normalizeTier(tier) {
  if (typeof tier === "string" && tier.trim()) {
    return tier.trim().toLowerCase();
  }

  // Loyalty pricing is opt-in: requests without a tier remain standard.
  return "standard";
}

function discountRateForTier(tier) {
  const normalized = normalizeTier(tier);

  if (normalized === "gold") {
    return GOLD_DISCOUNT_RATE;
  }

  return 0;
}

module.exports = {
  normalizeTier,
  discountRateForTier,
};
