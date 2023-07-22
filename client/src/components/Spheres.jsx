import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import styles from "../styles/Spheres.module.css"

const Spheres = ({ position, size, children }) => {
  const meshRef = useRef();
  const { size: canvasSize } = useThree();

  const maxDimension = Math.max(canvasSize.width, canvasSize.height);
  let adjustedSize = (size * maxDimension) / 1000;
  let adjustedPosition = position.map((p) => (p * maxDimension) / 1000);

  const iconSize = maxDimension * 0.1;

  useFrame(() => (meshRef.current.rotation.y += 0.01));

  return (
    <mesh ref={meshRef} position={adjustedPosition} >
      <sphereGeometry args={[adjustedSize, 12, 12]} />
      <meshBasicMaterial color="#C56E33" wireframe wireframeLinecap="0.1" wireframeLinewidth={0.1}/>
      <Html className={styles.mesh}
        center
        style={{
          width: `${iconSize}px`,
          height: `${iconSize}px`,
          fontSize: `${iconSize}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </Html>
    </mesh>
  );
};

export default Spheres;
