/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three"

export function Billboard(props) {
  const { nodes, materials } = useGLTF("./models/billboard.glb");
  const [texture] = useTexture(['./images/logo2.png']);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 1); // Repeat settings
  texture.center.set(0.5, 0.5); // Center of rotation
  texture.rotation = Math.PI // 45 degrees rotation
  return (
    <group
      {...props}
      dispose={null}
      position={[75, 10, 0]}
      rotation={[0, Math.PI / -2, 0]}
      scale={4}
    >
      <group position={[0, 4.486, 0]} scale={[0.001,0.001,0.001]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001.geometry}
          material={materials.dbl_Layer0_001}
        />
         <mesh
      castShadow
      receiveShadow
      geometry={nodes.Mesh001_1.geometry}
      material={materials.dbl_Layer0_002}
    >
      <meshStandardMaterial
        attach="material"
        map={texture}
      />
    </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_2.geometry}
          material={materials.dbl_Layer0_003}
          ><meshStandardMaterial
          attach="material"
          map={texture}/>
          </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_3.geometry}
          material={materials.dbl_Layer0_004}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_4.geometry}
          material={materials.dbl_Layer0_005}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_5.geometry}
          material={materials.dbl_Layer0_006}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_6.geometry}
          material={materials.dbl_Layer0_007}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_7.geometry}
          material={materials.dbl_Layer0_008}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/billboard.glb");
