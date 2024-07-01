type PlanetDataType = {
    image: string;
    modelSrc: string;
    position: [number, number, number];
    selfRotationSpeed: number,
    scale: number
}[];

export const planetsData: PlanetDataType = [
    // Sun
    { 
        image : `${import.meta.env.VITE_PUBLIC_URL}planetImages/sun.jpg`, 
        modelSrc: `${import.meta.env.VITE_PUBLIC_URL}models/Sun/Sun.gltf`, 
        position: [-5, 2, 50], 
        selfRotationSpeed: 0, 
        scale: 30.9 
    },
    // Mercury
    { 
        image : `${import.meta.env.VITE_PUBLIC_URL}planetImages/mercury.jpg`, 
        modelSrc: `${import.meta.env.VITE_PUBLIC_URL}models/Mercury/Mercury.gltf`, 
        position: [3, 2, 30], 
        selfRotationSpeed: 0.0002, 
        scale: 0.005 
    },
    // Venus
    { 
        image : `${import.meta.env.VITE_PUBLIC_URL}planetImages/venus.jpg`, 
        modelSrc: `${import.meta.env.VITE_PUBLIC_URL}models/Venus/Venus.gltf`, 
        position: [4, 2, 10], 
        selfRotationSpeed: 0.0002, 
        scale: 0.01 
    },
    // Earth
    { 
        image : `${import.meta.env.VITE_PUBLIC_URL}planetImages/earth.jpg`, 
        modelSrc: `${import.meta.env.VITE_PUBLIC_URL}models/Earth/Earth.gltf`, 
        position: [1, 2, -15], 
        selfRotationSpeed: 0.0002, 
        scale: 0.015 
    },
    // Moon
    { 
        image : `${import.meta.env.VITE_PUBLIC_URL}planetImages/moon.jpg`, 
        modelSrc: `${import.meta.env.VITE_PUBLIC_URL}models/Moon/Moon.gltf`, 
        position: [10, 2, -22], 
        selfRotationSpeed: 0.0002, 
        scale: 0.006 
    },
    // Mars
    { 
        image : `${import.meta.env.VITE_PUBLIC_URL}planetImages/mars.jpg`, 
        modelSrc: `${import.meta.env.VITE_PUBLIC_URL}models/mars/Mars.gltf`, 
        position: [3, 2, -45], 
        selfRotationSpeed: 0.0002, 
        scale: 0.009 
    },
    // Jupiter
    { 
        image : `${import.meta.env.VITE_PUBLIC_URL}planetImages/jupiter.jpg`, 
        modelSrc: `${import.meta.env.VITE_PUBLIC_URL}models/Jupiter/Jupiter.gltf`, 
        position: [-7, 2, -110], 
        selfRotationSpeed: 0.0002, 
        scale: 0.15 
    },
    // Saturn
    { 
        image : `${import.meta.env.VITE_PUBLIC_URL}planetImages/saturn.jpg`, 
        modelSrc: `${import.meta.env.VITE_PUBLIC_URL}models/Saturn/saturn1.gltf`, 
        position: [-10, 2, -215], 
        selfRotationSpeed: 0.0002, 
        scale: 0.12 
    },
    // Uranus
    { 
        image : `${import.meta.env.VITE_PUBLIC_URL}planetImages/uranus.jpg`, 
        modelSrc: `${import.meta.env.VITE_PUBLIC_URL}models/Uranos/Uranus.gltf`, 
        position: [5, 2, -306], 
        selfRotationSpeed: 0.0002, 
        scale: 0.09 
    },
    // Neptune
    { 
        image : `${import.meta.env.VITE_PUBLIC_URL}planetImages/neptune.jpg`, 
        modelSrc: `${import.meta.env.VITE_PUBLIC_URL}models/Neptune/Neptune.gltf`, 
        position: [8, 2, -387], 
        selfRotationSpeed: 0.0002, 
        scale: 0.08 
    },
    // Pluto
    { 
        image : `${import.meta.env.VITE_PUBLIC_URL}planetImages/pluto.jpg`, 
        modelSrc: `${import.meta.env.VITE_PUBLIC_URL}models/Pluto/Pluto.gltf`, 
        position: [3, 2, -720], 
        selfRotationSpeed: 0.0002, 
        scale: 0.004 
    },
];