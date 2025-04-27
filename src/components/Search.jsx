import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar hook de navegación
import styles from "../styles/search.module.css";
import { FaSearch } from "react-icons/fa"; // Icono de lupa

function Search() {
  const [query, setQuery] = useState(""); // Guardar el término de búsqueda
  const navigate = useNavigate(); // Usar el hook de navegación

  // Función para redirigir a la página de resultados
  const redirectToResults = () => {
    // Pasar siempre el parámetro "q", puede ser vacío o predeterminado
    const searchQuery = query.trim() === "" ? "destiny" : query; // Usamos "destiny" como valor predeterminado
    navigate(`/resultados?q=${encodeURIComponent(searchQuery)}`); // Redirigir a la página de resultados
  };

  // Manejar el evento de clic en la barra de búsqueda
  const handleInputClick = () => {
    redirectToResults(); // Redirige automáticamente a resultados cuando hace clic en la barra
  };

  // Manejar el evento de clic en el botón de búsqueda
  const handleSubmit = (e) => {
    e.preventDefault();
    redirectToResults(); // Redirige a resultados cuando hace clic en "Buscar con Google"
  };

  return (
    <section className={styles.search}>
      <img
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
        alt="Logo Google"
        width={200}
      />

      <div className={styles.inputContainer}>
        <FaSearch className={styles.iconLeft} />
        <input
          className={styles.input}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Actualizar el valor de la búsqueda
          placeholder="Buscar en Google"
          onClick={handleInputClick} // Redirigir cuando se hace clic en la barra de búsqueda
        />
        <div className={styles.rightIcons}>
          <img 
            src="public/IconVoz.jpg" 
            alt="Voz" 
            className={styles.iconRight} 
          />
          <img 
            src="public/IconImagen.jpg" 
            alt="Buscar Imagen" 
            className={styles.iconImage} 
          />
        </div>
      </div>

      <div>
        <button className={styles.button} onClick={handleSubmit}>Buscar con Google</button>
        <button className={styles.button}>Voy a tener suerte</button>
      </div>
    </section>
  );
}

export default Search;
