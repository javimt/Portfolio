import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";

const Spheres = ({ position, size, children }) => {
  const meshRef = useRef();
  const { size: canvasSize } = useThree();

  const adjustedSize = (size * canvasSize.width) / 1000;
  const adjustedPosition = position.map((p) => (p * canvasSize.width) / 1000);
  const iconSize = canvasSize.width * 0.1;

  useFrame(() => (meshRef.current.rotation.y += 0.01));

  return (
    <mesh ref={meshRef} position={adjustedPosition}>
      <sphereGeometry args={[adjustedSize, 12, 12]} />
      <meshBasicMaterial color="#C56E33" wireframe />
      <Html
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
