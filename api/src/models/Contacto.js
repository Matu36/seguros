const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Contacto",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      telefono: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      consulta: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      tableName: "Contacto",
      timestamps: true,
    }
  );
};
