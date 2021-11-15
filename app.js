const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("<h1>Hello,Welcome to my page<h1>");
});
app.get("/permission", (req, res) => {
  var query = req.query["code"];

  res.json({
    owner: ["read", "write", "execute"],
    group: ["read"],
    other: ["read"],
  });
});

app.get("/parity", (req, res) => {
  var b1 = req.query["b1"];
  var b2 = req.query["b2"];
  var b3 = req.query["b3"];
  var b4 = req.query["b4"];
  var result = b1 ^ b2 ^ b3 ^ b4;
  res.send(`Results: ${result}`);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
