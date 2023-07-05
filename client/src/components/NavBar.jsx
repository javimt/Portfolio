import styles from "../styles/NavBar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react"
import { GiHamburgerMenu, GiCrossedBones } from 'react-icons/gi';
import image from "../assets/mi logo1.png"

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={image} alt="Logo" />
        </Link>
      </div>
      <div className={`${styles.links} ${showMenu ? styles.show : ''}`}>
        <Link to="/about" className={styles.link}>
          About
        </Link>
        <Link to="/projects" className={styles.link}>
          Projects
        </Link>
        <Link to="/home" className={styles.link}>
          Home
        </Link>
        <Link to="/skills" className={styles.link}>
          Skills
        </Link>
      </div>
      <div className={styles.menuIcon} onClick={handleMenuClick}>
        {showMenu ? <GiCrossedBones color="#E6B17E" /> : <GiHamburgerMenu color="#E6B17E" />}
      </div>
    </nav>
  );
};

export default NavBar;
