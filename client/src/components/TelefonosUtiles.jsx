import React from "react";
import { telefonosUtiles } from "../utils/telefonosUtiles";

export default function TelefonosUtiles() {
  return (
    <div className="container-fluid px-2 bg-productos py-2">
      <h4
        className="text-uppercase text-secondary text-center mt-2 "
        style={{ letterSpacing: "1px" }}
      >
        Teléfonos Útiles
      </h4>
      <div className="row mt-4">
        {telefonosUtiles.map((item) => (
          <div key={item.id} className="col-md-6 mb-3">
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                padding: "1rem",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <h5 className="mb-1 text-primary">{item.categoria}</h5>
              <p className="mb-0 fw-bold">{item.nombre}</p>
              <p className="mb-0">{item.telefono}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
