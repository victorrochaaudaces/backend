const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({
    msg: "backend no ar",
  });
});

app.listen(3000)
