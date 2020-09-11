const express = require("express");
const router = express.Router();

const celularController = require("../controllers/celular.controller");

router
  .route("/")
  /**
   * @swagger
   * /api/celulares:
   *  get:
   *    description: Retorna todos los celulares registrados
   *    responses:
   *      '200':
   *        description: Lista de celulares
   *      '500':
   *        description: Error en el servidor
   */
  .get(celularController.obtenerTodosCelulares)
  .post(celularController.nuevoCelular);

router
  .route("/:id")
  .get(celularController.obtenerCelularPorId)
  .put(celularController.editarCelular)
  .delete(celularController.eliminarCelular);

module.exports = router;
