import styles from "../styles/NavBar.module.css";
import { Link } from "react-scroll";
import { useState } from "react";
import { GiHamburgerMenu, GiCrossedBones } from "react-icons/gi";
import image from "../assets/mi logo3.png";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/" >
          <img src={image} alt="Logo" />
        </Link>
      </div>
      <div className={`${styles.links} ${showMenu ? styles.show : ""}`}>
        <Link
          to="about"
          smooth={true}
          duration={1500}
          className={styles.link}
        >
          About
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={1500}
          className={styles.link}
        >
          Projects
        </Link>
        <Link
          to="/"
          smooth={true}
          duration={1500}
          className={styles.link}
        >
          Home
        </Link>
        <Link
          to="skills3d"
          smooth={true}
          duration={1500}
          className={styles.link}
        >
          Skills
        </Link>
      </div>
      <div className={styles.menuIcon} onClick={handleMenu}>
        {showMenu ? (
          <GiCrossedBones color="#E6B17E" />
        ) : (
          <GiHamburgerMenu color="#E6B17E" />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
