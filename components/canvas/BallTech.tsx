import {
  Decal,
  Float,
  Preload,
  View,
  useTexture,
  OrbitControls,
  PivotControls,
  TransformControls,
  PresentationControls,
} from "@react-three/drei";
import { Canvas, extend } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import CanvasLoader from "./Loader";
import useRefs from "react-use-refs";
import {
  EffectComposer,
  Bloom,
  ToneMapping,
} from "@react-three/postprocessing";

const BallTech = (props: any) => {
  // console.log(props);
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 2]} />
      <hemisphereLight intensity={1} groundColor="white" />
      <mesh castShadow receiveShadow scale={2.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#ffffff"
          polygonOffset
          polygonOffsetFactor={-10}
          flatShading
          roughness={0}
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[0, 0, 0]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ data }: any) => {
  const [
    ref,
    view1,
    view2,
    view3,
    view4,
    view5,
    view6,
    view7,
    view8,
    view9,
    view10,
    view11,
    view12,
    view13,
    view14,
    view15,
    view16,
    view17,
    view18,
    view19,
    view20,
    view21,
    view22,
    view23,
  ] = useRefs<HTMLDivElement>(null);
  // console.log(data.length);
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
    <div ref={ref} className="container">
      <div ref={view1} className={isMobile ? "view-mobile" : "view"} />
      <div ref={view2} className={isMobile ? "view-mobile" : "view"} />
      <div ref={view3} className={isMobile ? "view-mobile" : "view"} />
      <div ref={view4} className={isMobile ? "view-mobile" : "view"} />
      <div ref={view5} className={isMobile ? "view-mobile" : "view"} />
      <div ref={view6} className={isMobile ? "view-mobile" : "view"} />
      <div ref={view7} className={isMobile ? "view-mobile" : "view"} />
      <div ref={view8} className={isMobile ? "view-mobile" : "view"} />
      <div ref={view9} className={isMobile ? "view-mobile" : "view"} />
      <div ref={view10} className={isMobile ? "view-mobile" : "view"} />
      <div ref={view11} className={isMobile ? "view-mobile" : "view"} />
      <div ref={view12} className={isMobile ? "view-mobile" : "view"} />
      <div ref={view13} className={isMobile ? "view-mobile" : "view"} />
      <div ref={view14} className={isMobile ? "view-mobile" : "view"} />
      <div ref={view15} className={isMobile ? "view-mobile" : "view"} />
      <div ref={view16} className={isMobile ? "view-mobile" : "view"} />
      <div ref={view17} className={isMobile ? "view-mobile" : "view"} />
      <div ref={view18} className={isMobile ? "view-mobile" : "view"} />
      <div ref={view19} className={isMobile ? "view-mobile" : "view"} />
      <div ref={view20} className={isMobile ? "view-mobile" : "view"} />
      <div ref={view21} className={isMobile ? "view-mobile" : "view"} />
      <div ref={view22} className={isMobile ? "view-mobile" : "view"} />
      <div ref={view23} className={isMobile ? "view-mobile" : "view"} />

      <Canvas eventSource={ref} className="canvas">
        <Suspense fallback={<CanvasLoader />}>
          <View track={view1}>
            <PresentationControls>
              <BallTech imgUrl={`/tech/${data[0].icon}`} />
            </PresentationControls>
          </View>
        </Suspense>
        <Suspense fallback={<CanvasLoader />}>
          <View track={view2}>
            <PresentationControls>
              <BallTech imgUrl={`/tech/${data[1].icon}`} />
            </PresentationControls>
          </View>
        </Suspense>
        <Suspense fallback={<CanvasLoader />}>
          <View track={view3}>
            <PresentationControls>
              <BallTech imgUrl={`/tech/${data[2].icon}`} />
            </PresentationControls>
          </View>
        </Suspense>
        <Suspense fallback={<CanvasLoader />}>
          <View track={view4}>
            <PresentationControls>
              <BallTech imgUrl={`/tech/${data[3].icon}`} />
            </PresentationControls>
          </View>
        </Suspense>
        <Suspense fallback={<CanvasLoader />}>
          <View track={view5}>
            <PresentationControls>
              <BallTech imgUrl={`/tech/${data[4].icon}`} />
            </PresentationControls>
          </View>
        </Suspense>
        <Suspense fallback={<CanvasLoader />}>
          <View track={view6}>
            <PresentationControls>
              <BallTech imgUrl={`/tech/${data[5].icon}`} />
            </PresentationControls>
          </View>
        </Suspense>
        <Suspense fallback={<CanvasLoader />}>
          <View track={view7}>
            <PresentationControls>
              <BallTech imgUrl={`/tech/${data[6].icon}`} />
            </PresentationControls>
          </View>
        </Suspense>
        <Suspense fallback={<CanvasLoader />}>
          <View track={view8}>
            <PresentationControls>
              <BallTech imgUrl={`/tech/${data[7].icon}`} />
            </PresentationControls>
          </View>
        </Suspense>
        <Suspense fallback={<CanvasLoader />}>
          <View track={view9}>
            <PresentationControls>
              <BallTech imgUrl={`/tech/${data[8].icon}`} />
            </PresentationControls>
          </View>
        </Suspense>
        <Suspense fallback={<CanvasLoader />}>
          <View track={view10}>
            <PresentationControls>
              <BallTech imgUrl={`/tech/${data[9].icon}`} />
            </PresentationControls>
          </View>
        </Suspense>
        <Suspense fallback={<CanvasLoader />}>
          <View track={view11}>
            <PresentationControls>
              <BallTech imgUrl={`/tech/${data[10].icon}`} />
            </PresentationControls>
          </View>
        </Suspense>
        <Suspense fallback={<CanvasLoader />}>
          <View track={view12}>
            <PresentationControls>
              <BallTech imgUrl={`/tech/${data[11].icon}`} />
            </PresentationControls>
          </View>
        </Suspense>
        <Suspense fallback={<CanvasLoader />}>
          <View track={view13}>
            <PresentationControls>
              <BallTech imgUrl={`/tech/${data[12].icon}`} />
            </PresentationControls>
          </View>
        </Suspense>
        <Suspense fallback={<CanvasLoader />}>
          <View track={view14}>
            <PresentationControls>
              <BallTech imgUrl={`/tech/${data[13].icon}`} />
            </PresentationControls>
          </View>
        </Suspense>
        <Suspense fallback={<CanvasLoader />}>
          <View track={view15}>
            <PresentationControls>
              <BallTech imgUrl={`/tech/${data[14].icon}`} />
            </PresentationControls>
          </View>
        </Suspense>
        <Suspense fallback={<CanvasLoader />}>
          <View track={view16}>
            <PresentationControls>
              <BallTech imgUrl={`/tech/${data[15].icon}`} />
            </PresentationControls>
          </View>
        </Suspense>
        <Suspense fallback={<CanvasLoader />}>
          <View track={view17}>
            <PresentationControls>
              <BallTech imgUrl={`/tech/${data[16].icon}`} />
            </PresentationControls>
          </View>
        </Suspense>
        <Suspense fallback={<CanvasLoader />}>
          <View track={view18}>
            <PresentationControls>
              <BallTech imgUrl={`/tech/${data[17].icon}`} />
            </PresentationControls>
          </View>
        </Suspense>
        <Suspense fallback={<CanvasLoader />}>
          <View track={view19}>
            <PresentationControls>
              <BallTech imgUrl={`/tech/${data[18].icon}`} />
            </PresentationControls>
          </View>
        </Suspense>
        <Suspense fallback={<CanvasLoader />}>
          <View track={view20}>
            <PresentationControls>
              <BallTech imgUrl={`/tech/${data[19].icon}`} />
            </PresentationControls>
          </View>
        </Suspense>
        <Suspense fallback={<CanvasLoader />}>
          <View track={view21}>
            <PresentationControls>
              <BallTech imgUrl={`/tech/${data[20].icon}`} />
            </PresentationControls>
          </View>
        </Suspense>
        <Suspense fallback={<CanvasLoader />}>
          <View track={view22}>
            <PresentationControls>
              <BallTech imgUrl={`/tech/${data[21].icon}`} />
            </PresentationControls>
          </View>
        </Suspense>
        <Suspense fallback={<CanvasLoader />}>
          <View track={view23}>
            <PresentationControls>
              <BallTech imgUrl={`/tech/${data[22].icon}`} />
            </PresentationControls>
          </View>
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default BallCanvas;
