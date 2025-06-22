
import { Canvas } from '@react-three/fiber';
import { Box, Text, OrbitControls } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

interface ProjectCard3DProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  demo: string;
  github: string;
}

const Card3D = ({ isHovered }: { isHovered: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <Box 
      ref={meshRef} 
      args={[2, 1.2, 0.1]} 
      position={[0, 0, 0]}
      rotation={isHovered ? [0.1, 0.1, 0] : [0, 0, 0]}
    >
      <meshStandardMaterial 
        color="#1e293b" 
        metalness={0.5} 
        roughness={0.3}
        emissive="#0f172a"
        emissiveIntensity={isHovered ? 0.2 : 0.1}
      />
    </Box>
  );
};

export const ProjectCard3D: React.FC<ProjectCard3DProps> = ({ title, description, tech, image, demo, github }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-full h-80 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 3], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} />
          <Card3D isHovered={isHovered} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 p-6 space-y-4 h-full flex flex-col">
        <div className="relative overflow-hidden mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-32 object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed flex-1">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs text-blue-300"
            >
              {t}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4 pt-2">
          <a
            href={demo}
            className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
          >
            <span>Live Demo</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a
            href={github}
            className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors text-sm font-medium"
          >
            <span>GitHub</span>
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
