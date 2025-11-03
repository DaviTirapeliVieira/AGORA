// import { Canvas, useFrame } from "@react-three/fiber";
// import { useGLTF, OrbitControls } from "@react-three/drei";
// import { useRef, useEffect } from "react";

// function RoboHeadModel({ mouse }) {
//   const { scene } = useGLTF("/face.glb");
//   const modelRef = useRef();

//   useEffect(() => {
//     if (scene) {
//       scene.scale.set(1.5, 1.5, 1.5);
//       scene.position.set(0, -0.5, 0);
//     }
//   }, [scene]);

//   useFrame(() => {
//     if (modelRef.current) {
//       modelRef.current.rotation.y = (mouse.current.x - 0.5) * 1.2;
//       modelRef.current.rotation.x = (mouse.current.y - 0.5) * 1.2;
//     }
//   });

//   return <primitive ref={modelRef} object={scene} />;
// }

// export default function RoboHead() {
//   const mouse = useRef({ x: 0.5, y: 0.5 });

//   const handleMouseMove = (e) => {
//     mouse.current.x = e.clientX / window.innerWidth;
//     mouse.current.y = e.clientY / window.innerHeight;
//   };

//   return (
//     <div
//       onMouseMove={handleMouseMove}
//       style={{
//         width: "100vw",
//         height: "100vh",
//         backgroundColor: "#111",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Canvas
//         camera={{ position: [0, 0, 5], fov: 35 }} // 📸 Recuo da câmera aqui
//       >
//         <ambientLight intensity={1.2} />
//         <directionalLight position={[2, 2, 5]} intensity={1} />
//         <RoboHeadModel mouse={mouse} />
//         {/* OrbitControls pode ser removido se travado */}
//         <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
//       </Canvas>
//     </div>
//   );
// }
