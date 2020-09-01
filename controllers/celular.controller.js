const Celular = require("../db");

exports.obtenerTodosCelulares = async (req, res, next) => {
  try {
    const celulares = await Celular.findAll();
    return res.status(200).json({
      ok: true,
      celulares,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: error.errors[0].message,
    });
  }
};

exports.nuevoCelular = async (req, res, next) => {
  const { marca, modelo } = req.body;
  try {
    const celular = await Celular.create({
      marca,
      modelo,
    });

    return res.status(200).json({
      ok: true,
      celular,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: error.errors[0].message,
    });
  }
};

exports.obtenerCelularPorId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const celular = await Celular.findAll({ where: { id } });

    if (celular.length === 0) {
      return res.status(404).json({
        ok: false,
        msg: "No existe celular con ese id",
      });
    }

    return res.status(200).json({
      ok: true,
      celular,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: error.errors[0].message,
    });
  }
};

exports.editarCelular = async (req, res, next) => {
  const { id } = req.params;
  const { marca, modelo } = req.body;

  try {
    const celular = await Celular.findAll({ where: { id } });

    if (celular.length === 0) {
      return res.status(404).json({
        ok: false,
        msg: "No existe celular con ese id",
      });
    }

    await Celular.update({ marca, modelo }, { where: { id } });

    return res.status(200).json({
      ok: true,
      msg: "Se actualizó correctamente",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: error.errors[0].message,
    });
  }
};

exports.eliminarCelular = async (req, res, next) => {
  const { id } = req.params;
  try {
    const celular = await Celular.findAll({ where: { id } });

    if (celular.length === 0) {
      return res.status(404).json({
        ok: false,
        msg: "No existe celular con ese id",
      });
    }

    await Celular.destroy({ where: { id } });

    return res.status(204).json({
      ok: true,
      msg: "Se eliminó correctamente",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: error.errors[0].message,
    });
  }
};
