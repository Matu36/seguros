const { Resena } = require("../db.js");

const createResena = async (req, res) => {
  try {
    const { nombre, email, puntuacion, mensaje } = req.body;

    if (!nombre || !mensaje || !puntuacion) {
      throw "Faltan parámetros en el cuerpo de la solicitud";
    }

    const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mensajeRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s!?.,:;]+$/;

    if (!nombreRegex.test(nombre))
      throw "El nombre solo puede contener letras y espacios";
    if (!emailRegex.test(email)) throw "Formato de email inválido";

    if (!mensajeRegex.test(mensaje)) throw "Consulta con caracteres inválidos";

    const nuevaResena = await Resena.create({
      nombre,
      email,
      puntuacion,
      mensaje,
    });

    return res.status(201).json(nuevaResena);
  } catch (error) {
    console.error(error);
    return res.status(400).send({ error: error.toString() });
  }
};

const getResenas = async (req, res) => {
  try {
    const resenas = await Resena.findAll({
      order: [["puntuacion", "DESC"]],
    });

    res.status(200).json(resenas);
  } catch (error) {
    console.error("Error al obtener las reseñas:", error);
    res.status(500).json({ message: "Error al obtener las reseñas" });
  }
};

module.exports = {
  createResena,
  getResenas,
};
