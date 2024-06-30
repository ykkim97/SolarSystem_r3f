import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { gsap } from 'gsap';
import * as THREE from 'three';
import Planet from './Planet';
import PlanetModal from './PlanetModal';
import '../App.css';
import { planetsData } from '../data/planetsData';

const SolarSystem: React.FC = () => {
    const cameraRef = useRef<THREE.PerspectiveCamera>(null);
    const cameraModelRef = useRef<THREE.Object3D>(null);
    const currentSection = useRef(0);
    
    const [cameraPosition, setCameraPosition] = useState({ x: 100, y: 10, z: 240 });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlanet, setSelectedPlanet] = useState(null);

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
        setSelectedPlanet(planetsData[index]);
        setIsModalOpen(true);
        // if (cameraRef.current) {
        //     const planetPosition = new THREE.Vector3(...planetsData[index].position);
        //     const offset = 30; // 행성으로부터 카메라의 거리
        //     const direction = new THREE.Vector3().subVectors(cameraRef.current.position, planetPosition).normalize();
        //     const targetPosition = planetPosition.clone().add(direction.multiplyScalar(offset));

        //     gsap.to(cameraRef.current.position, {
        //         duration: 1.5,
        //         x: targetPosition.x,
        //         y: targetPosition.y,
        //         z: targetPosition.z,
        //         onUpdate: () => {
        //             if (cameraRef.current) {
        //                 cameraRef.current.lookAt(planetPosition);
        //                 setCameraPosition({
        //                     x: cameraRef.current.position.x,
        //                     y: cameraRef.current.position.y,
        //                     z: cameraRef.current.position.z,
        //                 });
        //             }
        //         }
        //     });
        // }
    };

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
                        // orbitRadius={planet.orbitRadius}
                        // orbitSpeed={planet.orbitSpeed}
                        selfRotationSpeed={planet.selfRotationSpeed}
                        onClick={() => handlePlanetClick(index)} // 행성 클릭 이벤트 추가
                    />
                ))}
            </Canvas>

            {isModalOpen && selectedPlanet && (
                <PlanetModal planet={selectedPlanet} onClose={() => setIsModalOpen(false)} />
            )}
        </>
    );
};

export default SolarSystem;
