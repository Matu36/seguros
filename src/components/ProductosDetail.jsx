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
    <div className="container py-3 bg-productos">
      <h2
        className="color-blue fw-bold mb-4 text-center"
        style={{ fontSize: "2rem" }}
      >
        {producto.nombre}
      </h2>
      <h5
        className="text-center text-secondary mb-2"
        style={{ letterSpacing: "1px" }}
      >
        {producto.descripcion}
      </h5>
      {/* {producto.imagen1 && (
        <img
          src={producto.imagen1}
          alt={producto.nombre}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      )} */}
      {producto.fichaPDF && (
        <div className="mt-4 text-center mb-4">
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
      <div className="d-flex justify-content-between mt-3">
        {producto.video && (
          <div>
            <video
              controls
              autoPlay
              muted
              loop
              style={{
                width: "80%",
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
          <div>
            <video
              controls
              autoPlay
              muted
              loop
              style={{
                width: "80%",
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
          <div>
            <video
              controls
              autoPlay
              muted
              loop
              style={{
                width: "80%",
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
