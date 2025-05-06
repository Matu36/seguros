const { Contacto } = require("../db.js");
const { NODEMAILER_ADMIN, NODEMAILER_USER } = process.env;
const transporter = require("../mailer/mailer.js");

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

    await transporter.sendMail({
      from: `"Web Contacto" <${NODEMAILER_USER}>`,
      to: NODEMAILER_ADMIN,
      subject: "Nuevo contacto desde la web",
      html: `
        <h2>Nuevo contacto recibido</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Consulta:</strong><br/>${consulta}</p>
      `,
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
