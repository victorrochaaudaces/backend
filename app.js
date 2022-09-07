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

app.get("/victor-teste", (req, res) => {
  res.send({ message: "sua vez Ramon!" })
})
// hello

app.listen(3000)
