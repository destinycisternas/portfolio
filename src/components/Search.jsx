import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../styles/search.module.css";
import { FaSearch, FaMicrophone, FaCamera } from "react-icons/fa";

function Search() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const randomRoutes = [
    "/certificaciones",
    "/conocimientos",
    "/estudios",
    "/experiencia",
    "/quien-soy"
  ];

  const redirectToRandomRoute = () => {
    const randomIndex = Math.floor(Math.random() * randomRoutes.length);
    const randomPath = randomRoutes[randomIndex];
    navigate(randomPath);
  };

  const redirectToResults = () => {
    const searchQuery = query.trim() === "" ? "Destiny" : query;
    navigate(`/resultados?q=${encodeURIComponent(searchQuery)}`);
  };

  const handleInputClick = () => {
    redirectToResults();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    redirectToResults();
  };

  return (
    <section className={styles.search}>
      {/* Logo personalizado */}
      <div className={styles.logo}>
        <img
          src="/DestinyLogoGoogle.png"
          alt="Logo Destiny Google"
          className={styles.logoImg}
        />
      </div>

      <form onSubmit={handleSubmit} className={styles.inputContainer}>
        <FaSearch className={styles.iconLeft} />
        <input
          className={styles.input}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar en Destiny"
          onClick={handleInputClick}
        />
        <div className={styles.rightIcons}>
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

      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handleSubmit}>
          Buscar con Destiny
        </button>
        <button className={styles.button} onClick={redirectToRandomRoute}>
          Voy a tener suerte
        </button>
      </div>
    </section>
  );
}

export default Search;
