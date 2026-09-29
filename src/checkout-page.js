function formatMoney(paise) {
  return `₹${(paise / 100).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function renderCheckout(items, quote) {
  const productRows = items
    .map(
      (item) => `
        <li>
          <span>${item.name}</span>
          <span>${formatMoney(item.pricePaise)}</span>
        </li>
      `,
    )
    .join("");

  return `
    <!doctype html>
    <html>
      <head>
        <title>protus.ai Checkout Demo</title>
      </head>
      <body>
        <main>
          <h1>Checkout</h1>

          <ul data-testid="cart-items">
            ${productRows}
          </ul>

          <section aria-label="Membership">
            <p>Loyalty savings are applied automatically for eligible members.</p>
          </section>

          <section aria-label="Order summary">
            <p>
              Subtotal:
              <strong data-testid="subtotal">${formatMoney(quote.subtotalPaise)}</strong>
            </p>

            <p>
              Discount:
              <strong data-testid="discount">${formatMoney(quote.discountPaise)}</strong>
            </p>

            <p>
              Shipping:
              <strong data-testid="shipping">${formatMoney(quote.shippingPaise)}</strong>
            </p>

            <p>
              GST:
              <strong data-testid="tax">${formatMoney(quote.taxPaise)}</strong>
            </p>

            <p>
              Total:
              <strong data-testid="total">${formatMoney(quote.totalPaise)}</strong>
            </p>
          </section>
        </main>
      </body>
    </html>
  `;
}

module.exports = {
  renderCheckout,
};
