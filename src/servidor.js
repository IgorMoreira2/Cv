const express = require("express");

const app = express();

app.use(express.json());

const Port = 3002;
app.listen(Port, () =>
  console.log(`O servidor foi iniciado na porta http://localhost:${Port}/`)
);
