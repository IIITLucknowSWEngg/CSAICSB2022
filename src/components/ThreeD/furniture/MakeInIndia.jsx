/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function MakeInIndia(props) {
  const { nodes, materials } = useGLTF('./models/make_in_india.glb')
  return (
    <group {...props} dispose={null} scale={3} rotation={[0,Math.PI*0.5,0]} position={[49,10,4]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_Cube001.geometry}
        material={materials['Material.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lion_Mesh002.geometry}
        material={materials['SVGMat.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MII1_Mesh001.geometry}
        material={materials['Material.002']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MII2_Mesh.geometry}
        material={materials['Material.003']}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('./models/make_in_india.glb')