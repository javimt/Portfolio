import { useRef } from 'react';
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
import {TbBrandJavascript} from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import {BiLogoPostgresql} from "react-icons/bi";
import styles from "../styles/Skills.module.css";

  const Sphere = ({ position, children }) => {
  const meshRef = useRef();
  useFrame(() => (meshRef.current.rotation.y += 0.01));
   return (
    <mesh ref={meshRef} position={position} className={styles.mesh}>
      <sphereGeometry args={[1.5, 20, 20]} />
      <meshStandardMaterial color="#C56E33" wireframe />
      <Html center>
        {children}
      </Html>
    </mesh>
  );
};

 const Skills = () => {
  return (
    <div className={styles.skills}>
      <Canvas orthographic camera={{ zoom: 50, position: [0, 0, 200] }} className={styles.canvas}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={false} enableRotate={false} enablePan={false}/>
         <Sphere position={[0, 0, 0]}>
          <FaNodeJs size={100} color="#e6b17e" />
        </Sphere>
         <Sphere position={[7, 0, 0]}>
          <BiLogoPostgresql size={100} color="#e6b17e" />
        </Sphere>
         <Sphere position={[-7, 0, 0]}>
          <TbBrandJavascript size={100} color="#e6b17e" />
        </Sphere>
         <Sphere position={[3.5, 0, 0]}>
          <FaReact size={100} color="#e6b17e" />
        </Sphere>
         <Sphere position={[-3.5, 0, 0]}>
          <FaCss3Alt size={100} color="#e6b17e" />
        </Sphere>
         <Sphere position={[-7, 3.5, 0]}>
          <FaDatabase size={100} color="#e6b17e" />
        </Sphere>
         <Sphere position={[3.5, 3.5, 0]}>
          <FaHtml5 size={100} color="#e6b17e" />
        </Sphere>
         <Sphere position={[0, 3.5, 0]}>
          <SiRedux size={100} color="#e6b17e" />
        </Sphere>
         <Sphere position={[-3.5, 3.5, 0]}>
          <BsGit size={100} color="#e6b17e" />
        </Sphere>
         <Sphere position={[7, 3.5, 0]}>
          <FaGithubSquare size={100} color="#e6b17e" />
        </Sphere>
      </Canvas>
    </div>
  );
};
 export default Skills;
