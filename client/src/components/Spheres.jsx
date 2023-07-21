import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";

const Spheres = ({ position, size, children }) => {
  const meshRef = useRef();
  const { size: canvasSize } = useThree();

  //let adjustedSize = (size * canvasSize.width) / 1000;
  //let adjustedPosition = position.map((p) => (p * canvasSize.width) / 1000);

  //let windowSize = window.innerWidth < 1000 ? window.innerWidth : 1000;

  const minDimension = Math.max(canvasSize.width, canvasSize.height);
  let adjustedSize = (size * minDimension) / 1000;
  let adjustedPosition = position.map((p) => (p * minDimension) / 1000);

  if (canvasSize.width <= 1000) {
    adjustedSize = (size * minDimension) / 1000;
    adjustedPosition = position.map((p) => (p * minDimension) / 1000);
  } 

  const iconSize = minDimension * 0.1;

  useFrame(() => (meshRef.current.rotation.y += 0.01));

  return (
    <mesh ref={meshRef} position={adjustedPosition}>
      <sphereGeometry args={[adjustedSize, 12, 12]} />
      <meshBasicMaterial color="#C56E33" wireframe wireframeLinecap="0.1" wireframeLinewidth={0.1}/>
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
