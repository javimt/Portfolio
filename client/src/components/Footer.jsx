import { FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { BsGit } from "react-icons/bs";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <>
    <div className={styles.footer}>
      <div className={styles.icons}>
        <a href="" className={styles.a}>
          <FaLinkedin color="#C56E33" />
        </a>
        <a href="" className={styles.a}>
          <BsGit color="#C56E33"/>
        </a>
        <a href="" className={styles.a}>
          <FaWhatsappSquare color="#C56E33" />
        </a>
      </div>
      <div className={styles.by}>
        <p> Copyright © 2023. </p>
        <p className={styles.p}> by Javier Plata. All right reserved</p>
      </div>
    </div>
</>
  );
};

export default Footer;
