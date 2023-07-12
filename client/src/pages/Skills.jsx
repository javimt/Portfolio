import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
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
import styles from "../styles/Skills.module.css";

const Sphere = ({ position, size, children }) => {
  const meshRef = useRef();
  useFrame(() => (meshRef.current.rotation.y += 0.01));

  return (
    <mesh ref={meshRef} position={position} className={styles.mesh}>
      <sphereGeometry args={[size, 20, 20]} />
      <meshStandardMaterial color="#C56E33" wireframe />
      <Html center>{children}</Html>
    </mesh>
  );
};

const Skills = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const spheres = [
    {
      id:"1",
      icon: <FaNodeJs  size={100} color="#e6b17e" />,
      position: [0, 0, 0],
    },
    {
      id: "2",
      icon: <BiLogoPostgresql size={100} color="#e6b17e" />,
      position: [7, 0, 0],
    },
    {
      id: "3",
      icon: <TbBrandJavascript size={100} color="#e6b17e" />,
      position: [-7, 0, 0],
    },
    {
      id: "4",
      icon: <FaReact size={100} color="#e6b17e" />,
      position: [3.5, 0, 0],
    },
    {
      id: "5",
      icon: <FaCss3Alt size={100} color="#e6b17e" />,
      position: [-3.5, 0, 0],
    },
    {
      id: "6",
      icon: <FaDatabase size={100} color="#e6b17e" />,
      position: [-7, 3.5, 0],
    },
    {
      id: "7",
      icon: <FaHtml5 size={100} color="#e6b17e" />,
      position: [3.5, 3.5, 0],
    },
    {
      id: "8",
      icon: <SiRedux size={100} color="#e6b17e" />,
      position: [0, 3.5, 0],
    },
    {
      id: "9",
      icon: <BsGit size={100} color="#e6b17e" />,
      position: [-3.5, 3.5, 0],
    },
    {
      id: "10",
      icon: <FaGithubSquare size={100} color="#e6b17e" />,
      position: [7, 3.5, 0],
    },
  ];

  const adjustedSpheres = spheres.map((sphere, index) => {
    const adjustedPosition = [...sphere.position];
    const adjustedSize = windowSize <= 1000 ? 1 : 1.5;
    if (windowSize <= 1000) {
      const spacing  = windowSize / spheres.length;
      adjustedPosition[1] = index * spacing  - windowSize / 2 + spacing  / 2;
      adjustedPosition[0] = index * spacing  - windowSize / 2 + spacing  / 2;
    }
    return { ...sphere, position: adjustedPosition, size: adjustedSize };
  });

  return (
    <div className={styles.skills}>
      <Canvas
        orthographic
        camera={{ zoom: 50, position: [0, 0, 200] }}
        className={styles.canvas}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          enablePan={false}
        />

        {adjustedSpheres.map((sphere, index) => (
          <Sphere key={index} position={sphere.position} size={sphere.size}>
            {sphere.icon}
          </Sphere>
        ))}
      </Canvas>
    </div>
  );
};
export default Skills;
