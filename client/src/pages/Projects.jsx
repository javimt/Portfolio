import CardProjects from "./CardProjects";
import image1 from "../assets/imagepi.png";
import image2 from "../assets/imagepf.png";
import styles from "../styles/Projects.module.css";
import {AiOutlineLine} from "react-icons/ai"

const Projects = () => {
  const projects = [
    {
      name: "CarMania",
      description:
        "Carmania es una app muy dinamica e intuitiva para vender autos nuevos y usados, donde los usuarios pueden buscar autos por marca, modelo, precios y tipos de carroceria. Ésta app cuenta con un dashboard para usuario donde solo será visible al momento que el usuario se registre; y uno para el administrador. Ademas cuenta con una pasarela de pago. Tecnologias: JavaScript, Mondo Db, Express, React, Redux, Css, Tailwind",
      image: image2,
      link: "https://carmania-henry.netlify.app/home",
    },
    {
      name: "Dogs App",
      description:
        "Dogs App es SPA muy intuitiva, donde los usuarios pueden buscar perros por razas, crear nuevos perros, filtrar por temperamentos, en orden alfabetico, por peso y ademas filtrar por creados por el usuario. Tecnologias: Js, Node, Express, PostgreSQL, Sequelize, React, Redux, Css",
      image: image1,
      link: "https://my-dogs-api.netlify.app/",
    },
  ];

  return (
    <div className={styles.projects}>
    <h1>Projects</h1>
    <p className={styles.line}><AiOutlineLine size="100px"/></p>
      {projects.map((p, index) => (
        <CardProjects key={index}
        name={p.name}
        description={p.description}
        image={p.image}
        link={p.link} />
      ))}
    </div>
  );
};

export default Projects;
