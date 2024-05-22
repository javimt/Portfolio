import CardProjects from "./CardProjects";
import image1 from "../assets/img 1.jpeg";
import image2 from "../assets/imagepf.png";
import styles from "../styles/Projects.module.css";
import { AiOutlineLine } from "react-icons/ai";

const Projects = () => {

  const projects = [
    {
      name: "CarMania",
      description:
        "Carmania es una app muy dinamica para vender autos nuevos y usados, donde los usuarios pueden buscar autos por marca, modelo, precios y tipos de carroceria.",
      image: image2,
      link: "https://carmania-henry.netlify.app/",
    },
    {
      name: "Furnished Apartments Medellin",
      description:
        "Furnished Apartments Medellin es una app muy intuitiva y facil de usar. cuenta con diferentes filtros y un mapa interactivo",
      image: image1,
      link: "https://www.medellinfurnishedapartment.com",
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
