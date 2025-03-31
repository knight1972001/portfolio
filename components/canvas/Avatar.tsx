"use client";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  useAnimations,
} from "@react-three/drei";
import CanvasLoader from "./Loader";

interface AvatarProps {
  isMobile: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ isMobile }) => {
  const avatar = useGLTF("./Avatar/Waving-draco.glb");
  const { animations } = avatar; // Extract animations from GLTF
  const { actions, names } = useAnimations(animations, avatar.scene); // Use scene for animations

  useEffect(() => {
    // Play the first animation if it exists
    if (names[0]) {
      actions[names[0]]?.play();
    }
  }, [actions, names]);

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="white" />
      <ambientLight intensity={0.5} />
      <group>
        <primitive
          object={avatar.scene} // Use scene, not the full GLTF object
          scale={isMobile ? 0.8 : 1.7}
          position={isMobile ? [0.1, 0, 0] : [0.5, -1.5, 0]}
        />
      </group>
    </mesh>
  );
};

const AvatarCanvas: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 2, 4], fov: 40 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Avatar isMobile={isMobile} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

// Preload the GLB file
useGLTF.preload("/Avatar/Waving-draco.glb");

export default AvatarCanvas;
