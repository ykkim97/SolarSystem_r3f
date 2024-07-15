import React, { useRef, useEffect, useState, Suspense, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, Text } from '@react-three/drei';
import * as THREE from 'three';
import PlanetModal from './PlanetModal';
import '../App.css';
import { planetsData } from '../data/planetsData';
import Button from '@mui/material/Button';
import Sidebar from './SideBar';
import CameraControls from './CameraControls';

const Planet = lazy(() => import('./Planet'));

type PlanetType = {
    image: string;
    modelSrc: string;
    position: [number, number, number];
    selfRotationSpeed: number;
    scale: number;
    name:string;
    nameOffset: number;
    orbitSpeed: number;
    index?: number;
}

// 로딩 메시지를 3D 텍스트로 표시하는 컴포넌트
const LoadingText = () => {
    return (
        <>
            <Text position={[0, 10, 0]} fontSize={20} color='white'>
                데이터를 불러오고 있습니다.
            </Text>
            <Text position={[0, -10, 0]} fontSize={20} color='white'>
                조금만 기다려주세요.⏳
            </Text>
        </>
    );
};

const SolarSystem: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlanet, setSelectedPlanet] = useState<null | PlanetType>(null);

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const [position, setPosition] = useState({ x: 150, y: 50, z: -8})
    const [target, setTarget] = useState({x: 0, y: 0, z: 0})
    const [isLoading, setIsLoading] = useState(true);

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
        const soundUrl = `${import.meta.env.VITE_PUBLIC_URL}sound/superspacy-atmosphere.mp3`
        const audio = new Audio(soundUrl);
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

    const handlePlanetText = (index: number) => {
        setSelectedPlanet(planetsData[index]);
        setIsModalOpen(true);
    }

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
                onCreated={({ camera, scene }) => {
                    scene.background = new THREE.Color(0x000000); // background color 
                    camera.position.set(200, 150, 540); // 초기 카메라 위치 설정
                }}
            >
                <ambientLight intensity={0.5} />
                <spotLight position={[0, 150, 100]} angle={0.3} penumbra={1} castShadow />
                
                {!isLoading && (
                    <CameraControls position={position} target={target} />
                )}
                
                <Stars radius={200} depth={60} count={2000} factor={7} saturation={0} fade speed={0.5}/>
                
                <Suspense fallback={<LoadingText />}>
                    {planetsData.map((planet, index) => (
                        <React.Fragment key={index}>
                            <Planet
                                key={index}
                                modelSrc={planet.modelSrc}
                                position={planet.position}
                                scale={planet.scale}
                                selfRotationSpeed={planet.selfRotationSpeed}
                                onClick={() => handlePlanetClick(index)} // 행성 클릭 이벤트 추가
                                onLoad={() => setIsLoading(false)}
                            />
                            <Text
                                position={[planet.position[0], planet.position[1] + planet.nameOffset, planet.position[2]]}
                                fontSize={5}
                                rotation={[0, Math.PI / 2, 0]}
                                color='white'
                                anchorX="center"
                                anchorY="middle"
                                onClick={() => handlePlanetText(index)}
                            >
                                {planet.name}
                            </Text>
                        </React.Fragment>
                    ))}
                </Suspense>
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
