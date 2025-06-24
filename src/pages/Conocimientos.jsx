import { Link } from "react-router-dom";
import styles from "../styles/Conocimientos.module.css";

const niveles = [
  { tech: "JavaScript", filled: 3 },
  { tech: "HTML5", filled: 3 },
  { tech: "CSS", filled: 3 },
  { tech: "React", filled: 3 },
  { tech: "SQL", filled: 2 },
  { tech: "Nest.js", filled: 2 },
  { tech: "Node.js", filled: 2 },
  { tech: "Git y GitHub", filled: 3 },
];

function renderDots(filled) {
  return (
    <div className={styles.dots}>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={index < filled ? styles.dotFilled : styles.dotEmpty}
        >
          ●
        </span>
      ))}
    </div>
  );
}


function Conocimientos() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Competencias Profesionales</h1>

      <p className={styles.description}>
        Especialización en lenguajes de programación como JavaScript, HTML5 y CSS,
        utilizando librerías y frameworks destacados como Bulma, FullCalendar, jQuery,
        Bootstrap y DataTables. Experiencia en el manejo de bases de datos y diseño
        eficiente de soluciones tecnológicas.
      </p>

      <section className={styles.card}>
        <h2 className={styles.subtitle}>Nivel Técnico en Tecnologías</h2>
        {niveles.map(({ tech, filled }) => (
          <div key={tech} className={styles.techItem}>
            <span>{tech}</span>
            {renderDots(filled)}
          </div>
        ))}
      </section>

      <section className={styles.card}>
        <h2 className={styles.subtitle}>Habilidades Blandas y de Gestión</h2>
        <ul className={styles.softSkills}>
          <li>Trabajo en Equipo: Colaboración efectiva con equipos multidisciplinarios y diferentes departamentos.</li>
          <li>Comunicación efectiva: Capacidad para transmitir ideas técnicas de manera clara a audiencias no técnicas.</li>
          <li>Resolución de Problemas: Enfoque creativo y eficiente para abordar desafíos complejos.</li>
          <li>Adaptabilidad: Rapidez en la adopción de nuevas tecnologías y manejo de entornos cambiantes.</li>
          <li>Pensamiento Crítico: Evaluación fundamentada de información para tomar decisiones estratégicas.</li>
          <li>Atención al detalle: Precisión en tareas técnicas y revisión de código.</li>
          <li>Planificación y Organización: Gestión eficaz de proyectos y tareas para cumplir con plazos y objetivos.</li>
        </ul>
      </section>

      <section className={styles.card}>
        <h2 className={styles.subtitle}>Idiomas</h2>
        <p>Español e Inglés, nivel avanzado: Conversacional y Escrito</p>
      </section>

      <div className={styles.buttonWrapper}>
        <Link to="/" className={styles.button}>
          Volver a la página principal
        </Link>
      </div>
    </div>
  );
}

export default Conocimientos;
