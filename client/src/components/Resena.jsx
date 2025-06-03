import React, { useState, useEffect } from "react";
import { useResena } from "../hooks/useResena";

export default function Resena() {
  const { resenaMutation } = useResena();
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "puntuacion" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resenaMutation.mutate(form, {
      onSuccess: () => {
        setForm({ nombre: "", email: "", mensaje: "", puntuacion: 5 });
      },
    });
  };

  return (
    <div className="container my-3">
      <h2 className="text-center mb-4 color-blue fw-bold">
        Nos interesa tu opinión!
      </h2>

      <form
        onSubmit={handleSubmit}
        className="border rounded shadow-sm bg-light p-4"
      >
        <div className="row g-3">
          <div className="col-md-6">
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
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
              placeholder="Tu email"
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

          <div className="col-md-4">
            <select
              name="puntuacion"
              value={form.puntuacion}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="" disabled>
                Seleccioná una puntuación
              </option>
              <option value={5}>⭐⭐⭐⭐⭐</option>
              <option value={4}>⭐⭐⭐⭐</option>
              <option value={3}>⭐⭐⭐</option>
              <option value={2}>⭐⭐</option>
              <option value={1}>⭐</option>
            </select>
          </div>

          <div className="col-12 d-flex justify-content-center">
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
    </div>
  );
}
