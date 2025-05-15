import React, { useState, useEffect } from "react";
import ContactoImg from "../assets/images/CONTACTO.png";
import { useContacto } from "../hooks/useContacto";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";
import Spinner from "../utils/Spinner";

const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const telefonoRegex = /^[0-9]*$/;
const consultaRegex = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s.,;:!?]*$/;

const SITE_KEY = `${import.meta.env.VITE_SITE_KEY}`;

export default function Contacto() {
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token); // SE MANDA AL BAKEND
  };

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    consulta: "",
  });

  const { mutate: crearContacto } = useContacto().contactoMutation;

  //---------------------------------SPINNER ------------------------------------//

  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    setShowSpinner(true);

    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  //---------------------------------FIN SPINNER ------------------------------------//

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSpinner(true);
    if (!captchaToken) {
      Swal.fire({
        html: `<p style="font-weight:600; color:#fff;">Por favor, completá el CAPTCHA antes de enviar.</p>`,
        background: "#0056b3",
        confirmButtonText: "Ok",
        customClass: {
          popup: "swal-custom-popup",
          confirmButton: "swal-custom-button",
        },
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      setShowSpinner(false);
      return;
    }

    if (
      nombreRegex.test(formData.nombre) &&
      emailRegex.test(formData.email) &&
      telefonoRegex.test(formData.telefono) &&
      consultaRegex.test(formData.consulta)
    ) {
      crearContacto(
        { ...formData, captchaToken },
        {
          onSuccess: () => {
            setShowSpinner(false);
            Swal.fire({
              title: "Mensaje enviado",
              html: `<p style="font-weight:600; color:#fff;">Gracias por contactarnos. Te responderemos pronto.</p>`,
              background: "#0056b3",
              confirmButtonText: "Aceptar",
              customClass: {
                popup: "swal-custom-popup",
                confirmButton: "swal-custom-button",
              },
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });

            setFormData({
              nombre: "",
              email: "",
              telefono: "",
              consulta: "",
            });
          },
          onError: () => {
            setShowSpinner(false);
            Swal.fire({
              html: `<p style="font-weight:600; color:#fff;">Hubo un problema al enviar el mensaje. Intentalo más tarde.</p>`,
              background: "#0056b3",
              confirmButtonText: "Cerrar",
              customClass: {
                popup: "swal-custom-popup",
                confirmButton: "swal-custom-button",
              },
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
          },
        }
      );
    } else {
      setShowSpinner(false);
      Swal.fire({
        html: `<p style="font-weight:600; color:#fff;">Por favor, completá todos los campos correctamente.</p>`,
        background: "#0056b3",
        confirmButtonText: "Revisar",
        customClass: {
          popup: "swal-custom-popup",
          confirmButton: "swal-custom-button",
        },
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    }
  };

  return (
    <div className="container">
      <div className="row">
        {/* Imagen lado izquierdo */}
        <div className="col-md-6 p-2">
          <img
            src={ContactoImg}
            alt="Contacto"
            className="w-100 h-100 object-fit-cover"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Formulario lado derecho */}
        <div className="col-md-6 d-flex align-items-center">
          <div className="p-2 w-100">
            <div className="mb-4">
              <h4 className="mb-0 fs-5 text-uppercase text-secondary">
                CONTACTO
              </h4>

              <p className="mb-0 fs-2 fw-bold color-blue">
                Comunicate con nosotros
              </p>

              <p className="mt-2 fw-semibold text-dark">
                No dudes en contactarnos si tenés alguna pregunta, inquietud o
                si querés recibir asesoramiento para cotizar el producto que
                estás buscando.
              </p>
            </div>
            {showSpinner && <Spinner loading={true} />}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control mb-3"
                  id="nombre"
                  placeholder="Nombre"
                  value={formData.nombre}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (nombreRegex.test(value)) {
                      setFormData({ ...formData, nombre: value });
                    }
                  }}
                />

                <input
                  type="email"
                  className="form-control mb-3"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => {
                    const value = e.target.value;
                    setFormData({ ...formData, email: value });
                  }}
                />

                <input
                  type="text"
                  className="form-control mb-3"
                  id="telefono"
                  placeholder="Teléfono"
                  value={formData.telefono}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (telefonoRegex.test(value)) {
                      setFormData({ ...formData, telefono: value });
                    }
                  }}
                />

                <textarea
                  className="form-control mb-3"
                  id="consulta"
                  rows="4"
                  placeholder="Mensaje"
                  value={formData.consulta}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (consultaRegex.test(value)) {
                      setFormData({ ...formData, consulta: value });
                    }
                  }}
                ></textarea>
              </div>
              <ReCAPTCHA sitekey={SITE_KEY} onChange={handleCaptchaChange} />
              <div className="mt-4">
                <button
                  type="submit"
                  className="btn-custom"
                  disabled={showSpinner}
                >
                  ENVIAR MENSAJE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
