import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import styles from "../styles/Contacts.module.css";

const Contacts = () => {
  return (
    <div className={styles.container}>
      <a href="https://github.com/javimt">
        <FaGithub className={styles.icon} />
      </a>
      <a href="https://www.linkedin.com/in/javier-g-033349246/">
        <FaLinkedin className={styles.icon} />
      </a>
      <a href="https://api.whatsapp.com/send?phone=573114617436&text=hola">
        <FaWhatsapp className={styles.icon} />
      </a>
    </div>
  );
};

export default Contacts;
