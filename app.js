require("@babel/register");
require("dotenv").config();

const express = require("express");

const serverConfig = require("./config/serverCofnig");

const indexRouter = require("./routes/index.routes");

const app = express();

serverConfig(app);

app.use("/", indexRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Сервер запустился на ${PORT}`);
});
