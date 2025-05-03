import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark-custom text-white text-center py-2">
      <div className="container">
        <p className="mb-0">
          © 2025 Seguros PINEDA - Todos los derechos reservados
        </p>
        <p className="mb-0">
          <a href="/privacidad" className="text-white">
            Política de privacidad
          </a>{" "}
          |
          <a href="/terminos" className="text-white">
            Términos y condiciones
          </a>
        </p>
      </div>
    </footer>
  );
}
