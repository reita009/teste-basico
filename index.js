const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ status: 200, msn: "Tudo certo!" });
});

app.listen(8081, () => {
  console.log("Sercidor rodando@");
});
