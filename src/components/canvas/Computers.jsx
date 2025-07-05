import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = React.memo(({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf", true);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={isMobile ? 512 : 1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.55 : 0.75}
        position={isMobile ? [0, -2.5, -1.5] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
});

Computers.displayName = "Computers";

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is defined (for SSR)
    if (typeof window === "undefined") return;

    // More comprehensive mobile detection
    const mediaQuery = window.matchMedia("(max-width: 640px)");

    // Set initial value
    setIsMobile(mediaQuery.matches);

    // Handler
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={isMobile ? [1, 1.5] : [1, 2]} // Lower DPR on mobile
      camera={{
        position: isMobile ? [15, 2, 4] : [20, 3, 5],
        fov: isMobile ? 28 : 25,
      }}
      gl={{
        preserveDrawingBuffer: true,
        powerPreference: "high-performance",
        antialias: false,
      }}
      performance={{ min: 0.5 }} // Lower performance threshold on mobile
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false}
          autoRotate
          autoRotateSpeed={isMobile ? 2 : 3}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default React.memo(ComputersCanvas);
