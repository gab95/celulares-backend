require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const app = express();

const celularRoutes = require("./routes/celular.routes");
require("./db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(helmet());
app.use(cors());

const swaggerOptions = {
  swaggerDefinition: {
    swagger: "2.0",
    info: {
      title: "Celulares API",
      description: "Celulares API para la charla de Flutter",
      contact: { name: "Gabriel Aguilar" },
      servers: [
        {
          url: "http://localhost:3000",
        },
        {
          url: "https://celulares-backend.herokuapp.com",
        },
      ],
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use(
  "/api/docs",
  swaggerUI.serve,
  swaggerUI.setup(swaggerDocs, { explorer: true })
);

app.use("/api/celulares", celularRoutes);

app.all("*", (req, res, next) => {
  res.redirect("/api/docs");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App escuchando en puerto ${PORT}`);
});
