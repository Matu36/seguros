import React, { useState, useEffect } from "react";
import { useResena } from "../hooks/useResena";
import { FaArrowDown } from "react-icons/fa";

export default function Resena() {
  const { resenaMutation } = useResena();

  const { data: resenas } = useResena().resenasQuery;
  const [mostrarTodas, setMostrarTodas] = useState(false);

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
    puntuacion: 5,
  });

  const [showMessage, setShowMessage] = useState(false);
  const [messageType, setMessageType] = useState(null);

  useEffect(() => {
    if (resenaMutation.isSuccess) {
      setMessageType("success");
      setShowMessage(true);
      const timer = setTimeout(() => {
        setShowMessage(false);
        setMessageType(null);
        resenaMutation.reset();
      }, 3000);
      return () => clearTimeout(timer);
    } else if (resenaMutation.isError) {
      setMessageType("error");
      setShowMessage(true);
      const timer = setTimeout(() => {
        setShowMessage(false);
        setMessageType(null);
        resenaMutation.reset();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [resenaMutation.isSuccess, resenaMutation.isError, resenaMutation]);

  const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mensajeRegex = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s.,;:!?]*$/;

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validar campos con regex
    let isValid = true;
    switch (name) {
      case "nombre":
        isValid = nombreRegex.test(value);
        break;

      case "mensaje":
        isValid = mensajeRegex.test(value);
        break;
      default:
        break;
    }

    if (isValid || name === "puntuacion") {
      setForm((prev) => ({
        ...prev,
        [name]: name === "puntuacion" ? Number(value) : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailRegex.test(form.email)) {
      alert("Por favor ingresá un email válido.");
      return;
    }
    resenaMutation.mutate(form, {
      onSuccess: () => {
        setForm({ nombre: "", email: "", mensaje: "", puntuacion: 5 });
      },
    });
  };

  return (
    <div className="container-fluid">
      <h2 className="text-center mb-4 mt-4 color-blue fw-bold">
        ¡Nos interesa tu opinión!
      </h2>

      <form onSubmit={handleSubmit} className="px-4">
        <div className="row g-3 px-4">
          <div className="col-md-6">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={form.nombre}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="col-md-6">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="col-md-6">
            <textarea
              name="mensaje"
              placeholder="Escribí tu opinión"
              value={form.mensaje}
              onChange={handleChange}
              className="form-control"
              rows={2}
              required
            />
          </div>

          <div className="col-md-4 estrellas-rating">
            {[1, 2, 3, 4, 5].map((num) => (
              <span
                key={num}
                className={
                  num <= form.puntuacion ? "estrella activa" : "estrella"
                }
                onClick={() =>
                  setForm((prev) => ({
                    ...prev,
                    puntuacion: num,
                  }))
                }
              >
                ★
              </span>
            ))}
          </div>

          <div className="col-12 d-flex justify-content-center mt-4 mb-2">
            <button
              type="submit"
              className="btn-custom"
              disabled={resenaMutation.isLoading}
            >
              {resenaMutation.isLoading ? "Enviando..." : "ENVIAR OPINIÓN"}
            </button>
          </div>

          {showMessage && messageType === "success" && (
            <div
              className="alert mt-3"
              role="alert"
              style={{
                backgroundColor: "#cce5ff",
                color: "#004085",
                borderColor: "#b8daff",
              }}
            >
              ¡Gracias por tu opinión!
            </div>
          )}

          {showMessage && messageType === "error" && (
            <div className="col-12">
              <div className="alert alert-danger mt-3" role="alert">
                Ocurrió un error al enviar.
              </div>
            </div>
          )}
        </div>
      </form>
      <div className="mt-4 bg-productos py-2">
        {resenas?.length > 0 && (
          <h4
            className=" text-secondary text-center"
            style={{ letterSpacing: "1px" }}
          >
            Lo que nuestros clientes opinan de nosotros
          </h4>
        )}
        <div className="container mt-4">
          <div className="row g-3 d-flex justify-content-center">
            {(mostrarTodas ? resenas : resenas?.slice(0, 3))?.map(
              (resena, index) => (
                <div className="col-12 col-sm-6 col-md-4" key={index}>
                  <div
                    className="border rounded p-2 h-100 shadow-sm bg-white"
                    style={{
                      wordWrap: "break-word",
                      overflowWrap: "break-word",
                    }}
                  >
                    <p className="mt-1 mb-1 fw-semibold text-dark fs-6">
                      <strong>Email:</strong> {resena.email}
                    </p>
                    <p className="mt-1 mb-1 fw-semibold text-dark fs-6">
                      <strong>Mensaje:</strong> {resena.mensaje}
                    </p>
                    <p
                      style={{ fontSize: "1rem" }}
                      className="mt-1 mb-0 fw-semibold text-warning"
                    >
                      Puntuación: {"★".repeat(resena.puntuacion)}
                      {"☆".repeat(5 - resena.puntuacion)}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        {resenas?.length > 3 && (
          <div className="text-center mt-4 mb-2">
            <button
              className="d-inline-flex align-items-center gap-2 px-4 py-2 bg-white color-blue fw-semibold rounded shadow-sm border-0"
              style={{ transition: "all 0.3s ease", cursor: "pointer" }}
              onMouseEnter={(e) => {
                const icon = e.currentTarget.querySelector(".arrow-icon");
                icon.style.transform = "rotate(180deg)";
              }}
              onMouseLeave={(e) => {
                const icon = e.currentTarget.querySelector(".arrow-icon");
                icon.style.transform = "rotate(0deg)";
              }}
              onClick={() => setMostrarTodas(!mostrarTodas)}
            >
              {mostrarTodas ? "Ver menos" : "Ver todas"}
              <FaArrowDown
                className="arrow-icon"
                style={{
                  transition: "transform 0.3s ease",
                }}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
