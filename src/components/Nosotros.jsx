import React from "react";
import nosotrosImg from "../assets/images/nosotros.png";
import {
  FaHandshake,
  FaBalanceScale,
  FaRoad,
  FaShieldAlt,
} from "react-icons/fa";
import nosotros from "../assets/images/nosotros2.png";
import Carousel from "../utils/Carrousel";

export default function Nosotros() {
  const cardsData = [
    {
      icon: <FaHandshake size={40} />,
      title: "Compromiso",
      description:
        "Nos involucramos con cada cliente con seriedad y dedicación.",
    },
    {
      icon: <FaBalanceScale size={40} />,
      title: "Responsabilidad",
      description: "Actuamos con ética y profesionalismo en cada gestión.",
    },
    {
      icon: <FaRoad size={40} />,
      title: "Trayectoria",
      description: "Décadas de experiencia respaldan nuestro trabajo.",
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: "Integridad",
      description: "Transparencia en cada acción que emprendemos.",
    },
  ];

  return (
    <div className="container-fluid p-2 bg-light">
      {/* Imagen principal */}
      <img
        src={nosotrosImg}
        alt="imagen principal"
        className="img-fluid w-100"
      />

      <div className="container py-5 ">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {cardsData.map((card, index) => (
            <div className="col" key={index}>
              <div
                className="card h-100 text-center border-0 shadow-sm p-3"
                style={{
                  transition:
                    "transform 0.3s, background-color 0.3s, color 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "rotateY(10deg)";
                  e.currentTarget.style.backgroundColor = "#0056b3";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.querySelector("h5").style.fontWeight = "600";
                  e.currentTarget.querySelector("p").style.fontWeight = "600";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "rotateY(0deg)";
                  e.currentTarget.style.backgroundColor = "#fff";
                  e.currentTarget.style.color = "#000";
                  e.currentTarget.querySelector("h5").style.fontWeight =
                    "normal";
                  e.currentTarget.querySelector("p").style.fontWeight =
                    "normal";
                }}
              >
                <div className="card-body">
                  <div className="mb-3" style={{ fontSize: "2rem" }}>
                    {card.icon}
                  </div>
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="row min-vh-100 align-items-center"
        style={{ marginLeft: "40px" }}
      >
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
              className="color-blue fw-bold mb-4"
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

        <div className="position-relative col-md-6 p-0 h-100 p-4">
          <Carousel />
        </div>
      </div>
    </div>
  );
}
