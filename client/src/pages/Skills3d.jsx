import { useState, useEffect, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithubSquare,
} from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { BiLogoPostgresql } from "react-icons/bi";
import { AiOutlineLine } from "react-icons/ai";
import styles from "../styles/Skills3d.module.css";
import Spheres from "../components/Spheres";

const Skills3d = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize]);

  //const iconSize = windowSize.width * 0.1;

  const spheres =  [
      {
        id: "1",
        icon: <FaNodeJs color="rgb(42, 94, 94)" />,
        position: [0, 0, 0],
      },
      {
        id: "2",
        icon: <BiLogoPostgresql color="rgb(42, 94, 94)" />,
        position: [7, 0, 0],
      },
      {
        id: "3",
        icon: <TbBrandJavascript color="rgb(42, 94, 94)" />,
        position: [-7, 0, 0],
      },
      {
        id: "4",
        icon: <FaReact color="rgb(42, 94, 94)" />,
        position: [3.5, 0, 0],
      },
      {
        id: "5",
        icon: <FaCss3Alt color="rgb(42, 94, 94)" />,
        position: [-3.5, 0, 0],
      },
      {
        id: "6",
        icon: <FaDatabase color="rgb(42, 94, 94)" />,
        position: [-7, 3.5, 0],
      },
      {
        id: "7",
        icon: <FaHtml5 color="rgb(42, 94, 94)" />,
        position: [3.5, 3.5, 0],
      },
      {
        id: "8",
        icon: <SiRedux color="rgb(42, 94, 94)" />,
        position: [0, 3.5, 0],
      },
      {
        id: "9",
        icon: <BsGit color="rgb(42, 94, 94)" />,
        position: [-3.5, 3.5, 0],
      },
      {
        id: "10",
        icon: <FaGithubSquare  color="rgb(42, 94, 94)" />,
        position: [7, 3.5, 0],
      },
  ]

  const adjustedSpheres = spheres.map((sphere, index) => {
    const adjustedPosition = [...sphere.position];
    const minWindowSize = Math.min(windowSize.width, windowSize.height) / 1000;
    let adjustedSize;

    if (windowSize.width <= 1000) {
      adjustedSize = windowSize.height / 500;
      adjustedPosition[0] = 
        (index % 2 === 0 ? - 5 : 5) * (minWindowSize);  // Esto divide las esferas en dos columnas
      adjustedPosition[1] = 
        (Math.floor(index / 2) * 9 - 17) * (minWindowSize) -2 + 1.5;
    } else {
      adjustedSize = 1.5;
      adjustedPosition[0] = (index % 5) * 3.3 - 6.8;
      adjustedPosition[1] = Math.floor(index / 5) * 3.5 - 1.5;
    }

    return { ...sphere, position: adjustedPosition, size: adjustedSize };
  });

  return (
    <div className={styles.skills}>
      <h1 className={styles.title}>Skills</h1>
      <p className={styles.line}><AiOutlineLine size="100px"/></p>
      <Canvas
        orthographic
        camera={{ zoom: 50, position: [0, 0, 200] }}
        className={styles.canvas}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls
          enableZoom={true}
          enableRotate={true}
          enablePan={false}
        />

        {adjustedSpheres.map((sphere) => (
          <Spheres className={styles.sphere}
            key={sphere.id}
            position={sphere.position}
            size={sphere.size}
          >
            {sphere.icon}
          </Spheres>
        ))}
      </Canvas>
    </div>
  );
};
export default Skills3d;
