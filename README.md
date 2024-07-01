## Threejs/React Three Fiber를 활용한 태양계 구현 프로젝트

![image](https://github.com/ykkim97/tourKorea-search/assets/17917009/cf3fc44a-6daf-486e-9bb9-3241d25663fd)

### 개발인원 : 1인 개발

### 배포페이지 : https://master--gotothesolar.netlify.app

### 개발 목적
평소에 과학 유튜브영상을 많이 보는데 우주관련 영상을 많이 시청합니다.
어느날 WebGL이라는 것을 알게 되면서 Three.js라는 것을 알게되고 웹사이트에서 3차원 공간을 구현할 수 있다는 것을 알게되었습니다. 이 기술을 활용하여 우주공간을 만들고, 태양계 행성들을 배치하여 웹페이지 상에 구현해보고 싶었습니다.

### Tech
 - React.js, TypeScript
 - Three.js, React Three Fiber

### 소개

1. 우주공간 그리기
<br>

![image](https://github.com/ykkim97/tourKorea-search/assets/17917009/9fa855d7-ea89-4567-aada-8cc18f185f31)

 - 검은 배경에 랜덤하게 Stars 컴포넌트를 배치하여 우주공간에 있는 별을 구현하였습니다.

2. 행성 모델 배치
<br> 

![image](https://github.com/ykkim97/tourKorea-search/assets/17917009/e0783648-aef7-4617-8641-c4cc25864ec6)

 - 일정한 간격을 두고 행성 모델을 로드하였습니다.

3. 카메라 배치 및 시점변경 기능
<br>
 - 화면에 배치된 행성을 클릭하거나 좌측 사이드메뉴를 클릭하면 해당 행성을 비교적 가깝게 볼 수 있도록 카메라의 시점을 변경하도록 구현하였습니다.

4. 우주공간 사운드 효과 추가

 - 우주공간에 어울리는 사운드 효과를 재생할 수 있도록 우측상단에 버튼을 생성하였습니다.

5. 행성의 자전 구현
 - 일정한 Speed값을 두어 행성모델의 중심좌표를 기준으로 자전하도록 구현하였습니다.

### 추가개발예정 사항

1. 공전 기능 추가
2. 행성 별로 자세한 정보를 확인할 수 있는 Modal 개발

### 회고

 - 페이지렌더링 속도를 확인해보니 초기에 모델을 로드하는 시간이 다소 오래걸리는 듯 하다.
 - 흠... 개선방법을 찾아봐야겠다.
