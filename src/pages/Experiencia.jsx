import { Link } from "react-router-dom";
import styles from "../styles/Experiencia.module.css";

function Experiencia() {
  const experiencias = [
  {
    empresa: "Deliboo",
    puesto: "Práctica Profesional - Analista Programador",
    duracion: "Abril 2024 - Junio 2024",
    descripcion: `Análisis de requisitos funcionales y no funcionales, transformándolos en soluciones técnicas efectivas. 
    Participación en el desarrollo de aplicaciones internas, contribuyendo en todas las etapas del ciclo de vida del software. 
    Soporte y mantenimiento de sistemas existentes, gestionando incidencias y mejoras de funcionalidad. 
    Desarrollo de documentación técnica y guías de usuario para facilitar la capacitación y el soporte.`,
  },
   
    
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Experiencia</h1>
      {experiencias.map((exp, index) => (
        <div key={index} className={styles.card}>
          <h2 className={styles.empresa}>{exp.empresa}</h2>
          <h3 className={styles.puesto}>{exp.puesto}</h3>
          <p className={styles.duracion}>{exp.duracion}</p>
          <p className={styles.descripcion}>{exp.descripcion}</p>
        </div>
      ))}

      <div className={styles.buttonWrapper}>
        <Link to="/" className={styles.button}>
          Volver a la página principal
        </Link>
      </div>
    </div>
  );
}

export default Experiencia;
