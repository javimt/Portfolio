import {AiOutlineLine} from "react-icons/ai";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h1>About me</h1>
      <p className={styles.line}><AiOutlineLine size="100px"/></p>
      <p className={styles.text}>
        Siempre he estado inmerso en el mundo de la tecnología.
        Soy Full Stack Web Developer, mundo en el cual
        estoy completamente inmerso en este momento, y que cada vez me apasiona más. Soy muy disciplinado, enfocado, con un caracter fuerte y con una mentalidad
        emprendedora. Siempre busco crecer en todos los ambitos de mi vida y que tambien lo hagan las personas que me rodean.
      </p>
    </div>
  )
}

export default About
