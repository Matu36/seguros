import React from "react";
import nosotrosImg from "../assets/images/nosotros.png";

export default function Nosotros() {
  return (
    <div className="container-fluid p-2">
      {/* Imagen principal */}
      <img
        src={nosotrosImg}
        alt="imagen principal"
        className="img-fluid w-100"
      />
      ;
    </div>
  );
}
