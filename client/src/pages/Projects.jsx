import CardProjects from "./CardProjects";
import image1 from "../assets/imagepi.png";
import image2 from "../assets/imagepf.png";
import styles from "../styles/Projects.module.css";

const Projects = () => {
  const projects = [
    {
      name: "venta de autos nuevos y usados",
      description:
        "Participé tanto en el back como en el front end de esta app: JavaScript, Mondo Db, Express, React, Redux, Css, Tailwind",
      image: image2,
      link: "https://carmania-henry.netlify.app/home",
    },
    {
      name: "api de Dogs",
      description:
        "Hice este proyecto con las siguientes tecnologias: Js, Node, Express, PostgreSQL, Sequelize, React, Redux, Css",
      image: image1,
      link: "https://my-dogs-api.netlify.app/",
    },
  ];

  return (
    <div className={styles.projects}>
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
