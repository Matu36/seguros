import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import LOGOHEADER from "../assets/images/frenteachicado.png";
import Sidebar from "../layouts/Sidebar";

export default function Header() {
  return (
    <>
      <div className="bg-dark-custom py-1 topbar">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center flex-wrap gap-2 contact-info">
            <span
              className="fw-bold text-white"
              style={{ letterSpacing: "1px", marginRight: "1rem" }}
            >
              <FaMapMarkerAlt className="me-1" /> Calle 11 esquina 32 Nº3, La
              Plata
            </span>
            <span
              className="fw-bold text-white"
              style={{ letterSpacing: "1px", marginRight: "1rem" }}
            >
              <FaEnvelope className="me-1" /> segurospineda@hotmail.com
            </span>
            <span
              className="fw-bold text-white"
              style={{ letterSpacing: "1px" }}
            >
              <FaPhone className="me-1" /> (221) 425-0325
            </span>
          </div>
          <div>
            <a
              href="https://instagram.com/segurospineda"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-white">
        <div className="container">
          <a className="navbar-brand me-3" href="/">
            <img src={LOGOHEADER} alt="Logo" className="logo-img" />
          </a>

          <div className="d-lg-none ms-auto d-flex gap-4 align-items-center">
            <a
              href="https://www.google.com/maps?q=Calle+11+esquina+32+Nº3,+La+Plata"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#0d6efd",
                fontSize: "1.8rem",
                cursor: "pointer",
              }}
            >
              <FaMapMarkerAlt />
              <span className="visually-hidden">
                Calle 11 esquina 32 Nº3, La Plata
              </span>
            </a>

            <a
              href="https://wa.me/542215704647"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#25D366",
                fontSize: "1.8rem",
                cursor: "pointer",
              }}
            >
              <FaWhatsapp />
              <span className="visually-hidden">221 5704647</span>
            </a>

            <a
              href="https://instagram.com/segurospineda"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#E1306C",
                fontSize: "1.8rem",
                cursor: "pointer",
              }}
            >
              <FaInstagram />
              <span className="visually-hidden">Instagram</span>
            </a>
          </div>

          {/* Botón Hamburguesa solo visible en mobile */}
          <div className="d-lg-none ms-auto">
            <Sidebar />
          </div>

          {/* Navbar visible solo en pantallas grandes */}
          <div
            className="collapse navbar-collapse justify-content-center d-none d-lg-flex"
            id="navbarNav"
          >
            <ul className="navbar-nav custom-navbar mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/aboutUs">
                  Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/productos">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/novedades">
                  Novedades
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/contacto">
                  Contacto
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item d-flex align-items-center">
                <a
                  className="nav-link d-flex align-items-center"
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp color="#25D366" size={28} className="me-2" />
                  (221) 5704647
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
