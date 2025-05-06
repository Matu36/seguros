const { Contacto } = require("../db.js");

const createContacto = async (req, res) => {
  try {
    const { nombre, email, telefono, consulta } = req.body;

    if (!nombre || !email || !telefono || !consulta) {
      throw "Faltan parámetros en el cuerpo de la solicitud";
    }

    // Validaciones
    const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefonoRegex = /^[0-9]+$/;
    const consultaRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s!?.,:;]+$/;

    if (!nombreRegex.test(nombre)) {
      throw "El nombre solo puede contener letras y espacios";
    }

    if (!emailRegex.test(email)) {
      throw "Formato de email inválido";
    }

    if (!telefonoRegex.test(telefono)) {
      throw "El teléfono solo puede contener números";
    }

    if (!consultaRegex.test(consulta)) {
      throw "La consulta contiene caracteres inválidos. Solo se permiten letras, números, espacios y los signos ! ? . , : ;";
    }

    const nuevoContacto = await Contacto.create({
      nombre,
      email,
      telefono,
      consulta,
    });

    return res.status(201).json(nuevoContacto);
  } catch (error) {
    console.error(error);
    return res.status(400).send({ error: error.toString() });
  }
};

module.exports = {
  createContacto,
};
