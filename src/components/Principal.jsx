import React from "react";
import imgPrincipal from "../assets/images/INICIO-EST.jpeg";

export default function Principal() {
  return (
    <div className="container-fluid p-0">
      <img
        src={imgPrincipal}
        alt="imagen principal"
        className="img-fluid w-100"
      />
    </div>
  );
}
