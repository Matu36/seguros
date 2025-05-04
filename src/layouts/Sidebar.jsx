import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import sidebarImg from "../assets/images/sidebar.jpg";
import imagen1 from "../assets/images/LOGOHEADER.png";

export default function Sidebar() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        className="navbar-toggler custom-toggler"
        type="button"
        onClick={() => setShow(true)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <Offcanvas
        show={show}
        onHide={() => setShow(false)}
        placement="start"
        className="custom-sidebar"
        style={{
          //   backgroundImage: `url(${sidebarImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#333333",
          backgroundColor: "#0056b3",
        }}
      >
        <Offcanvas.Body>
          <ul className="text-white list-unstyled px-3 mt-4">
            {[
              { name: "Inicio", href: "/" },
              { name: "Servicios", href: "/servicios" },
              { name: "Novedades", href: "/novedades" },
              { name: "Nosotros", href: "/aboutUs" },
              { name: "Contacto", href: "/contacto" },
            ].map(({ name, href }, index) => (
              <li key={index} className="mb-3">
                <a
                  href={href}
                  className="sidebar-link"
                  style={{
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.6)",
                    display: "block",
                  }}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>

          <div className="logosidebarcontainer">
            <img src={imagen1} alt="imagenLogo" className="logo-sidebar" />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
