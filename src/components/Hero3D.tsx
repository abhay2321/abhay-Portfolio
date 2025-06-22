
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Text3D, Float } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const FloatingGeometry = ({ position, color, geometry }: { position: [number, number, number], color: string, geometry: 'sphere' | 'box' }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        {geometry === 'sphere' ? (
          <sphereGeometry args={[0.5, 32, 32]} />
        ) : (
          <boxGeometry args={[1, 1, 1]} />
        )}
        <meshStandardMaterial color={color} />
      </mesh>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} color="#3b82f6" intensity={0.5} />
      
      {/* Floating geometric shapes */}
      <FloatingGeometry position={[-3, 2, -2]} color="#3b82f6" geometry="sphere" />
      <FloatingGeometry position={[3, -1, -1]} color="#8b5cf6" geometry="box" />
      <FloatingGeometry position={[-2, -2, -3]} color="#06b6d4" geometry="sphere" />
      <FloatingGeometry position={[2, 3, -2]} color="#ec4899" geometry="box" />
      
      {/* Main central sphere */}
      <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[1, 64, 64]} position={[0, 0, 0]}>
          <meshStandardMaterial 
            color="#1e293b" 
            metalness={0.8} 
            roughness={0.2}
            emissive="#0f172a"
            emissiveIntensity={0.1}
          />
        </Sphere>
      </Float>
      
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
};

export const Hero3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <Scene3D />
      </Canvas>
    </div>
  );
};
