import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Resultados() {
  const query = useQuery();
  const navigate = useNavigate();
  const q = query.get("q");

  // Función para volver a buscar
  const handleSearch = (e) => {
    e.preventDefault();
    const newQuery = e.target.elements.searchQuery.value;
    navigate(`/resultados?q=${newQuery}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mt-4">
      {/* Barra de búsqueda superior */}
      <form onSubmit={handleSearch} className="mb-4">
        <div className="d-flex align-items-center gap-2">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png"
            alt="Google Logo"
            width={92}
            height={30}
          />
          <input
            type="text"
            name="searchQuery"
            defaultValue={q}
            className="form-control"
            style={{ maxWidth: 600 }}
          />
          <button type="submit" className="btn btn-outline-primary">
            Buscar
          </button>
        </div>
      </form>

      {/* Resultados simulados */}
      <div style={{ maxWidth: "800px" }}>
        <p className="text-muted mb-4">Aproximadamente 5 resultados (0.42 segundos)</p>

        <div className="mb-4">
          <a href="https://github.com/destinycisternas" className="h5 text-primary d-block" target="_blank" rel="noreferrer">
            GitHub - Destiny Cisternas
          </a>
          <p className="text-success mb-1">https://github.com/destinycisternas</p>
          <p>Repositorio personal con proyectos de desarrollo web.</p>
        </div>

        <div className="mb-4">
          <a href="https://linkedin.com/in/destinycisternas" className="h5 text-primary d-block" target="_blank" rel="noreferrer">
            LinkedIn - Destiny Cisternas
          </a>
          <p className="text-success mb-1">https://linkedin.com/in/destinycisternas</p>
          <p>Perfil profesional con experiencia, estudios y conocimientos.</p>
        </div>

        <div className="mb-4">
          <a href="#" className="h5 text-primary d-block">
            Sobre mí – Portafolio Destiny
          </a>
          <p className="text-success mb-1">https://destiny.com/sobremi</p>
          <p>Conoce quién soy, mis motivaciones y el camino en la tecnología.</p>
        </div>

        <div className="mb-4">
          <a href="#" className="h5 text-primary d-block">
            Proyectos – Portafolio Destiny
          </a>
          <p className="text-success mb-1">https://destiny.com/proyectos</p>
          <p>Aplicaciones, sitios web, y soluciones creadas con pasión y lógica.</p>
        </div>
      </div>
    </div>
  );
}

export default Resultados;
