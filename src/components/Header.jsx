import styles from "../styles/header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          src="/DestinyLogoGoogle.jpeg"
          alt="Logo Destiny Google"
          style={{
            width: '300px',
            height: 'auto',
          }}
        />
      </div>

      <div className={styles.navContainer}>
        <div className={styles.links}>
          <a href="/">SobreDestiny </a>
          <a href="/">Proyectos </a>
        </div>

        <div className={styles.links1}>
          <a 
            href="https://www.linkedin.com/in/destinycisternas"
            target="_blank"
            rel="noopener noreferrer"
          > Linkedin
          </a>
          <a
            href="https://github.com/destinycisternas"
            target="_blank"
            rel="noopener noreferrer"
          >GitHub
          </a>
          <img
            src="/public/googleapps.jpg"
            alt="googleapps"
            className={styles.googleapps}
          />
          <img
            src="/public/destiny.jpg"
            alt="Avatar"
            className={styles.avatar}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
