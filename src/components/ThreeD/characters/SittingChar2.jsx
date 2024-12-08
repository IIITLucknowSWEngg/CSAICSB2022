/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function SittingChar2(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./models/sittingChar2.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    actions?.sitting?.play();
  });
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={[6, 6, 6]}
      position={[-2, 2, -42]}
    >
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="Girl_Body_Geo"
            geometry={nodes.Girl_Body_Geo.geometry}
            material={materials.Girl01_Body_MAT1}
            skeleton={nodes.Girl_Body_Geo.skeleton}
          />
          <skinnedMesh
            name="Girl_Brows_Geo"
            geometry={nodes.Girl_Brows_Geo.geometry}
            material={materials.Girl01_Brows_MAT1}
            skeleton={nodes.Girl_Brows_Geo.skeleton}
          />
          <skinnedMesh
            name="Girl_Eyes_Geo"
            geometry={nodes.Girl_Eyes_Geo.geometry}
            material={materials.Girl01_Eyes_MAT1}
            skeleton={nodes.Girl_Eyes_Geo.skeleton}
          />
          <skinnedMesh
            name="Girl_Mouth_Geo"
            geometry={nodes.Girl_Mouth_Geo.geometry}
            material={materials.Girl01_Mouth_MAT1}
            skeleton={nodes.Girl_Mouth_Geo.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/sittingChar2.glb");