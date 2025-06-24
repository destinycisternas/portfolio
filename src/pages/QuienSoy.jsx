import { Link } from "react-router-dom";
import styles from "../styles/QuienSoy.module.css";

function QuienSoy() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>¿Quién Soy?</h1>

      <img
        src="/destiny_formal.jpeg"
        alt="Foto Destiny Cisternas"
        className={styles.photo}
      />
      <p className={styles.description}>
        Profesional egresada de <strong>INACAP</strong>, con sólida formación en desarrollo de software y competencias avanzadas en programación y soporte informático.
        Cuento con conocimientos especializados en frameworks y tecnologías como <strong>JavaScript</strong>, <strong>SQL</strong>, <strong>CSS</strong>, <strong>Nest.js</strong>, entre otros,
        además de certificaciones que respaldan mis habilidades.
      </p>
      <p className={styles.description}>
        Tengo experiencia en el <strong>desarrollo de aplicaciones web</strong>, <strong>diseño y gestión de bases de datos</strong>, y en la aplicación
        de metodologías ágiles como <strong>Scrum</strong> para asegurar la entrega eficiente y de alta calidad.
        Me apasiona <strong>resolver problemas complejos</strong> y estoy comprometida con el <strong>aprendizaje continuo</strong>.
      </p>
      <p className={styles.description}>
        Actualmente, estoy disponible para trabajar en modalidad <strong>presencial</strong> o <strong>híbrida</strong>, y busco contribuir en un entorno
        profesional <strong>desafiante</strong> y <strong>dinámico</strong>.

      </p>

      <Link to="/" className={styles.button}>
        Volver a la página principal
      </Link>
    </div>
  );
}

export default QuienSoy;
