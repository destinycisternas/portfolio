// src/pages/Certificaciones.jsx
import { Link } from "react-router-dom";
import styles from "../styles/Certificaciones.module.css";

function Certificaciones() {
  const certificados = [
    {
      href: "/Certificaciones/diploma-scrum-master.pdf",
      imgSrc: "/Certificaciones/iconos/icon-scrum-master.jpeg",
      alt: "Diploma Scrum Master",
    },
    {
      href: "/Certificaciones/diploma-react-avanzado.pdf",
      imgSrc: "/Certificaciones/iconos/icon-react-avanzado.jpeg",
      alt: "Diploma React Avanzado",
    },
    {
      href: "/Certificaciones/Coursera-LU0SERLZ1HR0.pdf",
      imgSrc: "/Certificaciones/iconos/icon-coursera-typescript.jpeg",
      alt: "Coursera TypeScript",
    },
    {
      href: "/Certificaciones/diploma-gitgithub.pdf",
      imgSrc: "/Certificaciones/iconos/icon-GitHub.jpeg",
      alt: "Diploma GitHub",
    },
    {
      href: "/Certificaciones/diploma-introduccion-ai.pdf",
      imgSrc: "/Certificaciones/iconos/icon-Introduccion-AI.jpeg",
      alt: "Diploma Introducción AI",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Certificaciones</h1>
      <p className={styles.subtitle}>Haz clic en una imagen para ver el certificado en PDF.</p>

      <div className={styles.grid}>
        {certificados.map(({ href, imgSrc, alt }) => (
          <a key={alt} href={href} target="_blank" rel="noopener noreferrer" title={alt}>
            <img src={imgSrc} alt={alt} />
          </a>
        ))}
      </div>

      <Link to="/" className={styles.button}>
        Volver a la página principal
      </Link>
    </div>
  );
}

export default Certificaciones;
