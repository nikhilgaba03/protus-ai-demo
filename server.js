const http = require("http");

const { getDemoCart } = require("./src/catalog");
const { calculateQuote } = require("./src/pricing");
const { renderCheckout } = require("./src/checkout-page");

function json(res, status, body) {
  res.writeHead(status, {
    "Content-Type": "application/json",
  });

  res.end(JSON.stringify(body));
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost");

  if (url.pathname === "/health") {
    return json(res, 200, {
      status: "ok",
      service: "checkout-demo",
    });
  }

  if (url.pathname === "/api/quote") {
    const cart = getDemoCart();
    const quote = calculateQuote(cart);

    return json(res, 200, quote);
  }

  if (url.pathname === "/checkout") {
    const cart = getDemoCart();
    const quote = calculateQuote(cart);

    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });

    res.end(renderCheckout(cart, quote));
    return;
  }

  if (url.pathname === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });

    res.end(`
      <!doctype html>
      <html>
        <body>
          <h1>Legacy QA Dashboard</h1>
          <p>Public protus.ai verification fixture.</p>
        </body>
      </html>
    `);

    return;
  }

  res.writeHead(404);
  res.end("Not found");
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Demo app listening on port 3000");
});
