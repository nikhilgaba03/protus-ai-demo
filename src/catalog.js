const PRODUCTS = {
  keyboard: {
    id: "keyboard",
    name: "Mechanical Keyboard",
    pricePaise: 119900,
  },
  mouse: {
    id: "mouse",
    name: "Wireless Mouse",
    pricePaise: 99900,
  },
};

function getDemoCart() {
  return [
    { ...PRODUCTS.keyboard, quantity: 1 },
    { ...PRODUCTS.mouse, quantity: 1 },
  ];
}

module.exports = {
  PRODUCTS,
  getDemoCart,
};
