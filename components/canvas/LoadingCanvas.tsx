"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useAnimations,
  useFBX,
  useGLTF,
  Sparkles,
  ContactShadows,
  MeshReflectorMaterial,
  MeshRefractionMaterial,
  RenderTexture,
  Effects,
} from "@react-three/drei";
import CanvasLoader from "./Loader";
import {
  EffectComposer,
  Bloom,
  ToneMapping,
  SMAA,
} from "@react-three/postprocessing";

const Loading = ({ isMobile }: any) => {
  // const avatar = useFBX("./hologram_fbx/source/Hologram_01.fbx");
  const group = useRef(null);
  // const avatar = useGLTF("./hologram/scene.gltf");
  const avatar = useGLTF("./loading/scene.gltf");
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
        scale={isMobile ? 0.5 : 1}
        position-y={0}
        position-x={0}
        rotation-y={0}
        rotation-x={0}
      />
    </group>
  );
};

useGLTF.preload("./loading/scene.gltf");

const LoadingCanvas = () => {
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
      gl={{ preserveDrawingBuffer: false }}
      flat
      linear
    >
      <Suspense fallback={<CanvasLoader />}>
        <Loading isMobile={isMobile} />
        <EffectComposer>
          <Bloom
            intensity={5.5}
            luminanceThreshold={0}
            luminanceSmoothing={0.025}
            mipmapBlur={true}
          />
          <ToneMapping middleGrey={1.0} maxLuminance={64} />
          <SMAA />
        </EffectComposer>
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default LoadingCanvas;
