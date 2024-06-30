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
        image : 'public/planetImages/sun.jpg', 
        modelSrc: 'public/models/Sun/Sun.gltf', 
        position: [-5, 2, 50], 
        selfRotationSpeed: 0, 
        scale: 30.9 
    },
    // Mercury
    { 
        image : 'public/planetImages/mercury.jpg', 
        modelSrc: 'public/models/Mercury/Mercury.gltf', 
        position: [3, 2, 30], 
        selfRotationSpeed: 0.0002, 
        scale: 0.005 
    },
    // Venus
    { 
        image : 'public/planetImages/venus.jpg', 
        modelSrc: 'public/models/Venus/Venus.gltf', 
        position: [4, 2, 10], 
        selfRotationSpeed: 0.0002, 
        scale: 0.01 
    },
    // Earth
    { 
        image : 'public/planetImages/earth.jpg', 
        modelSrc: 'public/models/Earth/Earth.gltf', 
        position: [1, 2, -15], 
        selfRotationSpeed: 0.0002, 
        scale: 0.015 
    },
    // Moon
    { 
        image : 'public/planetImages/moon.jpg', 
        modelSrc: 'public/models/Moon/Moon.gltf', 
        position: [10, 2, -22], 
        selfRotationSpeed: 0.0002, 
        scale: 0.006 
    },
    // Mars
    { 
        image : 'public/planetImages/mars.jpg', 
        modelSrc: 'public/models/Mars/Mars.gltf', 
        position: [3, 2, -45], 
        selfRotationSpeed: 0.0002, 
        scale: 0.009 
    },
    // Jupiter
    { 
        image : 'public/planetImages/jupiter.jpg', 
        modelSrc: 'public/models/Jupiter/Jupiter.gltf', 
        position: [-7, 2, -110], 
        selfRotationSpeed: 0.0002, 
        scale: 0.15 
    },
    // Saturn
    { 
        image : 'public/planetImages/saturn.jpg', 
        modelSrc: 'public/models/Saturn/saturn1.gltf', 
        position: [-10, 2, -215], 
        selfRotationSpeed: 0.0002, 
        scale: 0.12 
    },
    // Uranus
    { 
        image : 'public/planetImages/uranus.jpg', 
        modelSrc: 'public/models/Uranos/Uranus.gltf', 
        position: [5, 2, -306], 
        selfRotationSpeed: 0.0002, 
        scale: 0.09 
    },
    // Neptune
    { 
        image : 'public/planetImages/neptune.jpg', 
        modelSrc: 'public/models/Neptune/Neptune.gltf', 
        position: [8, 2, -387], 
        selfRotationSpeed: 0.0002, 
        scale: 0.08 
    },
    // Pluto
    { 
        image : 'public/planetImages/pluto.jpg', 
        modelSrc: 'public/models/Pluto/Pluto.gltf', 
        position: [3, 2, -720], 
        selfRotationSpeed: 0.0002, 
        scale: 0.004 
    },
];