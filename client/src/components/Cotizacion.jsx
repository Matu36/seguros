import React, { useState } from "react";
import Spinner from "../utils/Spinner";
import Swal from "sweetalert2";

export default function Cotizacion() {
  const [showSpinner, setShowSpinner] = useState(false);

  const [cotiData, setCotiData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    consulta: "",
  });

  return (
    <div className="container">
      <hr />
      <div className="row">
        {/* Formulario lado derecho */}
        <div className="col-md-12 d-flex align-items-center">
          <div className="p-2 w-100">
            <div className="mb-4">
              <h4 className="mb-0 fs-5 text-uppercase text-secondary">
                COTIZÁ TU AUTO
              </h4>

              <p className="mb-0 fs-2 fw-bold color-blue">
                Cotización hecha a tu medida
              </p>

              <p className="mt-2 fw-semibold text-dark">
                No dudes en contactarnos si tenés alguna pregunta, inquietud o
                si querés recibir asesoramiento personalizado para{" "}
                <strong>cotizar tu próximo auto</strong>. Estamos para ayudarte
                a encontrar la mejor opción que se adapte a tus necesidades.
              </p>
            </div>

            {showSpinner && <Spinner loading={true} />}
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control mb-3"
                  id="nombre"
                  placeholder="Nombre"
                  value={cotiData.nombre}
                  onChange={(e) => {
                    const value = e.target.value;

                    setCotiData({ ...cotiData, nombre: value });
                  }}
                />

                <input
                  type="email"
                  className="form-control mb-3"
                  id="email"
                  placeholder="Email"
                  value={cotiData.email}
                  onChange={(e) => {
                    const value = e.target.value;
                    setCotiData({ ...cotiData, email: value });
                  }}
                />

                <input
                  type="text"
                  className="form-control mb-3"
                  id="telefono"
                  placeholder="Teléfono"
                  value={cotiData.telefono}
                  onChange={(e) => {
                    const value = e.target.value;

                    setCotiData({ ...cotiData, telefono: value });
                  }}
                />

                <textarea
                  className="form-control mb-3"
                  id="consulta"
                  rows="4"
                  placeholder="Mensaje"
                  value={cotiData.consulta}
                  onChange={(e) => {
                    const value = e.target.value;

                    setCotiData({ ...cotiData, consulta: value });
                  }}
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="btn-custom"
                  disabled={showSpinner}
                >
                  COTIZAR
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
