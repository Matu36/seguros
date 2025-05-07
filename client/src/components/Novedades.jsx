import React from "react";
import { novedadesAseguradoras } from "../utils/novedadesAseguradoras ";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function Novedades() {
  return (
    <div className="container-fluid py-2 text-center bg-productos">
      <h4
        className="text-uppercase text-secondary mb-2"
        style={{ letterSpacing: "1px" }}
      >
        A la vanguardia del sector
      </h4>
      <h2 className="color-blue fw-bold mb-4" style={{ fontSize: "2rem" }}>
        Novedades
      </h2>
      <div className="row justify-content-center">
        {novedadesAseguradoras.map((producto) => (
          <div className="col-12 col-md-4 mb-4" key={producto.id}>
            <div className="card h-100 shadow-sm border-0">
              <img
                src={producto.foto}
                className="card-img-top"
                alt={producto.titulo}
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="fw-bold text-center text-dark mb-3">
                  {producto.titulo}
                </h5>
                <p
                  className="text-muted text-justify"
                  style={{ fontSize: "0.95rem" }}
                >
                  {producto.descripcionBreve}
                </p>
                <div className="text-start mt-3">
                  <Link
                    to={`/novedades/${producto.id}`}
                    className="text-primary fw-semibold text-decoration-none d-inline-flex align-items-center gap-2"
                    style={{
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      const icon = e.currentTarget.querySelector(".arrow-icon");
                      icon.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                      const icon = e.currentTarget.querySelector(".arrow-icon");
                      icon.style.transform = "translateX(0)";
                    }}
                  >
                    Leer más...
                    <FaArrowRight
                      className="arrow-icon"
                      style={{ transition: "transform 0.3s ease" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
