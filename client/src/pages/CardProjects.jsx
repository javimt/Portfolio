import styles from "../styles/CardProjects.module.css";
import { FaLink } from "react-icons/fa";

const CardProjects = ({ image, name, description, technologies, link, isExpanded, toggleExpanded }) => {

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <p 
          className={`${styles.description} ${isExpanded ? styles.expanded : styles.collapsed}`}
          onClick={toggleExpanded}
        >{description}</p>
        <p className={styles.tecnologies}>{technologies}</p>
        <div className={styles.linkContainer}>
          <a href={link} className={styles.link}>
            <FaLink className={styles.logo} /> Show</a>
        </div>
      </div>
      <img src={image} alt={name} className={styles.image} height="100%" />
    </div>
  );
};

export default CardProjects;
