"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  useAnimations,
  OrbitControls,
  PivotControls,
} from "@react-three/drei";
import { Leva, useControls } from "leva";
import * as THREE from "three";
import EditorSidebar from "./editor-sidebar";

const Model: React.FC = () => {
  const group = useRef<THREE.Group>(null);

  // Load the GLTF model
  const { scene, materials, animations } = useGLTF(
    "/testmodel/buster_drone.glb"
  );

  // Handle animations
  const { actions } = useAnimations(animations, group);

  React.useEffect(() => {
    // Play the animation if it exists
    if (actions) {
      actions[Object.keys(actions)[0]]?.play();
    }
  }, [actions]);

  useFrame(() => {
    // Ensure depthWrite is enabled for all mesh materials to fix transparency issues
    scene.traverse((child: any) => {
      if (child.isMesh) {
        child.material.depthWrite = true; // Ensures depth writing to avoid transparency
        child.material.transparent = false; // Disable transparency if not needed
      }
    });
  });

  const controls = useControls({ position: 0 });

  return (
    <PivotControls
      anchor={[0, 0, 0]}
      depthTest={false}
      visible={false}
      disableRotations={true}
    >
      <primitive ref={group} object={scene} position-x={controls.position} />
    </PivotControls>
  );
};

const BlobView: React.FC = () => {
  return (
    <>
      <Leva hideCopyButton={true} />
      <EditorSidebar />
      <Canvas gl={{ antialias: true }}>
        <OrbitControls makeDefault />
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 10]} intensity={3} />
        <Model />
      </Canvas>
    </>
  );
};

export default BlobView;
