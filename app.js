const express = require("express");
const dotenv = require("dotenv");
const router = require("./router/routes");

dotenv.config();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log(`app sedang berjalan di port:${process.env.PORT}`);
});
