"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import CanvasLoader from "./Loader";
import {
  EffectComposer,
  Bloom,
  ToneMapping,
  SMAA,
} from "@react-three/postprocessing";

const Hologram = ({ isMobile }: any) => {
  // const avatar = useFBX("./hologram_fbx/source/Hologram_01.fbx");
  const group = useRef(null);
  // const avatar = useGLTF("./hologram/scene.gltf");
  const avatar = useGLTF("./robot_playground/scene-draco.gltf");
  const animations = avatar.animations;
  const { actions, names } = useAnimations(animations, group);
  // const texture = useLoader(RGBELoader, "/textures/royal_esplanade_1k.hdr");

  useEffect(() => {
    actions[names[0]]?.reset().fadeIn(0.5).play();
  }, []);

  return (
    <group ref={group}>
      <hemisphereLight intensity={1} />
      <ambientLight intensity={1} />
      <primitive
        object={avatar.scene}
        scale={isMobile ? 0.8 : 0.5}
        position-y={isMobile ? -0.8 : -0.5}
        position-x={-0.1}
        rotation-y={0}
        rotation-x={0.3}
      />
    </group>
  );
};

useGLTF.preload("@/robot_playground/scene-draco.gltf");
// useGLTF.preload("./hologram/scene.gltf");
// useFBX.preload("./hologram_fbx/source/Hologram_01.fbx");

const HologramCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1280px)");

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
      shadows
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 25,
        near: 0.1,
        far: 100,
        position: [0, 0, 6],
      }}
      className="h-[500px] w-[500px]"
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Hologram isMobile={isMobile} />

        <EffectComposer>
          <Bloom
            intensity={1}
            luminanceThreshold={0}
            luminanceSmoothing={0.9}
            // mipmapBlur={true}
          />
          <SMAA />
          <ToneMapping middleGrey={1.0} maxLuminance={64} />
        </EffectComposer>

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default HologramCanvas;
