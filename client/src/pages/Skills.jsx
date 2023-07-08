import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Html } from "@react-three/drei";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import styles from "../styles/Skills.module.css";

const IconSphere = () => {
 
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#C56E33" wireframe/>
      <Html center>
        <FaNodeJs size={100} color="#e6b17e" />
      </Html>
    </mesh>
  );
};

const Skills = () => {
  return (
    <Canvas className={styles.canvas}>
      <ambientLight intensity={0.5}  />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls /* autoRotate */ />
      <IconSphere /> 
      <Stars count={1000}/>
    </Canvas>
  );
};

export default Skills;
