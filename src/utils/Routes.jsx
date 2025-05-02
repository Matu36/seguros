import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import AboutUs from "../pages/AboutUs";
import News from "../pages/News";
import Contact from "../pages/Contact";
import Services from "../pages/Services";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/novedades" element={<News />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/servicios" element={<Services />} />
      </Routes>
    </Router>
  );
}
