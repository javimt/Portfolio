import {AiOutlineLine} from "react-icons/ai";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h1>About me</h1>
      <p className={styles.line}><AiOutlineLine size="100px"/></p>
      <p className={styles.text}>
        Siempre he estado inmerso en el mundo de la tecnología. Inicialmente
        trabajé como administrador durante 3 años en un negocio de tecnología dando atencion al cliente, 
        vendiendo dispositivos mobiles, tablets y accesorios.
        Despues de esto emprendí con dos almacenes de tecnología donde daba asesoria a mis clientes,
        reparaba y vendía dispositivos móbiles y tablets, accesorios y mas, durante 9 años. Asi que tengo amplia experiencia
        en atencion al cliente y generando estrategias de ventas.
        Luego me empecé a inclinar por el desarrollo de software y ahora soy Full Stack Web Developer, mundo en el cual
        estoy completamente inmerso en este momento, y que cada vez me apasiona más. Soy muy disciplinado, enfocado, con un caracter fuerte y con una mentalidad
        emprendedora. Siempre busco crecer en todos los ambitos de mi vida y que tambien lo hagan las personas que me rodean.
      </p>
    </div>
  )
}

export default About
