const express = require("express");
const router = express.Router();

const celularController = require("../controllers/celular.controller");

router
  .route("/")

  /**
   * @swagger
   * /api/celulares:
   *  get:
   *    description: Obtener todos los celulares
   *    responses:
   *      '200':
   *        description: Petición exitosa
   *      '500':
   *        description: Error del servidor
   */
  .get(celularController.obtenerTodosCelulares)

  /**
   * @swagger
   * /api/celulares:
   *  post:
   *    description: Añadir nuevo celular
   *    parameters:
   *      - name: reqBody
   *        description: Cuerpo de la petición
   *        in: body
   *        schema:
   *          type: object
   *          properties:
   *            marca:
   *              type: string
   *            modelo:
   *              type: string
   *          required:
   *            - marca
   *            - modelo
   *    responses:
   *      '200':
   *        description: Petición exitosa
   *      '404':
   *        description: Id no encontrado o no existente
   *      '500':
   *        description: Error del servidor
   */
  .post(celularController.nuevoCelular);

router
  .route("/:id")
  /**
   * @swagger
   * /api/celulares/{id}:
   *  get:
   *    description: Obtener celular por id
   *    parameters:
   *      - name: id
   *        description: id para obtener un celular en específico
   *        in: path
   *        type: integer
   *        required: true
   *    responses:
   *      '200':
   *        description: Petición exitosa
   *      '404':
   *        description: Id no encontrado o no existente
   *      '500':
   *        description: Error del servidor
   */
  .get(celularController.obtenerCelularPorId)

  /**
   * @swagger
   * /api/celulares/{id}:
   *  put:
   *    description: Actualizar celular
   *    parameters:
   *      - name: id
   *        description: id para actualizar un celular en específico
   *        in: path
   *        type: integer
   *        required: true
   *      - name: reqBody
   *        description: Cuerpo de la petición
   *        in: body
   *        schema:
   *          type: object
   *          properties:
   *            marca:
   *              type: string
   *            modelo:
   *              type: string
   *          required:
   *            - marca
   *            - modelo
   *    responses:
   *      '200':
   *        description: Petición exitosa
   *      '404':
   *        description: Id no encontrado o no existente
   *      '500':
   *        description: Error del servidor
   */
  .put(celularController.editarCelular)

  /**
   * @swagger
   * /api/celulares/{id}:
   *  delete:
   *    description: Eliminar celular por id
   *    parameters:
   *      - name: id
   *        description: id para eliminar un celular en específico
   *        in: path
   *        type: integer
   *        required: true
   *    responses:
   *      '204':
   *        description: Petición exitosa
   *      '404':
   *        description: Id no encontrado o no existente
   *      '500':
   *        description: Error del servidor
   */
  .delete(celularController.eliminarCelular);

module.exports = router;
