import React from "react";
import imgPrincipal from "../assets/images/INICIO-EST.jpeg";
import nosotros from "../assets/images/nosotros.png";
import ap from "../assets/images/productos/ap/ap.jpg";
import casa from "../assets/images/productos/casa/casa.jpg";
import automotor from "../assets/images/productos/automotor/automotor.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function Principal() {
  return (
    <div className="container-fluid p-0">
      {/* Imagen principal */}
      <img
        src={imgPrincipal}
        alt="imagen principal"
        className="img-fluid w-100"
      />

      <div className="row min-vh-100 align-items-center mt-2">
        {/* Texto izquierda */}
        <div className="col-md-6 d-flex justify-content-center bg-light p-5">
          <div>
            <h4
              className="text-uppercase text-secondary mb-2"
              style={{ letterSpacing: "1px" }}
            >
              Acerca de la Compañía
            </h4>
            <h2
              className="text-primary fw-bold mb-4"
              style={{ fontSize: "2rem" }}
            >
              Sobre nosotros
            </h2>
            <p
              className="text-dark fs-5"
              style={{ maxWidth: "90%", lineHeight: "1.7" }}
            >
              En <strong>Seguros Pineda</strong>, nos enfocamos en atender las
              necesidades de los clientes, brindando el asesoramiento y apoyo
              necesarios para que puedan ofrecer un servicio de calidad a sus
              clientes y alcanzar el éxito en su carrera profesional.
            </p>
          </div>
        </div>

        {/* Imagen derecha */}
        <div className="position-relative col-md-6 p-0 h-100 p-2">
          <img
            src={nosotros}
            alt="Acerca de la compañía"
            className="w-100 h-100"
            style={{ objectFit: "cover" }}
          />
          <a
            href="/aboutUs"
            className="position-absolute bottom-0 end-0 me-4 mb-4 d-inline-flex align-items-center gap-2 px-4 py-2 bg-white text-primary fw-semibold rounded shadow-sm text-decoration-none"
            style={{ transition: "all 0.3s ease", cursor: "pointer" }}
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
          </a>
        </div>
      </div>
      <div className="container-fluid mb-4">
        <h4
          className="text-uppercase text-secondary text-center"
          style={{ letterSpacing: "1px" }}
        >
          Seguros de Vida y Patrimoniales
        </h4>
        <h2 className="text-primary text-center fw-bold">Productos</h2>
        <div className="row g-4 m-0">
          {/* Card 1 */}
          <div className="col-md-4">
            <Link to="/productos" className="text-decoration-none">
              <div
                className="card bg-primary text-center text-white border-0 h-100"
                style={{ cursor: "pointer" }}
              >
                <img
                  src={ap}
                  className="card-img-top"
                  alt="Accidentes Personales"
                  style={{ objectFit: "cover", height: "200px" }}
                />
                <div className="card-body">
                  <p className="card-text fw-semibold text-white">
                    Accidentes Personales
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <Link to="/productos" className="text-decoration-none">
              <div
                className="card bg-primary text-center text-white border-0 h-100"
                style={{ cursor: "pointer" }}
              >
                <img
                  src={casa}
                  className="card-img-top"
                  alt="Hogar"
                  style={{ objectFit: "cover", height: "200px" }}
                />
                <div className="card-body">
                  <p className="card-text fw-semibold text-white">Hogar</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <Link to="/productos" className="text-decoration-none">
              <div
                className="card bg-primary text-center text-white border-0 h-100"
                style={{ cursor: "pointer" }}
              >
                <img
                  src={automotor}
                  className="card-img-top"
                  alt="Automotor"
                  style={{ objectFit: "cover", height: "200px" }}
                />
                <div className="card-body">
                  <p className="card-text fw-semibold text-white">Automotor</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="text-center mt-2">
          <Link
            to="/productos"
            className="d-inline-flex align-items-center gap-2 px-4 py-2 bg-white text-primary fw-semibold rounded shadow-sm text-decoration-none"
            style={{ transition: "all 0.3s ease", cursor: "pointer" }}
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
  );
}
