import styles from "../styles/footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Chile</p>

      <div className={styles.bottomLinks}>
        <div className={styles.links2}>
          <a href="/">¿Quién Soy?</a>
          <a href="/">Experiencia</a>
          <a href="/">Estudios</a>
        </div>

        <div className={styles.links3}>
          <a href="/">Conocimientos</a>
          <a
            href="/CURRICULUM 2025 ABRIL.pdf"
            download="CURRICULUM-DestinyCisternas.pdf"
          >
            Curriculum
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
