import { Link } from "react-router-dom";
import styles from "../styles/Estudios.module.css";

function Estudios() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Estudios</h1>
      <div className={styles.description}>
        <p>
          <strong>● ANALISTA PROGRAMADOR – INFORMÁTICA</strong><br />
          mar. 2024<br />
          INACAP, Santiago, Chile
        </p>
        <p className={styles.smallText}>
          En el año 2024 terminé mi carrera profesional adquiriendo habilidades en programación con lenguajes como <strong>JavaScript</strong> y <strong>Python</strong>. 
    Realicé proyectos de desarrollo de aplicaciones web y móviles, incluyendo el uso de <strong>HTML</strong> y <strong>CSS</strong>.
    Familiarizado con bases de datos <strong>SQL</strong>, así como su diseño y administración.
    Desarrollo <strong>front-end</strong> y <strong>back-end</strong>, incluyendo frameworks como <strong>Bootstrap</strong> y <strong>Node.js</strong>.
    También realicé cursos mediante la plataforma de <strong>Platzi</strong> para ampliar mis conocimientos de informática general de forma autodidacta.
        </p>
        {/* <p>
          <strong>● ENSEÑANZA MEDIA</strong><br />
          dic. 2015<br />
          Liceo Betzabé de Hormozábal de Alarcón, Santiago, Chile<br />
          Egresada de la enseñanza media completa.
        </p> */}
      </div>

      <div className={styles.buttonWrapper}>
        {/* Link a la ruta /certificaciones */}
        <Link to="/certificaciones" className={styles.button}>
          Certificaciones
        </Link>
        <Link to="/" className={styles.button}>
          Volver a la página principal
        </Link>
      </div>
    </div>
  );
}

export default Estudios;
