const Sequelize = require("sequelize");

const CelularModel = require("./models/celular.model");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

const Celular = CelularModel(sequelize, Sequelize);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("tablas sincronizadas");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = Celular;
