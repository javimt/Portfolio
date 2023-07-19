import { useRef, useState, useEffect, useMemo } from "react";
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
import styles from "../styles/Skills3d.module.css";
import Spheres from "../components/Spheres";

const Skills3d = () => {
  const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight});
  const cameraRef = useRef();

  useEffect(() => {
    
    const handleResize = () => {
      if (cameraRef.current) {
      const aspect = window.innerWidth / window.innerHeight;
      const zoom = window.innerWidth < 1000 ? 100 : 50;
      cameraRef.current.aspect = aspect;
      cameraRef.current.zoom = zoom;
      cameraRef.current.updateProjectionMatrix();
      setWindowSize(window.innerWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const iconSize = windowSize.width * 0.1;

  const spheres = useMemo(() => [
    {
      id: "1",
      icon: <FaNodeJs size={iconSize} color="rgb(42, 94, 94)" />,
      position: [0, 0, 0],
    },
    {
      id: "2",
      icon: <BiLogoPostgresql size={iconSize} color="rgb(42, 94, 94)" />,
      position: [7, 0, 0],
    },
    {
      id: "3",
      icon: <TbBrandJavascript size={iconSize} color="rgb(42, 94, 94)" />,
      position: [-7, 0, 0],
    },
    {
      id: "4",
      icon: <FaReact size={iconSize} color="rgb(42, 94, 94)" />,
      position: [3.5, 0, 0],
    },
    {
      id: "5",
      icon: <FaCss3Alt size={iconSize} color="rgb(42, 94, 94)" />,
      position: [-3.5, 0, 0],
    },
    {
      id: "6",
      icon: <FaDatabase size={iconSize} color="rgb(42, 94, 94)" />,
      position: [-7, 3.5, 0],
    },
    {
      id: "7",
      icon: <FaHtml5 size={iconSize} color="rgb(42, 94, 94)" />,
      position: [3.5, 3.5, 0],
    },
    {
      id: "8",
      icon: <SiRedux size={iconSize} color="rgb(42, 94, 94)" />,
      position: [0, 3.5, 0],
    },
    {
      id: "9",
      icon: <BsGit size={iconSize} color="rgb(42, 94, 94)" />,
      position: [-3.5, 3.5, 0],
    },
    {
      id: "10",
      icon: <FaGithubSquare size={iconSize} color="rgb(42, 94, 94)" />,
      position: [7, 3.5, 0],
    },
  ], [windowSize])

  const adjustedSpheres = spheres.map((sphere, index) => {
    const adjustedPosition = [...sphere.position];
    let adjustedSize;
    // Calculamos el espacio entre las esferas en función del tamaño de la ventana.
    const spacing =
      windowSize <= 1000 ? setWindowSize / (spheres.length / 2) : 3;
    if (windowSize <= 1000) {
console.log("putas esferas")
      adjustedSize = windowSize / 100;
      // Calculamos la posición en el eje X e Y en función del índice de la esfera.
      adjustedPosition[0] =
        (index % 2) * spacing - windowSize / 2 + spacing / 2;
      adjustedPosition[1] =
        Math.floor(index / 2) * spacing - windowSize / 2 + spacing / 2;
    } else {
      adjustedSize = 1.5;
      // Si la ventana es más grande, las esferas se colocan en una cuadrícula de 2x5.
      adjustedPosition[0] = (index % 5) * 3.2 - 6.5;
      adjustedPosition[1] = Math.floor(index / 5) * 4 - 2;
    }
    return { ...sphere, position: adjustedPosition, size: adjustedSize };
  });

  return (
    <div className={styles.skills}>
      <Canvas
        orthographic
        camera={{ zoom: 50, position: [0, 0, 200] }}
        className={styles.canvas}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          enablePan={false}
        />

        {adjustedSpheres.map((sphere) => (
          <Spheres key={sphere.id} position={sphere.position} size={sphere.size}>
            {sphere.icon}
          </Spheres>
        ))}
      </Canvas>
    </div>
  );
};
export default Skills3d;
