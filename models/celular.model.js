module.exports = (sequelize, type) => {
  return sequelize.define(
    "celulares",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      marca: {
        type: type.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Debe ingresar una marca de celular",
          },
          notEmpty: {
            args: true,
            msg: "La marca de celular no puede estar vacio",
          },
        },
      },

      modelo: {
        type: type.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Debe ingresar un modelo de celular",
          },
          notEmpty: {
            args: true,
            msg: "El modelo de celular no puede estar vacio",
          },
        },
      },
    },
    {
      timestamps: false,
    }
  );
};
