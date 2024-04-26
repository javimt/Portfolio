import CardProjects from "./CardProjects";
import image1 from "../assets/rent apartments.jpeg";
import image2 from "../assets/imagepf.png";
import styles from "../styles/Projects.module.css";
import { AiOutlineLine } from "react-icons/ai";

const Projects = () => {
  const projects = [
    {
      name: "CarMania",
      description:
        "Carmania es una app muy dinamica para vender autos nuevos y usados, donde los usuarios pueden buscar autos por marca, modelo, precios y tipos de carroceria. Ésta app cuenta con un dashboard para usuario donde solo será visible al momento que el usuario se registre; y uno para el administrador. Ademas cuenta con una pasarela de pago. Tecnologias: JavaScript, Mondo Db, Express, React, Redux, Css, Tailwind",
      image: image2,
      link: "https://carmania-henry.netlify.app/",
    },
    {
      name: "Furnished Apartments Medellin",
      description:
        "Furnished Apartments Medellin es una app muy intuitiva y facil de usar, donde los usuarios pueden dar click a cualquiera de las imagenes del carrousel del home y seran redirigidos al detalle del apartamento en el cual podran ver las comodidades del mismo, ademas de poder generar la renta directamente desde allí, o, pueden dirigirse a la seccion For rent para ver un listado de apartamentos los cuales van a estar 'Available' o 'Not available' en caso de que ya se haya generado una renta. Tambien cuenta con un dashboard de admin donde solo pueden ingresar el admin el cual puede solo crear apartamentos y ver el listado de usuarios registrados; y el superAdmin quien aparte de poder crear apartamentos, podrá cambiar los roles de los usuarios. Tecnologias: Js, Node, PostgreSQL, Sequelize, React, Redux y Tailwind",
      image: image1,
      link: "https://rent-apartments-medellin.up.railway.app/",
    },
  ];

  return (
    <div className={styles.projects}>
      <h1>Projects</h1>
      <p className={styles.line}>
        <AiOutlineLine size="100px" />
      </p>
      {projects.map((p, index) => (
        <CardProjects
          key={index}
          name={p.name}
          description={p.description}
          image={p.image}
          link={p.link}
        />
      ))}
    </div>
  );
};

export default Projects;
