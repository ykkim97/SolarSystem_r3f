import React, { useRef, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Mesh } from 'three';

interface PlanetProps {
    modelSrc: string;
    position: [number,number,number];
    scale: number;
    selfRotationSpeed: number;
    onClick?: () => void; // 클릭 이벤트 핸들러
    onLoad?: () => void; // Load function
}

const Planet: React.FC<PlanetProps> = ({ modelSrc, position, scale, selfRotationSpeed, onClick, onLoad }) => {
    const gltf = useLoader(GLTFLoader, modelSrc);
    const meshRef = useRef<Mesh | null>(null);

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
        if (onLoad) {
            onLoad(); // 로딩 완료 시 onLoad 호출
        }
    }, [gltf, position, scale]);

    useFrame(() => {
        if (meshRef.current) {
            // 자전 적용
            meshRef.current.rotation.z += selfRotationSpeed;
        }
    });

    return (
        <primitive
            ref={meshRef}
            object={gltf.scene}
            onClick={onClick}
        />
    );
};

export default Planet;
