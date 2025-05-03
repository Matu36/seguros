import React from "react";
import ContactoImg from "../assets/images/CONTACTO.png";

export default function Contacto() {
  return (
    <div className="container-fluid">
      <div className="row min-vh-100">
        {/* Imagen lado izquierdo */}
        <div className="col-md-6 p-1">
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
              <h4 className="mb-1 fs-5 text-uppercase text-secondary">
                CONTACTO
              </h4>

              <p className="mb-1 fs-2 fw-bold text-primary">
                Comunicate con nosotros
              </p>

              <p className="mt-3 fw-semibold text-dark">
                Contactate con nosotros por cualquier duda, inquietud, o para{" "}
                <br />
                formar parte de nuestra red de productores.
              </p>
            </div>

            <form>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="tucorreo@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="telefono" className="form-label">
                  Teléfono
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="telefono"
                  placeholder="Tu número"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">
                  Mensaje
                </label>
                <textarea
                  className="form-control"
                  id="mensaje"
                  rows="4"
                  placeholder="Escribí tu mensaje..."
                ></textarea>
              </div>
              <div className=" mt-3">
                <button
                  type="submit"
                  className="btn btn-primary px-4 py-2 fs-6 fw-bold rounded shadow-sm"
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
