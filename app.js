const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({
    msg: "backend no ar",
  });
});

app.get("/teste", (req, res) => {
  res.send({
    answer_test: "sistema testado"
  })
})
// hello

app.listen(3000)
