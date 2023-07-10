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

const Skills = () => {
  return (
    <div>
      <Canvas className={styles.canvas}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls autoRotate />
        <meshStandardMaterial color="#C56E33" wireframe />
        <mesh position={[0, 0, 0]}>
          <Html center>
            <FaNodeJs size={70} color="#e6b17e" />
          </Html>
        </mesh>
        <mesh position={[1, 1, 1]}>
          <Html center>
            <FaReact size={70} color="#e6b17e" />
          </Html>
        </mesh>
        <mesh position={[-1, -1, -1]}>
          <Html center>
            <FaCss3Alt size={70} color="#e6b17e" />
          </Html>
        </mesh>
        <mesh position={[1.5, 2, 0]}>
          <Html center>
            <FaDatabase size={70} color="#e6b17e" />
          </Html>
        </mesh>
        <mesh position={[-1.5, -2, 0]}>
          <Html center>
            <FaHtml5 size={70} color="#e6b17e" />
          </Html>
        </mesh>
        {/* <Stars /> */}
      </Canvas>
    </div>
  );
};

export default Skills;
