import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Decal,Float,OrbitControls,Preload,useTexture } from "@react-three/drei"
import { ErrorBoundary } from "react-error-boundary";


import CanvasLoader from "../Loader"

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0,0,0.05]}/>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1,1]}/>
        <meshStandardMaterial 
        color='#fff8eb'
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading/>
            <Decal
            position={[0,0,1]}
            rotation={[2 * Math.PI,0,6.25]}
             map={decal}
             flatShading
             />
      </mesh>
    </Float>
  )
}

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
         <p>⚠️ Failed to load 3D model of a ball.</p> 
       
    </div>
  );
}


const BallCanvas = ({icon}) => {

      {/* 
    <ErrorBoundary FallbackComponent={({ error }) => (
      <div style={{ textAlign: "center", color: "red" }}>
        <p>⚠️ Failed to load 3D model of a ball</p>
        <p>{error.message}</p>
        <p>Image URL: {icon}</p>
        <img src={icon} alt="Failed texture" style={{ maxWidth: "100px" }} />
      </div>
    )}>
        <Canvas
          frameloop="demand"
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}/>
            <Ball imgUrl={icon}/>
          </Suspense>

          <Preload all />
        </Canvas>
    </ErrorBoundary>
        */}
  return(
    <div>
        <img src={icon} alt="tech icon" style={{ maxWidth: "100px" }} />
    </div>

  )
}

export default BallCanvas
