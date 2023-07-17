import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Icon = ({ icon }) => {
  const meshRef = useRef();

  useFrame(() => (meshRef.current.rotation.y += 0.01));

  return (
    <mesh ref={meshRef}>
      {icon}
    </mesh>
  );
};

export default Icon;
