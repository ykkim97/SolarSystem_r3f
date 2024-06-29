import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { gsap } from 'gsap';
import * as THREE from 'three';
import '../App.css';

import Planet from './Planet';

const planetsData = [
    { modelSrc: 'public/models/Sun/Sun.gltf', position: [-5, 2, 50], scale: 30.9 },
    { modelSrc: 'public/models/Mercury/Mercury.gltf', position: [-7, 2, 30], scale: 0.005 },
    { modelSrc: 'public/models/Venus/Venus.gltf', position: [-10, 2, 10], scale: 0.01 },
    { modelSrc: 'public/models/Earth/Earth.gltf', position: [1, 2, -15], scale: 0.015 },
    { modelSrc: 'public/models/Moon/Moon.gltf', position: [10, 2, -22], scale: 0.006 },
    { modelSrc: 'public/models/Mars/Mars.gltf', position: [3, 2, -45], scale: 0.009 },
    { modelSrc: 'public/models/Jupiter/Jupiter.gltf', position: [-7, 2, -110], scale: 0.15 },
    { modelSrc: 'public/models/Saturn/saturn1.gltf', position: [-10, 2, -215], scale: 0.12 },
    { modelSrc: 'public/models/Uranos/Uranus.gltf', position: [5, 2, -306], scale: 0.09 },
    { modelSrc: 'public/models/Neptune/Neptune.gltf', position: [8, 2, -387], scale: 0.08 },
    { modelSrc: 'public/models/Pluto/Pluto.gltf', position: [3, 2, -720], scale: 0.004 },
];

const SolarSystem: React.FC = () => {
    const cameraRef = useRef<THREE.PerspectiveCamera>(null);
    const cameraModelRef = useRef<THREE.Object3D>(null);
    const currentSection = useRef(0);
    
    const [cameraPosition, setCameraPosition] = useState({ x: 100, y: 10, z: 240 });

    const handleScroll = () => {
        const newSection = Math.round(window.scrollY / window.innerHeight);
        if (newSection !== currentSection.current && cameraRef.current) {
            gsap.to(cameraRef.current.position, {
                duration: 1,
                x: planetsData[newSection].position[0],
                z: planetsData[newSection].position[2] + 5,
                y: planetsData[newSection].position[1] + 5,
            });
            currentSection.current = newSection;
        }
    };

    const handlePlanetClick = (index: number) => {
        if (cameraRef.current) {
            const planetPosition = new THREE.Vector3(...planetsData[index].position);
            const offset = 30; // 행성으로부터 카메라의 거리
            const direction = new THREE.Vector3().subVectors(cameraRef.current.position, planetPosition).normalize();
            const targetPosition = planetPosition.clone().add(direction.multiplyScalar(offset));

            gsap.to(cameraRef.current.position, {
                duration: 1.5,
                x: targetPosition.x,
                y: targetPosition.y,
                z: targetPosition.z,
                onUpdate: () => {
                    if (cameraRef.current) {
                        cameraRef.current.lookAt(planetPosition);
                        setCameraPosition({
                            x: cameraRef.current.position.x,
                            y: cameraRef.current.position.y,
                            z: cameraRef.current.position.z,
                        });
                    }
                }
            });
        }
    };

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);
    

    return (
        <>
            <Canvas
                style={{ width: '100%', height: '100vh' }}
                camera={{ position: [200, 150, 540], fov: 55, }}
                shadows
                onCreated={({ camera, gl, scene }) => {
                    scene.background = new THREE.Color(0x000000); // 배경을 검정색으로 설정
                    cameraRef.current = camera; // 카메라 참조 설정
                    camera.position.set(200, 150, 540); // 초기 카메라 위치 설정
                }}
            >
                <ambientLight intensity={0.5} />
                <spotLight position={[0, 150, 100]} angle={0.3} penumbra={1} castShadow />
                <OrbitControls />
                <Stars radius={200} depth={60} count={2000} factor={7} saturation={0} fade speed={0.5}/>
                {planetsData.map((planet, index) => (
                    <Planet
                    key={index}
                    modelSrc={planet.modelSrc}
                    position={planet.position}
                    scale={planet.scale}
                    orbitRadius={planet.orbitRadius}
                    orbitSpeed={planet.orbitSpeed}
                    selfRotationSpeed={planet.selfRotationSpeed}
                    onClick={() => handlePlanetClick(index)} // 행성 클릭 이벤트 추가
                />
                ))}
            </Canvas>
            <div style={{ position: 'absolute', top: 10, left: 10, color: 'white' }}>
                Camera Position: x: {cameraPosition.x.toFixed(2)}, y: {cameraPosition.y.toFixed(2)}, z: {cameraPosition.z.toFixed(2)}
            </div>
        </>
    );
};

export default SolarSystem;
