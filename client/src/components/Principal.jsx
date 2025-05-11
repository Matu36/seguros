import React from "react";
import imgPrincipal from "../assets/images/INICIO-EST.jpeg";
import nosotros from "../assets/images/solimatu.jpg";
import ap from "../assets/images/productos/ap/ap.jpg";
import casa from "../assets/images/productos/casa/casa.jpg";
import automotor from "../assets/images/productos/automotor/automotor.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import videoTR from "../assets/videos/Todo-Riesgo.mp4";
import videoControl from "../assets/videos/controlar.mp4";
import videoCelular from "../assets/videos/celular.mp4";

export default function Principal() {
  return (
    <div className="container-fluid p-0">
      <img
        src={imgPrincipal}
        alt="imagen principal"
        className="img-fluid w-100"
      />

      <div className="row min-vh-90 align-items-center mt-2 mb-5">
        {/* Texto izquierda */}
        <div className="col-md-6 d-flex justify-content-center p-5">
          <div>
            <h4
              className="text-uppercase text-secondary mb-2"
              style={{ letterSpacing: "1px" }}
            >
              Acerca de la Compañía
            </h4>
            <h2
              className="color-blue fw-bold mb-4"
              style={{ fontSize: "2rem" }}
            >
              Sobre nosotros
            </h2>
            <p
              className="text-dark fs-5"
              style={{ maxWidth: "90%", lineHeight: "1.7" }}
            >
              En <strong>Seguros Pineda</strong>, nos destacamos por brindar un
              asesoramiento claro y personalizado, actuando siempre con
              responsabilidad, buena predisposición y rapidez. Nos comprometemos
              a acompañar a nuestros clientes en cada paso, ofreciendo un
              servicio cercano y eficiente que les permita sentirse respaldados
              en todo momento.
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
            className="position-absolute bottom-0 end-0 me-4 mb-4 d-inline-flex align-items-center gap-2 px-4 py-2 bg-white color-blue fw-semibold rounded shadow-sm text-decoration-none"
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
      <div className="container-fluid mt-4 mt-md-0 mb-2">
        <h4
          className="text-uppercase text-secondary text-center"
          style={{ letterSpacing: "1px" }}
        >
          Seguros de Vida y Patrimoniales
        </h4>
        <h2 className="color-blue text-center fw-bold">Productos</h2>
        <div className="row g-4 m-0">
          {/* Card 1 */}
          <div className="col-md-4">
            <Link to="/productos" className="text-decoration-none">
              <div
                className="card bg-dark-blue text-center text-white border-0 h-100"
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
                className="card bg-dark-blue  text-center text-white border-0 h-100"
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
                className="card bg-dark-blue  text-center text-white border-0 h-100"
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

        <div className="text-center mt-2 mb-2">
          <Link
            to="/productos"
            className="d-inline-flex align-items-center gap-2 px-4 py-2 bg-white color-blue fw-semibold rounded shadow-sm text-decoration-none"
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
      <div className="container-fluid bg-productos py-3 px-md-5 px-4 mt-4">
        <h4
          className="text-uppercase text-secondary text-center"
          style={{ letterSpacing: "1px" }}
        >
          Tendencias del sector asegurador
        </h4>
        <h2 className="color-blue text-center fw-bold">Novedades</h2>

        <div className="row g-4 justify-content-center">
          {/* Card 1 */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 rounded shadow-sm">
              <div className="p-2">
                <div className="ratio ratio-16x9 rounded overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-100 h-100"
                  >
                    <source src={videoTR} type="video/mp4" />
                    Tu navegador no soporta el video.
                  </video>
                </div>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title color-blue fw-bold text-uppercase">
                  Todo Riesgo
                </h5>
                <p className="card-text text-secondary">
                  Conocé los beneficios de tener cobertura total para tu
                  vehículo.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 rounded shadow-sm">
              <div className="p-2">
                <div className="ratio ratio-16x9 rounded overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-100 h-100"
                  >
                    <source src={videoControl} type="video/mp4" />
                    Tu navegador no soporta el video.
                  </video>
                </div>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title color-blue fw-bold text-uppercase">
                  Antes de Viajar
                </h5>
                <p className="card-text text-secondary">
                  Todo lo que necesitás tener en regla antes de salir a la ruta.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 rounded shadow-sm">
              <div className="p-2">
                <div className="ratio ratio-16x9 rounded overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-100 h-100"
                  >
                    <source src={videoCelular} type="video/mp4" />
                    Tu navegador no soporta el video.
                  </video>
                </div>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title color-blue fw-bold text-uppercase">
                  Sin Celular
                </h5>
                <p className="card-text text-secondary">
                  Concientización sobre el uso del celular al volante.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-2">
            <Link
              to="/novedades"
              className="d-inline-flex align-items-center gap-2 px-4 py-2 bg-white color-blue fw-semibold rounded shadow-sm text-decoration-none"
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
    </div>
  );
}
