import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { lazy, useRef } from "react";
import * as THREE from 'three';

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
    index: number;
}

type OrbitingPlanetProps = {
    planet: PlanetType;
    onClick: (index : number) => void;
    setIsLoading: (isLoading: boolean) => void;
    index: number;
};

const OrbitingPlanet: React.FC<OrbitingPlanetProps> = ({ planet, onClick, setIsLoading, index }) => {
    const groupRef = useRef<THREE.Group>(null);

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        if (groupRef.current) {
            groupRef.current.rotation.y = elapsedTime * planet.orbitSpeed;
        }
    });

    return (
        <group ref={groupRef} position={[-5, 2, 100]}>
            <group position={planet.position}>
                <Planet
                    key={index}
                    modelSrc={planet.modelSrc}
                    position={planet.position}
                    scale={planet.scale}
                    selfRotationSpeed={planet.selfRotationSpeed}
                    onClick={() => onClick(index)} // 행성 클릭 이벤트 추가
                    onLoad={() => setIsLoading(false)}
                />
                <Text
                    position={[planet.position[0], planet.position[1] + planet.nameOffset, planet.position[2]]}
                    fontSize={5}
                    rotation={[0, Math.PI / 2, 0]}
                    color='white'
                    anchorX="center"
                    anchorY="middle"
                >
                    {planet.name}
                </Text>
            </group>
        </group>
    );
};

export default OrbitingPlanet;