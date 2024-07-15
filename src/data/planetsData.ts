type PlanetDataType = {
    image: string;
    modelSrc: string;
    position: [number, number, number];
    selfRotationSpeed: number;
    scale: number;
    name: string;
    nameOffset: number;
    orbitSpeed: number;
    description: string;
}[];

export const planetsData: PlanetDataType = [
    // Sun
    { 
        image : `${import.meta.env.VITE_PUBLIC_URL}planetImages/sun.JPG`, 
        modelSrc: `${import.meta.env.VITE_PUBLIC_URL}models/Sun/Sun.gltf`, 
        position: [-5, 2, 100], 
        selfRotationSpeed: 0, 
        scale: 2.9,
        name: '태양',
        nameOffset: 40,
        orbitSpeed: 0,
        description: '태양(太陽, Sun)은 태양계의 중심에 존재하는 항성(별)으로, 태양계의 유일한 항성이자 에너지의 근원이다. 태양이 있기에 지구에 낮과 밤의 구분, 사계절과 기후 더 나아가 생명이 존재할 수 있다. 태양은 우리 은하 내에서도 드물게 존재하는 G형 주계열성으로, 덕분에 4광년 떨어진 센타우루스자리 알파에서도 태양은 맨눈으로 잘 보일 정도로 밝은 별이다.',
    },
    // Mercury
    { 
        image : `${import.meta.env.VITE_PUBLIC_URL}planetImages/mercury.JPG`, 
        modelSrc: `${import.meta.env.VITE_PUBLIC_URL}models/Mercury/Mercury.gltf`, 
        position: [3, 2, 30], 
        selfRotationSpeed: 0.0002, 
        scale: 0.005,
        name: '수성',
        nameOffset: 5,
        orbitSpeed: 0.01,
        description: '수성(水星 / Mercury)은 태양계의 행성 중 태양과 가장 가까이 있는 천체이다. 태양계 모형만 보면 감이 잘 오지 않겠지만, 가장 가깝다는 태양과 수성 사이의 거리는 태양 지름의 약 41배나 된다.',
    },
    // Venus
    { 
        image : `${import.meta.env.VITE_PUBLIC_URL}planetImages/venus.JPG`, 
        modelSrc: `${import.meta.env.VITE_PUBLIC_URL}models/Venus/Venus.gltf`, 
        position: [4, 2, 10], 
        selfRotationSpeed: 0.0002, 
        scale: 0.01,
        name: '금성', 
        nameOffset: 10,
        orbitSpeed: 0.008,
        description: '금성(金星, Venus)은 태양계의 두번째 행성이다. 지구에서 관측할 수 있는 천체 중에서 3번째로 밝은데, 첫 번째는 태양, 두 번째는 달이다. 지구에서 관측되는 이미지는 아름답지만, 실제로는 높은 고온, 고압, 부식성 대기 등의 극한 환경을 가진 행성이다.',
    },
    // Earth
    { 
        image : `${import.meta.env.VITE_PUBLIC_URL}planetImages/earth.JPG`, 
        modelSrc: `${import.meta.env.VITE_PUBLIC_URL}models/Earth/Earth.gltf`, 
        position: [1, 2, -15], 
        selfRotationSpeed: 0.0002, 
        scale: 0.015,
        name: '지구', 
        nameOffset: 10,
        orbitSpeed: 0.008,
        description: '지구(地球, Earth)는 태양으로부터 세 번째 궤도를 도는 행성이다. 현재까지 사람과 동물 식물 등의 생명체가 탄생하고 서식하는 유일한 천체로 알려져 있으며, 지구 외에 다른 곳에 존재하는 생명체는 아직 과학적으로 밝혀지지 않았다.',
    },
    // Moon
    { 
        image : `${import.meta.env.VITE_PUBLIC_URL}planetImages/moon.JPG`, 
        modelSrc: `${import.meta.env.VITE_PUBLIC_URL}models/Moon/Moon.gltf`, 
        position: [10, 2, -22], 
        selfRotationSpeed: 0.0002, 
        scale: 0.006,
        name: '달', 
        nameOffset: 10,
        orbitSpeed: 0.008,
        description: '지구의 위성이자 태양계의 가장 안쪽에 있는 위성이며, 자전주기는 약 27.321582일, 공전주기도 약 27.321582일(이는 항성월 기준으로 삭망월 기준으로 본다면 공전주기는 대략 29.5일). 달의 자전 및 공전 방향은 지구와 같이 시계반대방향이다(지구의 북극이 윗쪽 기준). 달 표면에서의 하루의 길이는 29.530589일. 표면 온도는 최저 -233도/최대 123도[4]이다. 지구에서 가장 관측이 쉬운 천체다.[5] 겉보기 등급은 -2.5 에서 보름달일 때는 -12.9 가량으로 달이 차고 기우는 것에 따라 변한다.',
    },
    // Mars
    { 
        image : `${import.meta.env.VITE_PUBLIC_URL}planetImages/mars.JPG`, 
        modelSrc: `${import.meta.env.VITE_PUBLIC_URL}models/mars/Mars.gltf`, 
        position: [3, 2, -45], 
        selfRotationSpeed: 0.0002, 
        scale: 0.009,
        name: '화성', 
        nameOffset: 10,
        orbitSpeed: 0.008,
        description: '화성(火星, Mars)은 태양계의 네 번째 행성이다. 산화철로 인한 붉은 빛이 감도는 사막 지형이 형성되어 있다. 지구를 제외한 태양계 내 모든 행성 중 표면 탐사가 가장 많이 이루어진 행성이며, 물의 존재가 확인되고 테라포밍의 가능성이 보이는 등 인류 문명의 우주 개발에서 중요한 역할을 맡게 될 것으로 여겨지는 천체이다. 화성 표면에 생명체의 존재 가능성이 과거부터 논의되고는 있으나 아직까지 화성에서 생명체는 발견되지 않았다. 애초에 표면온도도 평균수치가 지구의 남극 수준으로 낮은 데다가 대기도 희박하고 태양풍을 막아주는 행성의 자기장도 약해서 고등 생명체가 살기에는 여전히 혹독한 환경이고, 생명체가 만약 존재한다고 쳐도 미생물정도일 것이다.',
    },
    // Jupiter
    { 
        image : `${import.meta.env.VITE_PUBLIC_URL}planetImages/jupiter.JPG`, 
        modelSrc: `${import.meta.env.VITE_PUBLIC_URL}models/Jupiter/Jupiter.gltf`, 
        position: [-7, 2, -110], 
        selfRotationSpeed: 0.0002, 
        scale: 0.15,
        name: '목성',
        nameOffset: 20,
        orbitSpeed: 0.008,
        description: '목성(木星, Jupiter)은 태양계의 다섯 번째 행성으로, 태양계의 행성 중 가장 부피가 큰 천체이다.',
    },
    // Saturn
    { 
        image : `${import.meta.env.VITE_PUBLIC_URL}planetImages/saturn.JPG`, 
        modelSrc: `${import.meta.env.VITE_PUBLIC_URL}models/Saturn/saturn1.gltf`, 
        position: [-10, 2, -215], 
        selfRotationSpeed: 0.0002, 
        scale: 0.12,
        name: '토성', 
        nameOffset: 20,
        orbitSpeed: 0.008,
        description: '토성(土星, Saturn)은 태양계의 여섯 번째 행성으로, 태양계 내 행성 중에서 두 번째로 큰 크기를 가지고 있다. 지구와 비교하면 약 95배 정도 무거우며, 부피는 지구의 764배. 그러니까 즉 토성 안에는 지구가 무려 764개나 들어간다는 이야기다. 거대한 고리를 가진 행성으로 유명하다.',
    },
    // Uranus
    { 
        image : `${import.meta.env.VITE_PUBLIC_URL}planetImages/uranus.JPG`, 
        modelSrc: `${import.meta.env.VITE_PUBLIC_URL}models/Uranos/Uranus.gltf`, 
        position: [5, 2, -306], 
        selfRotationSpeed: 0.0002, 
        scale: 0.09,
        name: '천왕성', 
        nameOffset: 19,
        orbitSpeed: 0.008,
        description: '천왕성(天王星, Uranus)은 태양계의 일곱 번째 행성이다. 핵은 얼음이며 지표는 액체 메테인, 대기는 수소와 헬륨으로 이루어져 있고, 평균 기온은 -224℃이다. 1 천왕성일(자전)은 지구 기준으로 17시간 14분이며, 1 천왕성년(공전)은 지구 기준 84년이다. 의외로 큰 덩치에 비해 중력은 지구의 88%로 지구에서 체중이 100kg인 사람이 천왕성을 가면 88kg이 된다.',
    },
    // Neptune
    { 
        image : `${import.meta.env.VITE_PUBLIC_URL}planetImages/neptune.JPG`, 
        modelSrc: `${import.meta.env.VITE_PUBLIC_URL}models/Neptune/Neptune.gltf`, 
        position: [8, 2, -387], 
        selfRotationSpeed: 0.0002, 
        scale: 0.08,
        name: '해왕성', 
        nameOffset: 15,
        orbitSpeed: 0.008,
        description: '해왕성(海王星, Neptune)은 태양계의 8번째 행성으로, 과거 9번째 행성으로 여겨졌던 명왕성이 행성 분류에서 제외된 이후 태양계의 마지막 행성으로 인정되고 있는 행성이다. 천왕성과 닮은 점이 많은 행성인데, 먼저 반지름이 천왕성보다 지구 지름의 1/5만큼 작은 정도로 거의 비슷한 크기이며, 대기에 포함된 메탄에 의해 푸른색으로 보이는 것도 비슷하다.',
    },
    // Pluto
    { 
        image : `${import.meta.env.VITE_PUBLIC_URL}planetImages/pluto.JPG`, 
        modelSrc: `${import.meta.env.VITE_PUBLIC_URL}models/Pluto/Pluto.gltf`, 
        position: [3, 2, -720], 
        selfRotationSpeed: 0.0002, 
        scale: 0.004,
        name: '명왕성', 
        nameOffset: 10,
        orbitSpeed: 0.008,
        description: '명왕성(冥王星, Pluto)은 태양계의 왜행성 중 하나로, 최초로 발견된 카이퍼 벨트 천체이다. 현재까지 크기가 확인된 해왕성 바깥 태양계 천체 가운데에서 가장 큰 천체다. 1930년 2월 18일 미국의 천문학자 클라이드 톰보(Clyde Tombaugh)가 발견한 이래 1999년 2월 국제천문연맹이 행성으로 지정하고, 2006년 행성의 기준이 수정되기 전까지 태양계의 아홉 번째 행성으로 인식되었다.',
    },
];