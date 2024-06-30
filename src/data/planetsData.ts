type PlanetDataType = {
    modelSrc: string;
    position: [number, number, number];
    selfRotationSpeed: number,
    scale: number
}[];

export const planetsData: PlanetDataType = [
    { modelSrc: 'public/models/Sun/Sun.gltf', position: [-5, 2, 50], selfRotationSpeed: 0, scale: 30.9 },
    { modelSrc: 'public/models/Mercury/Mercury.gltf', position: [3, 2, 30], selfRotationSpeed: 0.0002, scale: 0.005 },
    { modelSrc: 'public/models/Venus/Venus.gltf', position: [4, 2, 10], selfRotationSpeed: 0.0002, scale: 0.01 },
    { modelSrc: 'public/models/Earth/Earth.gltf', position: [1, 2, -15], selfRotationSpeed: 0.0002, scale: 0.015 },
    { modelSrc: 'public/models/Moon/Moon.gltf', position: [10, 2, -22], selfRotationSpeed: 0.0002, scale: 0.006 },
    { modelSrc: 'public/models/Mars/Mars.gltf', position: [3, 2, -45], selfRotationSpeed: 0.0002, scale: 0.009 },
    { modelSrc: 'public/models/Jupiter/Jupiter.gltf', position: [-7, 2, -110], selfRotationSpeed: 0.0002, scale: 0.15 },
    { modelSrc: 'public/models/Saturn/saturn1.gltf', position: [-10, 2, -215], selfRotationSpeed: 0.0002, scale: 0.12 },
    { modelSrc: 'public/models/Uranos/Uranus.gltf', position: [5, 2, -306], selfRotationSpeed: 0.0002, scale: 0.09 },
    { modelSrc: 'public/models/Neptune/Neptune.gltf', position: [8, 2, -387], selfRotationSpeed: 0.0002, scale: 0.08 },
    { modelSrc: 'public/models/Pluto/Pluto.gltf', position: [3, 2, -720], selfRotationSpeed: 0.0002, scale: 0.004 },
];