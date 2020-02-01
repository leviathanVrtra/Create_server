const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  //console.log(req);
  const urlPath = req.url;
  //console.log(urlPath);

  if (urlPath === "/" || urlPath === "/overview") {
    res.end("This is the OVERVIEW PAGE...");
  } else if (urlPath === "/product") {
    res.end("This is the PRODUCT PAGE...");
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
      "my-own-header": "hello-world"
    });
    res.end("<h1>Page not found...</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000");
});
