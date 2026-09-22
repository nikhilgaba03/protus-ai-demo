const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <!doctype html>
      <html>
        <body>
          <h1>Broken QA Dashboard</h1>
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
