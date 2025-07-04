import { Link } from "react-router-dom";
import styles from "../styles/footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Chile</p>

      <div className={styles.bottomLinks}>
        <div className={styles.links2}>
          <Link to="/quien-soy">¿Quién Soy?</Link>
          <Link to="/experiencia">Experiencia</Link>
        </div>

        <div className={styles.links3}>
          <Link to="/estudios">Estudios</Link>
          <Link to="/conocimientos">Conocimientos</Link>
          {/*<a
            href="/CURRICULUM 2025 ABRIL.pdf"
            download="CURRICULUM-DestinyCisternas.pdf"
          >
            Curriculum
          </a>*/}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
