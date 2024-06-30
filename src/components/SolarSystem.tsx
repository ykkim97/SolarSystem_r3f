import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { gsap } from 'gsap';
import * as THREE from 'three';
import Planet from './Planet';
import PlanetModal from './PlanetModal';
import '../App.css';
import { planetsData } from '../data/planetsData';
import Button from '@mui/material/Button';
import Sidebar from './SideBar';
import CameraControls from './CameraControls';

const SolarSystem: React.FC = () => {
    const cameraRef = useRef<THREE.PerspectiveCamera>(null);
    const cameraModelRef = useRef<THREE.Object3D>(null);
    const currentSection = useRef(0);
    
    const [cameraPosition, setCameraPosition] = useState({ x: 100, y: 10, z: 240 });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlanet, setSelectedPlanet] = useState(null);

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const [position, setPosition] = useState({ x: 25, y: 4, z: -8})
    const [target, setTarget] = useState({x: 0, y: 0, z: 0})

    const handleOnclick = () => {
        setPosition({x: 30, y: -20, z: 0})
        setTarget({x: 3, y: 2, z: 0 })
    }

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

    const toggleAudio = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    }

    useEffect(() => {
        const audio = new Audio('public/sound/superspacy-atmosphere.mp3');
        audio.loop = true;
        audio.play();
        audioRef.current = audio;

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const handlePlanetClick = (index: number) => {
        setSelectedPlanet(planetsData[index]);
        setIsModalOpen(true);

        const planetPosition = planetsData[index].position;

        let xOffset = 10; 
        let yOffset = 10;
        switch (index) {
            case 0: 
                xOffset = 150; 
                yOffset = 70;
                break;
            case 1: 
                xOffset = 1;
                break;
            case 2: 
                xOffset = 1;
                break;
            case 3: 
                xOffset = 1;
                break;
            case 4: 
                xOffset = 1;
                break;
            case 5: 
                xOffset = 1;
                break;
            case 6: 
                xOffset = 32;
                break;
            case 7: 
                xOffset = 35;
                break;
            case 8: 
                xOffset = 20;
                break;
            case 9: 
                xOffset = 15;
                break;
        }

        setPosition({
            x: planetPosition[0] + xOffset,  // or any desired offset
            y: planetPosition[1] + yOffset,
            z: planetPosition[2] + 10,
        });
        setTarget({
            x: planetPosition[0],
            y: planetPosition[1],
            z: planetPosition[2],
        });
    };

    const handleMenuItemClick = (index: number) => {
        if (cameraRef.current) {
            const planetPosition = new THREE.Vector3(...planetsData[index].position);
            gsap.to(cameraRef.current.position, {
                duration: 1.5,
                x: planetPosition.x + 180, 
                y: planetPosition.y + 100, // 상하
                z: planetPosition.z + 50,
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

    return (
        <>
            <section style={{ background: 'black' }}>
                <Sidebar 
                    items={
                        [
                            'Sun', 
                            'Mercury', 
                            'Venus', 
                            'Earth', 
                            'Moon', 
                            'Mars',
                            'Jupiter',
                            'Saturn',
                            'Uranos',
                            'Neptune',
                        ]
                    } 
                    onMenuItemClick={handleMenuItemClick} 
                />
            </section>
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
                {/* <OrbitControls /> */}
                <CameraControls position={position} target={target}/>
                <Stars radius={200} depth={60} count={2000} factor={7} saturation={0} fade speed={0.5}/>
                {planetsData.map((planet, index) => (
                    <Planet
                        key={index}
                        modelSrc={planet.modelSrc}
                        position={planet.position}
                        scale={planet.scale}
                        selfRotationSpeed={planet.selfRotationSpeed}
                        onClick={() => handlePlanetClick(index)} // 행성 클릭 이벤트 추가
                    />
                ))}
            </Canvas>

            {isModalOpen && selectedPlanet && (
                <PlanetModal planet={selectedPlanet} onClose={() => setIsModalOpen(false)} />
            )}

            <Button
                onClick={toggleAudio}
                sx={{
                    position: 'fixed',
                    top: '10px',
                    right: '10px',
                    padding: '10px',
                    background: 'none',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
                variant='outlined'
            >
                {isPlaying ? 'Sound Pause' : 'Sound Play'}
            </Button>
        </>
    );
};

export default SolarSystem;
