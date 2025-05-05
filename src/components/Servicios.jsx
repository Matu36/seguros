import React from "react";
import { productos } from "../utils/Productos";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function Servicios() {
  return (
    <div className="container-fluid py-5 text-center bg-productos">
      <h4
        className="text-uppercase text-secondary mb-2"
        style={{ letterSpacing: "1px" }}
      >
        Abarcamos todas las posiblidades
      </h4>
      <h2 className="color-blue fw-bold mb-4" style={{ fontSize: "2rem" }}>
        Productos
      </h2>
      <div className="row">
        {productos.map((producto) => (
          <div className="col-12 col-sm-6 col-md-3 mb-4" key={producto.id}>
            <div className="card h-100 shadow-sm border-0">
              <img
                src={producto.imagen1}
                className="card-img-top"
                alt={producto.nombre}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="text-uppercase text-secondary text-center">
                  {producto.nombre}
                </h5>
                <div className="text-center mt-3">
                  <Link
                    to={`/productos/${producto.id}`}
                    className="d-inline-flex align-items-center gap-2 px-4 py-2 bg-white text-primary fw-semibold shadow-sm text-decoration-none"
                    style={{
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      borderRadius: "0",
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
                    Ver más
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
