import React, { useEffect, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from 'gsap';

interface CameraControlsProps {
    position: { x: number, y: number, z: number };
    target: { x: number, y: number, z: number };
}

const CameraControls: React.FC<CameraControlsProps> = ({ position, target }) => {
    const { camera } = useThree();
    const ref = useRef<any>(null);

    const cameraAnimate = () => {
        if (ref.current) {
            gsap.timeline().to(
                camera.position, 
                {
                    duration: 3,
                    repeat: 0,
                    x: position.x,
                    y: position.y,
                    z: position.z,
                    ease: "power3.inOut",
            });

            gsap.timeline().to(
                ref.current.target,
                {
                    duration: 3,
                    repeat: 0,
                    x: target.x,
                    y: target.y,
                    z: target.z,
                    ease: "power3.inOut",
                }
            );
        }
    };

    useEffect(() => {
        cameraAnimate();
    }, [target, position]);

    return (
        <OrbitControls ref={ref} />
    );
};

export default CameraControls;
