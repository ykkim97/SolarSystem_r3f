import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { gsap } from 'gsap';
import * as THREE from 'three';
import '../App.css';

import Planet from './Planet';

const planetsData = [
    { modelSrc: 'public/models/Sun/Sun.gltf', position: [-5, 2, 20], scale: 1.9 },
    { modelSrc: 'public/models/Mercury/Mercury.gltf', position: [-7, 2, 10], scale: 0.005 },
    { modelSrc: 'public/models/Venus/Venus.gltf', position: [-10, 2, 0], scale: 0.01 },
    { modelSrc: 'public/models/Earth/Earth.gltf', position: [1, 2, -15], scale: 0.015 },
    { modelSrc: 'public/models/Moon/Moon.gltf', position: [10, 2, -22], scale: 0.006 },
    { modelSrc: 'public/models/Mars/Mars.gltf', position: [3, 2, -45], scale: 0.009 },
    { modelSrc: 'public/models/Jupiter/Jupiter.gltf', position: [-7, 2, -70], scale: 0.03 },
    { modelSrc: 'public/models/Saturn/saturn1.gltf', position: [-10, 2, -115], scale: 0.02 },
    { modelSrc: 'public/models/Uranos/Uranus.gltf', position: [5, 2, -136], scale: 0.021 },
    { modelSrc: 'public/models/Neptune/Neptune.gltf', position: [8, 2, -167], scale: 0.021 },
    { modelSrc: 'public/models/Pluto/Pluto.gltf', position: [3, 2, -180], scale: 0.004 },
];

const SolarSystem: React.FC = () => {
    const cameraRef = useRef<THREE.PerspectiveCamera>(null);
    const currentSection = useRef(0);

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
            gsap.to(cameraRef.current.position, {
                duration: 1,
                x: planetsData[index].position[0],
                z: planetsData[index].position[2] + 5,
                y: planetsData[index].position[1] + 5,
            });
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Canvas
            camera={{ position: [15, 21, 60], fov: 55 }}
            shadows
            onCreated={({ camera, gl, scene }) => {
                scene.background = new THREE.Color(0x000000); // 배경을 검정색으로 설정
                cameraRef.current = camera; // 카메라 참조 설정
            }}
        >
            <ambientLight intensity={0.5} />
            <spotLight position={[0, 150, 100]} angle={0.3} penumbra={1} castShadow />
            <OrbitControls />
            <Stars />
            {planetsData.map((planet, index) => (
                <Planet
                    key={index}
                    modelSrc={planet.modelSrc}
                    position={planet.position}
                    scale={planet.scale}
                    onClick={() => handlePlanetClick(index + 1)} // 행성 클릭 이벤트 추가
                />
            ))}
        </Canvas>
    );
};

export default SolarSystem;
