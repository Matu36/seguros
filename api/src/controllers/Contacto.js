const { Contacto } = require("../db.js");
const { NODEMAILER_ADMIN, NODEMAILER_USER, SECRET_KEY_CAPTCHA } = process.env;
const transporter = require("../mailer/mailer.js");
const axios = require("axios");

const createContacto = async (req, res) => {
  try {
    const { nombre, email, telefono, consulta, captchaToken } = req.body;

    if (!captchaToken) {
      return res.status(400).json({ error: "Falta el token del captcha" });
    }

    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY_CAPTCHA}&response=${captchaToken}`;
    const response = await axios.post(verifyUrl);

    if (!response.data.success) {
      return res
        .status(400)
        .json({ error: "Falló la verificación de reCAPTCHA" });
    }

    if (!nombre || !email || !telefono || !consulta) {
      throw "Faltan parámetros en el cuerpo de la solicitud";
    }

    const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefonoRegex = /^[0-9]+$/;
    const consultaRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s!?.,:;]+$/;

    if (!nombreRegex.test(nombre))
      throw "El nombre solo puede contener letras y espacios";
    if (!emailRegex.test(email)) throw "Formato de email inválido";
    if (!telefonoRegex.test(telefono))
      throw "El teléfono solo puede contener números";
    if (!consultaRegex.test(consulta))
      throw "Consulta con caracteres inválidos";

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
