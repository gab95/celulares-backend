const express = require("express");
const router = express.Router();

const celularController = require("../controllers/celular.controller");

router
  .route("/")
  .get(celularController.obtenerTodosCelulares)
  .post(celularController.nuevoCelular);

router
  .route("/:id")
  .get(celularController.obtenerCelularPorId)
  .put(celularController.editarCelular)
  .delete(celularController.eliminarCelular);

module.exports = router;
