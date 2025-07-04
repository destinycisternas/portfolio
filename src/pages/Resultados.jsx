import { useLocation, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { FaSearch, FaMicrophone, FaCamera } from "react-icons/fa";
import styles from "../styles/Resultados.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Resultados() {
  const query = useQuery();
  const navigate = useNavigate();
  const q = query.get("q") || "";
  const tipo = query.get("tipo") || "Todo";

  const handleSearch = (e) => {
    e.preventDefault();
    const newQuery = e.target.elements.searchQuery.value;
    navigate(`/resultados?q=${newQuery}&tipo=${tipo}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtros = ["Todo", "Web", "Proyectos", "Experiencia", "Certificaciones"];

  const Informacion = [
    // Web
    {
      titulo: "GitHub - Destiny Cisternas",
      url: "https://github.com/destinycisternas",
      descripcion: "Repositorio personal con proyectos de desarrollo web.",
      tipo: "Web",
    },
    {
      titulo: "LinkedIn - Destiny Cisternas",
      url: "https://linkedin.com/in/destinycisternas",
      descripcion: "Perfil profesional con experiencia, estudios y conocimientos.",
      tipo: "Web",
    },

    // Proyectos
    {
      titulo: "Netflix-Clone - Destiny Cisternas",
      tecnologias: ["React", "Html", "CSS Modules", "Bootstrap"],
      imgSrc: "/IconosProyectos/netflix-clone.png",
      url: "https://github.com/destinycisternas/netflix-clone",
      descripcion:
        "Clon de Netflix que permite buscar  películas y series, con diseño responsivo y funcionalidades básicas de navegación.",
      tipo: "Proyectos",
    },
    {
      titulo: "Pokedex - Destiny Cisternas",
      tecnologias: ["React", "Hooks", "Html", "Css", "JavaScript"],
      imgSrc: "/IconosProyectos/pokedex.jpeg",
      url: "https://github.com/destinycisternas/pokedex-react",
      descripcion:
        "Aplicación que consume la API pública de Pokémon para mostrar información detallada de cada criatura, con filtros y paginación.",
      tipo: "Proyectos",
    },

    // Certificaciones
    {
      titulo: "Diploma Scrum Master",
      href: "/Certificaciones/diploma-scrum-master.pdf",
      imgSrc: "/Certificaciones/iconos/icon-scrum-master.jpeg",
      alt: "Diploma Scrum Master",
      tipo: "Certificaciones",
    },
    {
      titulo: "Diploma React Avanzado",
      href: "/Certificaciones/diploma-react-avanzado.pdf",
      imgSrc: "/Certificaciones/iconos/icon-react-avanzado.jpeg",
      alt: "Diploma React Avanzado",
      tipo: "Certificaciones",
    },
    {
      titulo: "Coursera TypeScript",
      href: "/Certificaciones/Coursera-LU0SERLZ1HR0.pdf",
      imgSrc: "/Certificaciones/iconos/icon-coursera-typescript.jpeg",
      alt: "Coursera TypeScript",
      tipo: "Certificaciones",
    },
    {
      titulo: "Diploma GitHub",
      href: "/Certificaciones/diploma-gitgithub.pdf",
      imgSrc: "/Certificaciones/iconos/icon-GitHub.jpeg",
      alt: "Diploma GitHub",
      tipo: "Certificaciones",
    },
    {
      titulo: "Diploma Introducción AI",
      href: "/Certificaciones/diploma-introduccion-ai.pdf",
      imgSrc: "/Certificaciones/iconos/icon-Introduccion-AI.jpeg",
      alt: "Diploma Introducción AI",
      tipo: "Certificaciones",
    },

    // Experiencia
    {
      titulo: "Deliboo - Práctica Profesional",
      empresa: "Deliboo",
      puesto: "Práctica Profesional - Analista Programador",
      duracion: "Abril 2024 - Junio 2024",
      descripcion: `Participación en el análisis de requisitos para diseñar soluciones técnicas. Desarrollo y mantenimiento de aplicaciones internas. `,
      href: "/experiencia",
      imgSrc: "/deliboo.jpg",
      alt: "Logo Deliboo",
      tipo: "Experiencia",
    },
  ];

  const InformacionFiltrada =
    tipo === "Todo" ? Informacion : Informacion.filter((p) => p.tipo === tipo);

  return (
    <div className={styles.resultadosContainer}>
      <div className={styles.topBar}>
        <div className={styles.leftTop}>
          <Link to="/">
            <img src="/DestinyLogoGoogle.png" alt="Destiny" className={styles.logo} />
          </Link>

          <form onSubmit={handleSearch} className={styles.searchForm}>
            <div className={styles.searchInput}>
              <input
                type="text"
                name="searchQuery"
                defaultValue={q}
                className={styles.inputField}
                autoFocus
              />
              <button type="button" className={styles.btnBuscar} aria-label="Buscar por voz">
                <FaMicrophone />
              </button>
              <button type="button" className={styles.btnBuscar} aria-label="Buscar con cámara">
                <FaCamera />
              </button>
              <button type="submit" className={styles.btnBuscar} aria-label="Buscar">
                <FaSearch />
              </button>
            </div>
          </form>
        </div>

        <div className={styles.rightTop}>
          <img
            src="/googleapps.jpg"
            alt="Google Apps"
            className={styles.googleapps}
            style={{ marginRight: "10px", cursor: "pointer" }}
          />
          <Link to="/">
            <img src="/destiny_formal.jpeg" alt="Perfil" className={styles.avatar} />
          </Link>
        </div>
      </div>

      <div className={styles.filtrosContainer}>
        {filtros.map((t) => (
          <button
            key={t}
            onClick={() => navigate(`/resultados?q=${q}&tipo=${t}`)}
            className={`${styles.filtroBtn} ${tipo === t ? styles.activo : ""}`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Web */}
      {InformacionFiltrada.filter(p => p.tipo === "Web").map((p, i) => (
        <div key={`web-${i}`} className={styles.resultadoSeparator}>
          <a href={p.url} className={styles.resultadoWeb} target="_blank" rel="noreferrer">
            <div className={styles.webIcon}>
              {p.url.includes("github.com") && <FaGithub className={styles.githubIcon} />}
              {p.url.includes("linkedin.com") && <FaLinkedin className={styles.linkedinIcon} />}
            </div>
            <div className={styles.webContent}>
              <h5 className={styles.resultadoTitle}>{p.titulo}</h5>
              <p className={styles.resultadoUrl}>{p.url}</p>
              <p className={styles.resultadoDescription}>{p.descripcion}</p>
            </div>
          </a>
        </div>
      ))}

      {/* Proyectos */}
      {InformacionFiltrada.filter(p => p.tipo === "Proyectos").map((p, i) => (
        <div key={`proyecto-${i}`} className={styles.resultadoSeparator}>
          <div className={styles.ImagenProyecto}>
            <img src={p.imgSrc} alt={p.alt || p.titulo} />
            <div className={styles.infoProyecto}>
              <a href={p.url} className={styles.resultadoTitle} target="_blank" rel="noreferrer">
                {p.titulo}
              </a>
              {p.tecnologias && (
                <div className={styles.tecnologias}>
                  {p.tecnologias.map((tec, idx) => (
                    <span key={idx} className={styles.tecnologiaChip}>
                      {tec}
                    </span>
                  ))}
                </div>
              )}
              <p className={styles.resultadoUrl}>{p.url}</p>
              <p className={styles.resultadoDescription}>{p.descripcion}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Experiencia */}
      {InformacionFiltrada.filter(p => p.tipo === "Experiencia").map((p, i) => (
        <div key={`cert-${i}`} className={styles.resultadoSeparator}>
          <a href={p.href} className={styles.ImagenProyecto} target="_blank" rel="noreferrer">
            <img src={p.imgSrc} alt={p.alt} />
            <div>
              <h5 className={styles.resultadoTitle}>{p.titulo}</h5>
              {/*<p className={styles.resultadoUrl}>{p.href}</p>*/}
              <p className={styles.resultadoDescription}>{p.descripcion}</p>
            </div>
          </a>
        </div>
      ))}

      {/* Certificaciones */}
      {InformacionFiltrada.filter(p => p.tipo === "Certificaciones").map((p, i) => (
        <div key={`cert-${i}`} className={styles.resultadoSeparator}>
          <a href={p.href} className={styles.ImagenProyecto} target="_blank" rel="noreferrer">
            <img src={p.imgSrc} alt={p.alt} />
            <div>
              <h5 className={styles.resultadoTitle}>{p.titulo}</h5>
              <p className={styles.resultadoUrl}>{p.href}</p>
              <p className={`${styles.resultadoDescription} ${styles.verCertificado}`}>Ver certificado</p>
            </div>
          </a>
        </div>
      ))}

      <div className={styles.btnContainer}>
        <Link to="/">
          <button className={styles.btnVolver}>Ir a página principal</button>
        </Link>
      </div>
    </div>
  );
}

export default Resultados;
