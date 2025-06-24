import styles from "../styles/header.module.css";

function Header() {
  return (
    <header className={styles.header}>

      <nav className={styles.navContainer}>
        {/* Links si quieres activarlos más adelante */}
        <div className={styles.links}>
          {/* <a href="/">SobreDestiny</a>
              <a href="/">Proyectos</a> */}
        </div>

        <div className={styles.linksRight}>
          <a
            href="https://www.linkedin.com/in/destinycisternas"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/destinycisternas"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <img
            src="/googleapps.jpg"
            alt="Google Apps"
            className={styles.icon}
          />
          <img
            src="/destiny.jpg"
            alt="Avatar"
            className={styles.avatar}
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
