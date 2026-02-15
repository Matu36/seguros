import img from "../assets/images/header-chicos.png";

export default function RetiroInversionMobile() {
  return (
    <div className="retiro-mobile d-md-none">
      <h3 className="retiro-mobile-title">Seguros de Retiro e Inversión</h3>
      <img
        src={img}
        alt="Seguro de retiro e inversión"
        className="retiro-mobile-img"
      />

      <div className="retiro-mobile-content">
        <h2>
          Ahorrá <span>hoy</span>
          <br />
          Asegurá tu <strong>futuro</strong>
        </h2>

        <p>Generá un respaldo económico que te permita vivir un futuro mejor</p>

        <a
          href="https://www.fedpat.com.ar/seguro-de-retiro/"
          target="_blank"
          rel="noopener noreferrer"
          className="retiro-mobile-btn"
        >
          Protegé tu futuro hoy
        </a>
      </div>
    </div>
  );
}
