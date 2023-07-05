import styles from "../styles/NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">
          <img src="ruta_del_logo.png" alt="Logo" />
        </Link>
      </div>
      <div className={styles.links}>
        <Link to="/about" className={styles.link}>
          About
        </Link>
        <Link to="/projects" className={styles.link}>
          Projects
        </Link>
        <Link to="/home" className={styles.link}>
          Home
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
