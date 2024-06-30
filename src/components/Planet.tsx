import React, { useRef, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Mesh } from 'three';

interface PlanetProps {
    modelSrc: string;
    position: number[];
    scale: number;
    onClick?: () => void; // 클릭 이벤트 핸들러
}

const Planet: React.FC<PlanetProps> = ({ modelSrc, position, scale, selfRotationSpeed, onClick }) => {
    const gltf = useLoader(GLTFLoader, modelSrc);
    const meshRef = useRef<Mesh>();

    useEffect(() => {
        if (gltf.scene) {
            const mesh = gltf.scene.children[0] as Mesh;
            mesh.castShadow = true;
            mesh.scale.set(scale, scale, scale);
            mesh.position.set(...position);
            if (meshRef.current) {
                meshRef.current = mesh;
            }
        }
    }, [gltf, position, scale]);

    useFrame(() => {
        meshRef.current.rotation.z += selfRotationSpeed; // Apply rotation
    });

    return (
        <primitive
            ref={meshRef}
            object={gltf.scene}
            onClick={onClick} // 클릭 이벤트 설정
        />
    );
};

export default Planet;
