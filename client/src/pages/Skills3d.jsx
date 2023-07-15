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
import styles from "../styles/Skills3d.module.css";

const Sphere = ({ position, size, children }) => {
  const meshRef = useRef();
  useFrame(() => (meshRef.current.rotation.y += 0.01));

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 20, 20]} />
      <meshBasicMaterial color="#C56E33" wireframe />
      <Html center style={{ width: '110px', height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {children}
      </Html>
    </mesh>
  );
};

const Skills3d = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [cameraPosition, setCameraPosition] = useState([0, 0, 200]);
  const [spheresSize, setSpheresSize] = useState([]);

  useEffect(() => { 
    const handleResize = () => { 
      const aspect = window.innerWidth / window.innerHeight; 
      const zoom = window.innerWidth < 1000 ? 100 : 50; 
      cameraRef.current.aspect = aspect; 
      cameraRef.current.zoom = zoom; 
      cameraRef.current.updateProjectionMatrix(); 
    }; 
 
    window.addEventListener("resize", handleResize); 
    return () => window.removeEventListener("resize", handleResize); 
  }, []); 

  const spheres = [
    {
      id:"1",
      icon: <FaNodeJs size="100%" color="#e6b17e" />,
      position: [0, 0, 0],
    },
    {
      id: "2",
      icon: <BiLogoPostgresql size="100%" color="#e6b17e" />,
      position: [7, 0, 0],
    },
    {
      id: "3",
      icon: <TbBrandJavascript size="100%" color="#e6b17e" />,
      position: [-7, 0, 0],
    },
    {
      id: "4",
      icon: <FaReact size="100%" color="#e6b17e" />,
      position: [3.5, 0, 0],
    },
    {
      id: "5",
      icon: <FaCss3Alt size="100%" color="#e6b17e" />,
      position: [-3.5, 0, 0],
    },
    {
      id: "6",
      icon: <FaDatabase size="100%" color="#e6b17e" />,
      position: [-7, 3.5, 0],
    },
    {
      id: "7",
      icon: <FaHtml5 size="100%" color="#e6b17e" />,
      position: [3.5, 3.5, 0],
    },
    {
      id: "8",
      icon: <SiRedux size="100%" color="#e6b17e" />,
      position: [0, 3.5, 0],
    },
    {
      id: "9",
      icon: <BsGit size="100%" color="#e6b17e" />,
      position: [-3.5, 3.5, 0],
    },
    {
      id: "10",
      icon: <FaGithubSquare size="100%" color="#e6b17e" />,
      position: [7, 3.5, 0],
    },
  ];

  const adjustedSpheres = spheres.map((sphere, index) => {
    const adjustedPosition = [...sphere.position];
    let adjustedSize;
    if (windowSize <= 1000) {
      adjustedSize = 0.1;
      const spacing = windowSize / spheres.length;
      adjustedPosition[0] = (index % 2) * spacing - windowSize / 2 + spacing / 2; // Ajusta posición en X
      adjustedPosition[1] = Math.floor(index / 2) * spacing - windowSize / 2 + spacing / 2; // Ajusta posición en Y
    } else {
      adjustedSize = 1.5;
      adjustedPosition[0] = (index % 5) * 3 - 6; // Ajusta posición en X
      adjustedPosition[1] = -Math.floor(index / 5) * 3 + 3; // Ajusta posición en Y
    }
    return { ...sphere, position: adjustedPosition, size: adjustedSize };
  });

/*   const adjustedSpheres = spheres.map((sphere, index) => {
    const adjustedPosition = [...sphere.position];
    let adjustedSize;
    if (windowSize <= 1000) {
      adjustedSize = windowSize <= 1000 ? 0.1 : 1.5;
      const spacing  = windowSize / spheres.length;
      adjustedPosition[1] = index * spacing  - windowSize / 2 + spacing  / 2;
    } else {
      adjustedSize = 1.5;
    }
    return { ...sphere, position: adjustedPosition, size: adjustedSize };
  }); */
  
  return (
    <div className={styles.skills}>
      <Canvas
        orthographic
        camera={{ zoom: 50, position: cameraPosition }}
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
export default Skills3d;