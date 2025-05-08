import React from "react";
import { useParams } from "react-router-dom";
import { productos } from "../utils/Productos";

export default function ProductosDetail() {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === parseInt(id));

  if (!producto) {
    return <div>Producto no encontrado.</div>;
  }

  return (
    <div className="container-fluid bg-productos">
      <h2
        className="color-blue fw-bold mb-4 text-center mt-2"
        style={{ fontSize: "2rem" }}
      >
        {producto.nombre}
      </h2>
      <h5
        className="text-center text-secondary mb-4"
        style={{ letterSpacing: "1px" }}
      >
        {producto.descripcion}
      </h5>
      <div className="container-fluid">
        <div className="row">
          {producto.imagen2 && (
            <div className="col-md-6 mb-4">
              <img
                src={producto.imagen2}
                alt={producto.nombre}
                className="img-fluid rounded shadow-sm w-100"
                style={{ height: "500px", objectFit: "cover" }}
              />
            </div>
          )}
          {producto.imagen3 && (
            <div className="col-md-6">
              <img
                src={producto.imagen3}
                alt={producto.nombre}
                className="img-fluid rounded shadow-sm w-100"
                style={{ height: "500px", objectFit: "cover" }}
              />
            </div>
          )}
        </div>
      </div>

      {producto.fichaPDF && (
        <div className="mt-2 text-center">
          <br />
          <div className="mb-4 mt-2">
            <a
              href={producto.fichaPDF}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="btn-custom"
            >
              Descargar ficha técnica
            </a>
          </div>
          <iframe
            src={producto.fichaPDF}
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "400px",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
            title="Ficha Técnica"
          ></iframe>
        </div>
      )}
      <br />
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-around py-4">
        {producto.video && (
          <div className="mb-3 mb-md-0 me-md-3">
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: "100%",
                maxWidth: "400px",
                height: "400px",
                borderRadius: "10px",
              }}
            >
              <source src={producto.video} type="video/mp4" />
              Tu navegador no soporta video HTML5.
            </video>
          </div>
        )}
        {producto.video1 && (
          <div className="mb-3 mb-md-0 me-md-3">
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: "100%",
                maxWidth: "400px",
                height: "400px",
                borderRadius: "10px",
              }}
            >
              <source src={producto.video1} type="video/mp4" />
              Tu navegador no soporta video HTML5.
            </video>
          </div>
        )}
        {producto.video2 && (
          <div className="mb-3 mb-md-0 me-md-3">
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: "100%",
                maxWidth: "400px",
                height: "400px",
                borderRadius: "10px",
              }}
            >
              <source src={producto.video2} type="video/mp4" />
              Tu navegador no soporta video HTML5.
            </video>
          </div>
        )}
      </div>
    </div>
  );
}
