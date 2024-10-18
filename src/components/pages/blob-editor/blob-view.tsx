"use client";

import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  useAnimations,
  OrbitControls,
  PivotControls,
  Center,
} from "@react-three/drei";
import * as THREE from "three";
import EditorSidebar from "./editor-sidebar";
import { useModelViewSettingsStore } from "@/stores/modelViewSettingsStore";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";

const Model: React.FC = () => {
  const { pivotControls } = useModelViewSettingsStore();

  const group = useRef<THREE.Group>(null);

  // Load the GLTF model
  const { scene, materials, animations } = useGLTF(
    // "/testmodel/red_spaceship.glb"
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
        child.material.toneMapped = false;
      }
    });
  });

  return (
    <Center>
      <PivotControls
        anchor={[0, 0, 0]}
        depthTest={false}
        visible={pivotControls}
        disableRotations={!pivotControls}
        disableAxes={!pivotControls}
        disableScaling={!pivotControls}
        disableSliders={!pivotControls}
      >
        <primitive ref={group} object={scene} />
      </PivotControls>
    </Center>
  );
};

const BlobView: React.FC = () => {
  const { orbitControls, backgroundColor } = useModelViewSettingsStore();

  useEffect(() => {
    console.log(backgroundColor);
  }, [backgroundColor]);

  return (
    <>
      {/* <Leva hideCopyButton={true} /> */}
      <EditorSidebar />
      <Canvas gl={{ antialias: true }}>
        {backgroundColor !== "transparent" && (
          <color args={[backgroundColor]} attach={"background"} />
        )}

        {/* postprocessing */}
        <EffectComposer>
          <Bloom mipmapBlur intensity={0.5} />
        </EffectComposer>

        {/* lights */}
        <ambientLight intensity={0.2} />
        <directionalLight position={[0, 10, 0]} intensity={3} />

        {/* front lights */}
        {/* <directionalLight position={[-10, 10, 10]} intensity={3} />
        <directionalLight position={[0, 10, 10]} intensity={3} />
        <directionalLight position={[10, 10, 10]} intensity={3} /> */}

        {/* back lights */}
        {/* <directionalLight position={[-10, 10, -10]} intensity={3} />
        <directionalLight position={[0, 10, -10]} intensity={3} />
        <directionalLight position={[10, 10, -10]} intensity={3} /> */}

        <OrbitControls makeDefault enabled={orbitControls} />
        <Model />
      </Canvas>
    </>
  );
};

export default BlobView;
