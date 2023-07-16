import * as THREE from "three";
import React, { useEffect, useRef } from 'react';

const Skill = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const geometry = new THREE.CylinderGeometry(1, 1, 1, 6);
    const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });

    const textureLoader = new THREE.TextureLoader();
    const texture1 = textureLoader.load('../assets/html.jpg');
    const texture2 = textureLoader.load('../assets/html.jpg');
    const texture3 = textureLoader.load('../assets/html.jpg');
    const texture4 = textureLoader.load('../assets/html.jpg');
    const texture5 = textureLoader.load('../assets/html.jpg');
    const texture6 = textureLoader.load('../assets/html.jpg');

    const materials = [
      new THREE.MeshBasicMaterial({ map: texture1 }),
      new THREE.MeshBasicMaterial({ map: texture2 }),
      new THREE.MeshBasicMaterial({ map: texture3 }),
      new THREE.MeshBasicMaterial({ map: texture4 }),
      new THREE.MeshBasicMaterial({ map: texture5 }),
      new THREE.MeshBasicMaterial({ map: texture6 }),
    ];

    const hexagon = new THREE.Mesh(geometry, materials);
    scene.add(hexagon);

    const animate = () => {
      requestAnimationFrame(animate);
      hexagon.rotation.x += 0.01;
      hexagon.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
    };
  }, []);

  return <div ref={canvasRef} />;
};

export default Skill;
