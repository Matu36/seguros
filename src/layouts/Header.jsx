import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import LOGOHEADER from "../assets/images/LOGOHEADER.png";

export default function Header() {
  return (
    <>
      <div className="bg-dark-custom py-2 topbar">
        <div className="container d-flex justify-content-between align-items-center flex-wrap">
          <div className="d-flex align-items-center flex-wrap gap-5 contact-info">
            <span>
              <FaEnvelope className="me-1" /> segurospineda@hotmail.com
            </span>
            <span>
              <FaPhone className="me-1" /> (221) 425-0325
            </span>
            <span>
              <FaMapMarkerAlt className="me-1" /> Calle 11 esquina 32 Nº3, La
              Plata
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
          <a className="navbar-brand" href="/">
            <img src={LOGOHEADER} alt="Logo" height="100" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav custom-navbar mx-auto">
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

            <ul className="navbar-nav ms-auto">
              <li className="nav-item d-flex align-items-center">
                <a
                  className="nav-link d-flex align-items-center"
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp color="#25D366" size={22} className="me-2" />
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
