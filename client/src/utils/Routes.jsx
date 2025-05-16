import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import News from "../pages/News";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Inicio from "../pages/Inicio";
import ProductoDetalle from "../pages/ProductoDetalle";
import NovedadesDetalle from "../pages/NovedadesDetalle";
import TelUtiles from "../pages/TelUtiles";
import Cotizar from "../pages/Cotizar";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/novedades" element={<News />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/productos" element={<Services />} />
        <Route path="/telUtiles" element={<TelUtiles />} />
        <Route path="/cotizar" element={<Cotizar />} />
        <Route path="/productos/:id" element={<ProductoDetalle />} />
        <Route path="/novedades/:id" element={<NovedadesDetalle />} />
      </Routes>
    </Router>
  );
}
