import agroImg from "../assets/images/productos/agro/card.jpg";
import apImg from "../assets/images/productos/ap/card.jpg";
import apColoniaImg from "../assets/images/productos/ap/cardcolonia.jpg";
import apMedicinaImg from "../assets/images/productos/ap/cardmedicina.jpg";
import automotorImg from "../assets/images/productos/automotor/automotor.jpg";
import casaImg from "../assets/images/productos/casa/casa.jpg";
import ciclistasImg from "../assets/images/productos/ciclistas/card.jpg";
import clasicoImg from "../assets/images/productos/clasicos/card.jpg";
import incendioImg from "../assets/images/productos/incendio/card.jpg";
import colectivoImg from "../assets/images/productos/colectivo/card.jpg";
import comercioImg from "../assets/images/productos/comercio/card.jpg";
import consorcioImg from "../assets/images/productos/consorcio/card.jpg";
import ecomovilidadImg from "../assets/images/productos/ecomovilidad/card.jpg";
import embarcacionesImg from "../assets/images/productos/embarcaciones/card.jpg";
import foodtruckImg from "../assets/images/productos/foodtruck/card.jpg";
import identidadImg from "../assets/images/productos/identidad/card.jpg";
import operativoImg from "../assets/images/productos/operativo/card.jpg";
import rcProImg from "../assets/images/productos/rcPro/card.jpg";
import retiroImg from "../assets/images/productos/retiro/card.jpg";
import sepelioImg from "../assets/images/productos/sepelio/card.jpg";
import vidaImg from "../assets/images/productos/vida/card.jpg";
import fichaAuto from "../assets/images/productos/automotor/ficha.pdf";
import videoAuto from "../assets/images/productos/automotor/siniestro.mp4";
import videoAuto1 from "../assets/images/productos/automotor/conciencia.mp4";
import videoAuto2 from "../assets/images/productos/automotor/control.mp4";
import imgagro1 from "../assets/images/productos/agro/img1.jpg";
import imgagro2 from "../assets/images/productos/agro/img2.jpg";
import imgagro3 from "../assets/images/productos/agro/img3.jpg";
import imgap1 from "../assets/images/productos/ap/img1ap.jpg";
import imgap2 from "../assets/images/productos/ap/img2ap.jpg";
import img1col from "../assets/images/productos/ap/colonia/img1col.jpg";
import img2col from "../assets/images/productos/ap/colonia/img2col.jpg";
import fichacol from "../assets/images/productos/ap/colonia/fichacol.pdf";
import videoapmed from "../assets/images/productos/ap/medicina/videoapmed.mp4";
import img1casa from "../assets/images/productos/casa/img1casa.jpg";
import img2casa from "../assets/images/productos/casa/img2casa.jpg";
import fichacasa from "../assets/images/productos/casa/fichacasa.pdf";
import img1ciclista from "../assets/images/productos/ciclistas/img1ciclista.jpg";
import img2ciclista from "../assets/images/productos/ciclistas/img2ciclista.jpg";
import fichaciclista from "../assets/images/productos/ciclistas/fichaciclista.pdf";
import img1cla from "../assets/images/productos/clasicos/img1cla.jpg";
import fichacla from "../assets/images/productos/clasicos/fichacla.pdf";
import vidaimg1 from "../assets/images/productos/colectivo/vidaimg1.jpg";
import vidaimg2 from "../assets/images/productos/colectivo/vidaimg2.jpg";
import img1com from "../assets/images/productos/comercio/img1com.jpg";
import img2com from "../assets/images/productos/comercio/img2com.jpg";
import videocom from "../assets/images/productos/comercio/videocom.mp4";
import img1con from "../assets/images/productos/consorcio/img1con.jpg";
import img2con from "../assets/images/productos/consorcio/img2con.jpg";
import fichacon from "../assets/images/productos/consorcio/fichacon.pdf";
import img1eco from "../assets/images/productos/ecomovilidad/img1eco.jpg";
import img2eco from "../assets/images/productos/ecomovilidad/img2eco.jpg";
import fichaeco from "../assets/images/productos/ecomovilidad/fichaeco.pdf";
import videoeco from "../assets/images/productos/ecomovilidad/videoeco.mp4";
import img1embar from "../assets/images/productos/embarcaciones/img1embar.jpg";
import img2embar from "../assets/images/productos/embarcaciones/img2embar.jpg";
import fichaembar from "../assets/images/productos/embarcaciones/fichaembar.pdf";
import img1food from "../assets/images/productos/foodtruck/img1food.jpg";
import img2food from "../assets/images/productos/foodtruck/img2food.jpg";
import fichafood from "../assets/images/productos/foodtruck/fichafood.pdf";

export const productos = [
  {
    id: 1,
    nombre: "Seguros Agropecuarios",
    descripcion:
      "Los seguros agropecuarios están diseñados para proteger la producción rural frente a riesgos climáticos, sanitarios y otros imprevistos que puedan afectar los cultivos o la actividad ganadera. Esta cobertura brinda respaldo económico al productor agropecuario, garantizando la continuidad de su trabajo ante pérdidas parciales o totales.",
    imagen1: agroImg,
    imagen2: imgagro1,
    imagen3: imgagro2,
    imagen4: imgagro3,
    video: "",
    video1: "",
    video2: "",
    fichaPDF: "",
  },
  {
    id: 2,
    nombre: "Accidentes Personales",
    descripcion:
      "El seguro de accidentes personales es una cobertura diseñada para proteger económicamente a una persona en caso de sufrir un accidente que le cause lesiones físicas, invalidez o incluso el fallecimiento. Este tipo de seguro ofrece una indemnización al asegurado o a sus beneficiarios según el tipo de daño sufrido, permitiendo afrontar gastos médicos, rehabilitación o pérdidas de ingresos por incapacidad.",
    imagen1: apImg,
    imagen2: imgap1,
    imagen3: imgap2,
    imagen4: "",
    video: "",
    video1: "",
    video2: "",
    fichaPDF: "",
  },
  {
    id: 3,
    nombre: "Accidentes personales para Colonias de vacaciones",
    descripcion:
      "El seguro de accidentes personales para colonias de vacaciones brinda cobertura médica y asistencia ante lesiones o incidentes que puedan sufrir niños, jóvenes o personal durante actividades recreativas, deportivas o educativas. Es una protección esencial para garantizar tranquilidad tanto a las familias como a los organizadores.",
    imagen1: apColoniaImg,
    imagen2: img1col,
    imagen3: img2col,
    imagen4: "",
    video: "",
    video1: "",
    video2: "",
    fichaPDF: fichacol,
  },
  {
    id: 4,
    nombre: "Accidentes Personales Medicina",
    descripcion:
      "El seguro de accidentes personales para medicina está diseñado especialmente para cubrir a médicos, enfermeros, técnicos y demás personal de salud ante posibles accidentes durante el desempeño de sus tareas o en su vida cotidiana. Es una herramienta clave para cuidar a quienes cuidan.",
    imagen1: apMedicinaImg,
    imagen2: "",
    imagen3: "",
    imagen4: "",
    video: videoapmed,
    video1: "",
    video2: "",
    fichaPDF: "",
  },
  {
    id: 5,
    nombre: "Seguros automotores",
    descripcion:
      "Nuestros seguros automotores están diseñados para brindar protección integral ante daños, robos, responsabilidad civil y eventos imprevistos. Ofrecemos distintas coberturas adaptadas a cada necesidad, garantizando respaldo económico, asistencia inmediata y tranquilidad en todo momento.",
    imagen1: automotorImg,
    imagen2: "",
    imagen3: "",
    imagen4: "",
    video: videoAuto,
    video1: videoAuto1,
    video2: videoAuto2,
    fichaPDF: fichaAuto,
  },
  {
    id: 6,
    nombre: "Combinado Familiar (Hogar)",
    descripcion:
      "El seguro combinado familiar es una solución integral que protege tu hogar y a tu familia ante múltiples riesgos. Cubre tanto la estructura de la vivienda como su contenido, frente a eventos como incendios, robos, daños por agua, y más. Además, incluye asistencia domiciliaria y responsabilidad civil frente a terceros.",
    imagen1: casaImg,
    imagen2: img1casa,
    imagen3: img2casa,
    imagen4: "",
    video: "",
    video1: "",
    video2: "",
    fichaPDF: fichacasa,
  },
  {
    id: 7,
    nombre: "Integral Ciclistas",
    descripcion:
      "El seguro integral para ciclistas está diseñado especialmente para quienes usan la bicicleta como medio de transporte, recreación o entrenamiento. Brinda cobertura tanto para el ciclista como para su bicicleta, protegiéndolos ante accidentes personales, robos, daños materiales y responsabilidad civil frente a terceros.",
    imagen1: ciclistasImg,
    imagen2: img2ciclista,
    imagen3: img1ciclista,
    imagen4: "",
    video: "",
    video1: "",
    video2: "",
    fichaPDF: fichaciclista,
  },
  {
    id: 8,
    nombre: "Autos Clásicos",
    descripcion:
      "Protegé tu joya sobre ruedas con una cobertura pensada especialmente para vehículos clásicos y de colección. Nuestro seguro para autos clásicos ofrece protección integral adaptada al valor real y al uso particular de este tipo de vehículos. ",
    imagen1: clasicoImg,
    imagen2: clasicoImg,
    imagen3: img1cla,
    imagen4: "",
    video: "",
    video1: "",
    video2: "",
    fichaPDF: fichacla,
  },
  {
    id: 9,
    nombre: "Vida Colectivo",
    descripcion:
      "Brindá a tu equipo la tranquilidad que merece y reforzá el compromiso de tu empresa con un plan de protección pensado para personas que trabajan juntas día a día. Nuestro Seguro de Vida Colectivo ofrece coberturas flexibles y beneficios exclusivos que se adaptan al tamaño y las necesidades de tu organización",
    imagen1: colectivoImg,
    imagen2: vidaimg1,
    imagen3: vidaimg2,
    imagen4: "",
    video: "",
    video1: "",
    video2: "",
    fichaPDF: "",
  },
  {
    id: 10,
    nombre: "Integral de Comercio",
    descripcion:
      "Protegé tu negocio ante imprevistos que pueden afectar su continuidad. Nuestro Seguro Integral de Comercio ofrece una cobertura completa diseñada para pequeños, medianos y grandes comercios",
    imagen1: comercioImg,
    imagen2: img1com,
    imagen3: img2com,
    imagen4: "",
    video: videocom,
    video1: "",
    video2: "",
    fichaPDF: "",
  },
  {
    id: 11,
    nombre: "Integral de Consorcio",
    descripcion:
      "Protección total para edificios residenciales y comerciales. El Seguro Integral de Consorcio cubre los riesgos más frecuentes que pueden afectar a propietarios, inquilinos y administradores",
    imagen1: consorcioImg,
    imagen2: img1con,
    imagen3: img2con,
    imagen4: "",
    video: "",
    video1: "",
    video2: "",
    fichaPDF: fichacon,
  },
  {
    id: 12,
    nombre: "EcoMovilidad",
    descripcion:
      "Movete con libertad y conciencia ecológica. Nuestro Seguro de Ecomovilidad está diseñado para cubrir bicicletas, monopatines eléctricos, e-scooters y otros medios de transporte sustentables",
    imagen1: ecomovilidadImg,
    imagen2: img1eco,
    imagen3: img2eco,
    imagen4: "",
    video: videoeco,
    video1: "",
    video2: "",
    fichaPDF: fichaeco,
  },
  {
    id: 13,
    nombre: "Embarcaciones",
    descripcion:
      "Navegá con total tranquilidad y disfrutá cada salida al agua sabiendo que estás protegido. Nuestro Seguro para Embarcaciones está pensado para lanchas, veleros, motos de agua y yates de uso recreativo, brindando coberturas completas tanto en navegación como en guardería",
    imagen1: embarcacionesImg,
    imagen2: img1embar,
    imagen3: img2embar,
    imagen4: "",
    video: "",
    video1: "",
    video2: "",
    fichaPDF: fichaembar,
  },
  {
    id: 14,
    nombre: "FoodTruck",
    descripcion:
      "Tu cocina sobre ruedas merece una protección a la altura. Nuestro Seguro para Food Trucks combina coberturas vehiculares y comerciales en una sola póliza integral, pensada para quienes emprenden sobre ruedas",
    imagen1: foodtruckImg,
    imagen2: img1food,
    imagen3: img2food,
    imagen4: "",
    video: "",
    video1: "",
    video2: "",
    fichaPDF: fichafood,
  },
  {
    id: 15,
    nombre: "Robo de Identidad",
    descripcion: "",
    imagen1: identidadImg,
    imagen2: "",
    imagen3: "",
    imagen4: "",
    video: "",
    video1: "",
    video2: "",
    fichaPDF: "",
  },
  {
    id: 16,
    nombre: "Seguros de incendio",
    descripcion: "",
    imagen1: incendioImg,
    imagen2: "",
    imagen3: "",
    imagen4: "",
    video: "",
    video1: "",
    video2: "",
    fichaPDF: "",
  },
  {
    id: 17,
    nombre: "Todo Riesgo Operativo",
    descripcion: "",
    imagen1: operativoImg,
    imagen2: "",
    imagen3: "",
    imagen4: "",
    video: "",
    video1: "",
    video2: "",
    fichaPDF: "",
  },
  {
    id: 18,
    nombre: "Responsabilidad Civil Profesional",
    descripcion: "",
    imagen1: rcProImg,
    imagen2: "",
    imagen3: "",
    imagen4: "",
    video: "",
    video1: "",
    video2: "",
    fichaPDF: "",
  },
  {
    id: 19,
    nombre: "Seguros de Retiro",
    descripcion: "",
    imagen1: retiroImg,
    imagen2: "",
    imagen3: "",
    imagen4: "",
    video: "",
    video1: "",
    video2: "",
    fichaPDF: "",
  },
  {
    id: 20,
    nombre: "Seguros de Sepelio",
    descripcion: "",
    imagen1: sepelioImg,
    imagen2: "",
    imagen3: "",
    imagen4: "",
    video: "",
    video1: "",
    video2: "",
    fichaPDF: "",
  },
  {
    id: 21,
    nombre: "Seguros de Vida",
    descripcion: "",
    imagen1: vidaImg,
    imagen2: "",
    imagen3: "",
    imagen4: "",
    video: "",
    video1: "",
    video2: "",
    fichaPDF: "",
  },
];
