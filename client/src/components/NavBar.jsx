import styles from "../styles/NavBar.module.css";
import { Link } from "react-scroll";
import { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu, GiCrossedBones } from "react-icons/gi";
import image from "../assets/mi logo3.png";
import Contacts from "./Contacts";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <Link to="navbar" smooth={true} duration={1900}>
          <img src={image} alt="Logo" />
        </Link>
      </div>
      <div ref={menuRef} className={`${styles.links} ${showMenu ? styles.show : ""}`}>
        <Link to="about" smooth={true} duration={1900} className={styles.link}>
          About me
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={1900}
          className={styles.link}
        >
          Projects
        </Link>
        <Link to="/" smooth={true} duration={1800} className={styles.link}>
          Home
        </Link>
        <Link
          to="skills3d"
          smooth={true}
          duration={1900}
          className={styles.link} 
        >
          Skills
        </Link>
      </div>
      <div className={styles.menuIcon} onClick={handleMenu}>
        {showMenu ? (
          <GiCrossedBones className={styles.iconshow} color="#c56d33" />
        ) : (
          <GiHamburgerMenu className={styles.iconshow} color="#c56d33" />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
