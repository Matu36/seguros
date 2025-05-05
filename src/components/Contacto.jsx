import React from "react";
import ContactoImg from "../assets/images/CONTACTO.png";

export default function Contacto() {
  return (
    <div className="container-fluid">
      <div className="row min-vh-100">
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
                Contactate con nosotros por cualquier duda, inquietud, o para{" "}
                <br />
                formar parte de nuestra red de productores.
              </p>
            </div>

            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  placeholder="Nombre"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="telefono"
                  placeholder="Teléfono"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="mensaje"
                  rows="4"
                  placeholder="Mensaje"
                ></textarea>
              </div>
              <div className=" mt-3">
                <button type="submit" className="btn-custom">
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
