import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import styles from "../styles/Contacts.module.css";

const Contacts = () => {
  return (
    <div className={styles.container}>
      <a href="https://github.com/tu-usuario">
        <FaGithub className={styles.icon} />
      </a>
      <a href="https://linkedin.com/in/tu-usuario">
        <FaLinkedin className={styles.icon} />
      </a>
      <a href="https://wa.me/tu-número">
        <FaWhatsapp className={styles.icon} />
      </a>
    </div>
  );
};

export default Contacts;
