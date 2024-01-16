/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useFBX,
  useAnimations,
  Html,
  useProgress,
} from "@react-three/drei";
import CanvasLoader from "./Loader";

interface AvatarProps {
  isMobile: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ isMobile }) => {
  const avatar = useFBX("./Avatar/Waving.fbx");
  const animations = avatar.animations;
  const { actions, names } = useAnimations(animations, avatar);

  useEffect(() => {
    actions[names[0]]?.play();
  }, [actions, names]);

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="white" />
      <ambientLight intensity={0.5} />
      <group>
        <primitive
          object={avatar}
          scale={isMobile ? 0.8 : 1.7}
          position={isMobile ? [0.1, 0, 0] : [0.5, -1.5, 0]}
          // rotation={[0, 0, 0]}
          // position-y={-1.3}
        />
      </group>
    </mesh>
  );
};

useFBX.preload("./Avatar/Waving.fbx");

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
      {/* camera={
        isMobile
          ? { position: [0, 3.5, 4], fov: 40 }
          : { position: [0, 3.5, 4], fov: 40, near: 2 }
      } */}
      <Suspense fallback={<CanvasLoader />}>
        {/* <OrbitControls enableZoom={false} maxPolarAngle={2} minPolarAngle={1} /> */}
        <Avatar isMobile={isMobile} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default AvatarCanvas;
