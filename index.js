require("dotenv").config();

const express = require("express");
const app = express();

const celularRoutes = require("./routes/celular.routes");
require("./db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/celulares", celularRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App escuchando en puerto ${PORT}`);
});
