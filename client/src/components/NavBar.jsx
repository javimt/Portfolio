import styles from "../styles/NavBar.module.css";
import { Link } from "react-scroll";
import { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu, GiCrossedBones } from "react-icons/gi";
import image from "../assets/mi logo3.png";

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
        <Link to="navbar" smooth={true} duration={2000}>
          <img src={image} alt="Logo" />
        </Link>
      </div>

      <div
        ref={menuRef}
        className={`${styles.links} ${showMenu ? styles.show : ""}`}
      >
        <Link
          to="/"
          smooth={true}
          duration={2700}
          className={styles.link}
          activeClass={styles.active}
          spy={true}
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={2000}
          className={styles.link}
          activeClass={styles.active}
          spy={true}
        >
          About me
        </Link>
        <Link
          to="skills3d"
          smooth={true}
          duration={2000}
          className={styles.link}
          activeClass={styles.active}
          spy={true}
        >
          Skills
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={2000}
          className={styles.link}
          activeClass={styles.active}
          spy={true}
        >
          Projects
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
