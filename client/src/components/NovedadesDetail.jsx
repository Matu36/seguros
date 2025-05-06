import React from "react";
import { novedadesAseguradoras } from "../utils/novedadesAseguradoras ";
import { useParams } from "react-router-dom";

export default function NovedadesDetail() {
  const { id } = useParams();
  const novedad = novedadesAseguradoras.find(
    (item) => item.id === parseInt(id)
  );

  if (!novedad) {
    return (
      <div className="container py-5 text-center">
        <h2 className="text-danger">Novedad no encontrada</h2>
      </div>
    );
  }

  return (
    <div className="container-fluid py-5 bg-productos">
      <div className="text-center mb-5">
        <img
          src={novedad.foto}
          alt={novedad.titulo}
          className="img-fluid rounded shadow img-novedad"
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>
      <h1
        className="color-blue fw-bold mb-4 text-center"
        style={{ fontSize: "2.5rem" }}
      >
        {novedad.titulo}
      </h1>
      <div
        className="p-2"
        style={{
          maxWidth: "850px",
          margin: "0 auto",
          lineHeight: "1.8",
          fontSize: "1.1rem",
          textAlign: "justify",
        }}
      >
        {novedad.descripcionAmpliada.split("\n").map((parrafo, index) => (
          <p key={index} className="mb-2">
            {parrafo}
          </p>
        ))}
      </div>
    </div>
  );
}
