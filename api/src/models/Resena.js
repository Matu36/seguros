const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Resena",
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
      mensaje: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      puntuacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 5,
        },
      },
    },
    {
      tableName: "Resena",
      timestamps: true,
    }
  );
};
