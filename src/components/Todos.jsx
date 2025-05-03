import React from "react";
import Principal from "./Principal";
import Novedades from "../components/Novedades";
import Servicios from "../components/Servicios";
import Nosotros from "../components/Nosotros";

export default function Todos() {
  return (
    <div>
      <Principal />
      <Novedades />
      <Servicios />
      <Nosotros />
    </div>
  );
}
