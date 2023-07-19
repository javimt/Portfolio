import styles from "../styles/CardProjects.module.css";
import {FaLink} from "react-icons/fa";

const CardProjects = ({ image, name, description, technologies, link }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.tecnologies}>{technologies}</p>
        <a href={link} className={styles.link}>
          <FaLink className={styles.logo} color="rgb(42, 94, 94)" /> Show
        </a>
      </div>
      <img src={image} alt={name} className={styles.image} height="100%"/>
    </div>
  );
};

export default CardProjects;
