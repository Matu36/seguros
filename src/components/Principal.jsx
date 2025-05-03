import React from "react";
import imgPrincipal from "../assets/images/INICIO-EST.jpeg";
import nosotros from "../assets/images/nosotros.png";

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
          <a href="/aboutUs" className="overlay">
            <div className="overlay-content">Ver más</div>
          </a>
        </div>
      </div>
    </div>
  );
}
