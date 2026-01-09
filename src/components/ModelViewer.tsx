'use client';

import * as React from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, ContactShadows, Html } from '@react-three/drei';
import { Suspense, useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';

function Model({ url, onModelLoaded }: { url: string; onModelLoaded?: (box: THREE.Box3) => void }) {
  const { scene } = useGLTF(url);
  const groupRef = useRef<THREE.Group>(null);
  
  React.useEffect(() => {
    if (!groupRef.current || !scene) return;
    
    // Enable shadows on the model
    scene.traverse((child: any) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    
    // Ensure all transforms are updated
    scene.updateMatrixWorld(true);
    
    // Calculate bounding box of the entire scene (including all children and their transforms)
    const box = new THREE.Box3().setFromObject(scene);
    
    // Get the center of the bounding box
    const center = new THREE.Vector3();
    box.getCenter(center);
    
    // Get the size for verification
    const size = new THREE.Vector3();
    box.getSize(size);
    
    // Calculate offset to center the model at origin
    // We need to move the scene by the negative of its center
    const offsetX = -center.x;
    const offsetY = -center.y;
    const offsetZ = -center.z;
    
    // Store original position in case scene already has a position
    const originalX = scene.position.x || 0;
    const originalY = scene.position.y || 0;
    const originalZ = scene.position.z || 0;
    
    // Apply offset to center the model (add to existing position)
    scene.position.set(originalX + offsetX, originalY + offsetY, originalZ + offsetZ);
    
    // Update transforms after repositioning
    scene.updateMatrixWorld(true);
    
    // Recalculate bounding box after centering
    const centeredBox = new THREE.Box3().setFromObject(scene);
    
    // Verify the model is now centered
    const newCenter = new THREE.Vector3();
    centeredBox.getCenter(newCenter);
    
    console.log('Original center:', center);
    console.log('Offset applied:', { x: offsetX, y: offsetY, z: offsetZ });
    console.log('New center (should be ~0,0,0):', newCenter);
    console.log('Model size:', centeredBox.getSize(new THREE.Vector3()));
    
    // Add scene to the group ref
    if (!groupRef.current.children.includes(scene)) {
      groupRef.current.add(scene);
    }
    
    // Notify parent component of centered model bounds
    if (onModelLoaded) {
      onModelLoaded(centeredBox);
    }
  }, [scene, onModelLoaded]);

  return <group ref={groupRef} />;
}

function CameraSetup({ modelBox }: { modelBox: THREE.Box3 | null }) {
  const { camera, set } = useThree();
  const initializedRef = useRef(false);
  
  useEffect(() => {
    if (!modelBox || !camera || initializedRef.current) return;
    
    // Calculate the size of the bounding box
    const size = modelBox.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    
    // Calculate camera distance to fit the model in view with padding
    const fov = (camera as THREE.PerspectiveCamera).fov * (Math.PI / 180);
    const distance = (maxDim / 2) / Math.tan(fov / 2) * 1.8; // 1.8x padding to show full model
    
    // Position camera at an angle to show the model nicely
    const angle = Math.PI / 4; // 45 degrees
    camera.position.set(
      distance * Math.sin(angle),
      distance * 0.6, // Slightly above
      distance * Math.cos(angle)
    );
    
    // Look at the origin where the model is centered
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
    
    initializedRef.current = true;
  }, [modelBox, camera, set]);

  return null;
}

interface ModelViewerProps {
  url?: string;
  className?: string;
  autoRotate?: boolean;
  enableControls?: boolean;
}

export default function ModelViewer({ 
  url = '/models/Untitled.glb', 
  className = '',
  autoRotate = true,
  enableControls = true 
}: ModelViewerProps) {
  const [modelBox, setModelBox] = React.useState<THREE.Box3 | null>(null);
  const controlsRef = useRef<any>(null);
  
  const handleModelLoaded = useCallback((box: THREE.Box3) => {
    setModelBox(box);
    
    // Small delay to ensure controls are initialized
    setTimeout(() => {
      if (controlsRef.current) {
        // Reset controls to look at center (where model is centered)
        controlsRef.current.target.set(0, 0, 0);
        controlsRef.current.update();
      }
    }, 200);
  }, []);
  
  return (
    <div className={`relative w-full h-full ${className}`}>
      <Canvas 
        camera={{ position: [5, 5, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full"
        dpr={[1, 2]}
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <directionalLight position={[-5, 5, -5]} intensity={0.5} />
        <pointLight position={[0, 10, 0]} intensity={0.3} />

        {/* Camera setup based on model bounds */}
        <CameraSetup modelBox={modelBox} />

        {/* Environment */}
        <Suspense fallback={
          <Html center>
            <div className="text-muted-foreground text-sm">Loading model...</div>
          </Html>
        }>
          <Environment preset="city" />
          <Model url={url} onModelLoaded={handleModelLoaded} />
          <ContactShadows 
            position={[0, -2, 0]} 
            opacity={0.4} 
            scale={10} 
            blur={2} 
            far={4.5} 
          />
        </Suspense>

        {/* Controls */}
        {enableControls && (
          <OrbitControls 
            ref={controlsRef}
            enableDamping 
            dampingFactor={0.05}
            autoRotate={autoRotate}
            autoRotateSpeed={1.0}
            target={[0, 0, 0]} // Always orbit around the center
            enablePan={false}
            enableZoom={true}
            minPolarAngle={Math.PI / 6} // Allow more vertical rotation range
            maxPolarAngle={Math.PI - Math.PI / 6}
            minAzimuthAngle={-Infinity}
            maxAzimuthAngle={Infinity}
            // Calculate min/max distance based on model size
            minDistance={modelBox ? Math.max(...modelBox.getSize(new THREE.Vector3())) * 1.2 : 2}
            maxDistance={modelBox ? Math.max(...modelBox.getSize(new THREE.Vector3())) * 4 : 10}
          />
        )}
      </Canvas>
      
      {/* Loading state is handled by Suspense */}
    </div>
  );
}

// Preload the model
if (typeof window !== 'undefined') {
  try {
    useGLTF.preload('/models/Untitled.glb');
  } catch (e) {
    // Model will load on demand if preload fails
  }
}
