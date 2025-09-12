import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { ErrorBoundary } from "react-error-boundary";
import CanvasLoader from "../Loader";

import { useLoader } from "@react-three/fiber";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

const BigBush = () => {
  // Load material first
  const materials = useLoader(MTLLoader, "./MoreNature/OBJ/SmallTreeWithLeave.mtl");
  materials.preload();

  // Load obj and apply materials
  const obj = useLoader(OBJLoader, "./MoreNature/OBJ/SmallTreeWithLeave.obj", (loader) => {
    loader.setMaterials(materials);
  });

  return (
    <primitive
      object={obj}
      scale={0.5}       // adjust as needed
      position-y={0}
    />
  );
};

function ModelErrorFallback() {
  return <div className="text-red-500">⚠️ Failed to load Earth model</div>;
}

const BigBushCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ background: "transparent" }}
    >
      {/* Lights */}
      <ambientLight intensity={0.4} /> {/* soft global light */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      {/* Model with suspense/error boundary */}
      <Suspense fallback={<CanvasLoader />}>
        <ErrorBoundary FallbackComponent={ModelErrorFallback}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <BigBush />
        </ErrorBoundary>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BigBushCanvas;
