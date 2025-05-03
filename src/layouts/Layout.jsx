import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Contacto from "../components/Contacto";
import { useLocation } from "react-router-dom";

export default function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1 px-0">{children}</main>
      {location.pathname !== "/contacto" && <Contacto />}
      <Footer />
    </div>
  );
}
