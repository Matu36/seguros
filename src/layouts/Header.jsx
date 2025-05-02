import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="/">
          Seguros XYZ
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/servicios">
                Servicios
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/novedades">
                Novedades
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/aboutUs">
                Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contacto">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
