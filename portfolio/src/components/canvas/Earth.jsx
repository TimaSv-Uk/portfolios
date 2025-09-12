import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { ErrorBoundary } from "react-error-boundary";
import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    <primitive
      object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
    />
  );
};

function ModelErrorFallback({ error }) {
  console.error("3D Model Loading Failed:", error);
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      color: 'red'
    }}>
        {/* <p>⚠️ Failed to load 3D model.</p> */}
       
    </div>
  );
}


const EarthCanvas = () => {
  return (
    <ErrorBoundary FallbackComponent={ModelErrorFallback}>
      <Canvas
        shadows
        frameloop="demand"
        camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
        gl={{ preserveDrawingBuffer: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
        </Suspense>

        <Preload all />
      </Canvas>
    </ErrorBoundary>
  );
};

export default EarthCanvas;
