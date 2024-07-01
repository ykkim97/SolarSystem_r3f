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

type PlanetType = {
    image: string;
    modelSrc: string;
    position: [number, number, number];
    selfRotationSpeed: number;
    scale: number;
}

const SolarSystem: React.FC = () => {
    const cameraRef = useRef<THREE.PerspectiveCamera>(null);
    const cameraModelRef = useRef<THREE.Object3D>(null);
    const currentSection = useRef(0);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlanet, setSelectedPlanet] = useState<null | PlanetType>(null);

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const [position, setPosition] = useState({ x: 150, y: 50, z: -8})
    const [target, setTarget] = useState({x: 0, y: 0, z: 0})

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
        // Modal 열고 싶을때
        // setIsModalOpen(true);

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
            x: planetPosition[0] + xOffset, 
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
        handlePlanetClick(index - 1);
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
                    // cameraRef.current = camera; // 카메라 참조 설정
                    camera.position.set(200, 150, 540); // 초기 카메라 위치 설정
                }}
            >
                <ambientLight intensity={0.5} />
                <spotLight position={[0, 150, 100]} angle={0.3} penumbra={1} castShadow />
                
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
