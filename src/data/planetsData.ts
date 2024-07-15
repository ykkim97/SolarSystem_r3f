type PlanetDataType = {
    image: string;
    modelSrc: string;
    position: [number, number, number];
    selfRotationSpeed: number;
    scale: number;
    name: string;
    nameOffset: number;
    orbitSpeed: number;
}[];

export const planetsData: PlanetDataType = [
    // Sun
    { 
        image : `${import.meta.env.VITE_PUBLIC_URL}planetImages/sun.jpg`, 
        modelSrc: `${import.meta.env.VITE_PUBLIC_URL}models/Sun/Sun.gltf`, 
        position: [-5, 2, 100], 
        selfRotationSpeed: 0, 
        scale: 2.9,
        name: '태양',
        nameOffset: 40,
        orbitSpeed: 0,
    },
    // Mercury
    { 
        image : `${import.meta.env.VITE_PUBLIC_URL}planetImages/mercury.jpg`, 
        modelSrc: `${import.meta.env.VITE_PUBLIC_URL}models/Mercury/Mercury.gltf`, 
        position: [3, 2, 30], 
        selfRotationSpeed: 0.0002, 
        scale: 0.005,
        name: '수성',
        nameOffset: 5,
        orbitSpeed: 0.01,
    },
    // Venus
    { 
        image : `${import.meta.env.VITE_PUBLIC_URL}planetImages/venus.jpg`, 
        modelSrc: `${import.meta.env.VITE_PUBLIC_URL}models/Venus/Venus.gltf`, 
        position: [4, 2, 10], 
        selfRotationSpeed: 0.0002, 
        scale: 0.01,
        name: '금성', 
        nameOffset: 10,
        orbitSpeed: 0.008,
    },
    // Earth
    { 
        image : `${import.meta.env.VITE_PUBLIC_URL}planetImages/earth.jpg`, 
        modelSrc: `${import.meta.env.VITE_PUBLIC_URL}models/Earth/Earth.gltf`, 
        position: [1, 2, -15], 
        selfRotationSpeed: 0.0002, 
        scale: 0.015,
        name: '지구', 
        nameOffset: 10,
        orbitSpeed: 0.008,
    },
    // Moon
    { 
        image : `${import.meta.env.VITE_PUBLIC_URL}planetImages/moon.jpg`, 
        modelSrc: `${import.meta.env.VITE_PUBLIC_URL}models/Moon/Moon.gltf`, 
        position: [10, 2, -22], 
        selfRotationSpeed: 0.0002, 
        scale: 0.006,
        name: '달', 
        nameOffset: 10,
        orbitSpeed: 0.008,
    },
    // Mars
    { 
        image : `${import.meta.env.VITE_PUBLIC_URL}planetImages/mars.jpg`, 
        modelSrc: `${import.meta.env.VITE_PUBLIC_URL}models/mars/Mars.gltf`, 
        position: [3, 2, -45], 
        selfRotationSpeed: 0.0002, 
        scale: 0.009,
        name: '화성', 
        nameOffset: 10,
        orbitSpeed: 0.008,
    },
    // Jupiter
    { 
        image : `${import.meta.env.VITE_PUBLIC_URL}planetImages/jupiter.jpg`, 
        modelSrc: `${import.meta.env.VITE_PUBLIC_URL}models/Jupiter/Jupiter.gltf`, 
        position: [-7, 2, -110], 
        selfRotationSpeed: 0.0002, 
        scale: 0.15,
        name: '목성',
        nameOffset: 20,
        orbitSpeed: 0.008,
    },
    // Saturn
    { 
        image : `${import.meta.env.VITE_PUBLIC_URL}planetImages/saturn.jpg`, 
        modelSrc: `${import.meta.env.VITE_PUBLIC_URL}models/Saturn/saturn1.gltf`, 
        position: [-10, 2, -215], 
        selfRotationSpeed: 0.0002, 
        scale: 0.12,
        name: '토성', 
        nameOffset: 20,
        orbitSpeed: 0.008,
    },
    // Uranus
    { 
        image : `${import.meta.env.VITE_PUBLIC_URL}planetImages/uranus.jpg`, 
        modelSrc: `${import.meta.env.VITE_PUBLIC_URL}models/Uranos/Uranus.gltf`, 
        position: [5, 2, -306], 
        selfRotationSpeed: 0.0002, 
        scale: 0.09,
        name: '천왕성', 
        nameOffset: 19,
        orbitSpeed: 0.008,
    },
    // Neptune
    { 
        image : `${import.meta.env.VITE_PUBLIC_URL}planetImages/neptune.jpg`, 
        modelSrc: `${import.meta.env.VITE_PUBLIC_URL}models/Neptune/Neptune.gltf`, 
        position: [8, 2, -387], 
        selfRotationSpeed: 0.0002, 
        scale: 0.08,
        name: '해왕성', 
        nameOffset: 15,
        orbitSpeed: 0.008,
    },
    // Pluto
    { 
        image : `${import.meta.env.VITE_PUBLIC_URL}planetImages/pluto.jpg`, 
        modelSrc: `${import.meta.env.VITE_PUBLIC_URL}models/Pluto/Pluto.gltf`, 
        position: [3, 2, -720], 
        selfRotationSpeed: 0.0002, 
        scale: 0.004,
        name: '명왕성', 
        nameOffset: 10,
        orbitSpeed: 0.008,
    },
];