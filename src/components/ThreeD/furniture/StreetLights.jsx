/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function StreetLights(props) {
  const { nodes, materials } = useGLTF('./models/streetLights.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-1.613, 0.03, -23.545]} scale={0.23}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials['Material.009']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_1.geometry}
          material={materials['Material.011']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Handrail002.geometry}
        material={materials.Rail}
        position={[-2.88, 24.359, -6.585]}
        scale={0.306}
      />
    </group>
  )
}

useGLTF.preload('./models/streetLights.glb')
