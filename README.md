# [React-animations (Demo)](https://react-app-animations.netlify.app/)

:point_up_2: 제목을 클릭하면 배포된 사이트를 확인하실 수 있습니다.

<br />

## :pencil2: 학습 목적

- 리액트로 [framer motion](https://www.framer.com/motion/)을 활용하여 실습해보기.

<br />

## :pushpin: 사용한 라이브러리

<img src="https://img.shields.io/badge/Framer motion-0055FF?style=flat-round&logo=framer&logoColor=white"/> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat-round&logo=reactrouter&logoColor=white"/> <img src="https://img.shields.io/badge/styled components-DB7093?style=flat-round&logo=styledcomponents&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-round&logo=typescript&logoColor=white"/>

<br />

## :book: 학습 내용

### 1. Basic Animations

- Framer motion 동작원리 및 기본 사용 방법
- `/basic`페이지가 랜더링되면 애니메이션이 보입니다.

![basicAnimations](https://user-images.githubusercontent.com/64674174/235283643-fd06b7e8-8d6a-4744-8d8f-3f3db255dc97.gif)

### 2. Variants

- 깔끔한 코드와 유지보수성 좋은 Variants 동작원리 및 기본 사용 방법
- `/variants`페이지가 랜더링되면 애니메이션이 보입니다.
- Box안에 4개의 원이 각각 시간격차를 두고 보여지는 애니메이션
- 부모요소의 initial, animate의 키값을 자식요소에게도 똑같은 키값을 설정하면 자식요소에게도 상속됩니다.

![variants](https://user-images.githubusercontent.com/64674174/235283706-a4a0d993-92d2-4f81-a449-4bd559dca831.gif)

### 3. Gesture

- Framer motion의 `drag-`와 `while-`의 관련된 속성 동작원리 및 기본 사용 방법
- `/gestures`페이지가 랜더링되고 가운데 흰색 네모도형을 드래그합니다.
- useRef의 적용 원리
  - Vanilla JS 에서 `document.querySelector`와 비슷한 역할을 합니다.

![gesture](https://user-images.githubusercontent.com/64674174/235283767-6586fc23-1220-4193-9a11-55405b4b030c.gif)

### 4. Motion values

- Framer motion의 `useMotionValue`, `useTransform`와 `useViewportScroll`의 관련된 속성 동작원리 및 기본 사용 방법
- `/motionValues`페이지가 랜더링되고 가운데 흰색 네모도형을 좌우로 드래그하거나, 상하로 스크롤합니다.
- `useTransform(변수명, 개체의 위치[], 개체의 형태[])`

![motionValue](https://user-images.githubusercontent.com/64674174/235284696-660b78f0-abba-4388-b4b0-0c5f9d2d9abd.gif)

### 5. SVG Animation

- SVG animation을 사용하기위한 `motion.path` 동작원리 및 기본 사용 방법
- `/svgAnimation`페이지가 랜더링되면 SVG 아이콘의 애니메이션이 보입니다.
- 원하는 개체에 따로 애니메이션을 설정할 수 있습니다.
  - `default`: 기본 설정 애니메이션 (전체)
  - `fill`: 원하는 개체에 설정한 애니메이션
  
![SVGAnimation](https://user-images.githubusercontent.com/64674174/235284744-5cba5212-4883-4019-b047-528e2c797449.gif)

### 6. AnimatePresence

- Framer motion의 `AnimatePresence`의 동작원리 및 기본 사용 방법
- `/animationPresence`페이지가 랜더링되고 가운데 'click'버튼을 클릭하면 애니메이션이 보입니다.
- `AnimatePresence`는 애니메이션 효과를 줄 요소( `initial`, `animate`, `exit` )를 포함한 부모요소여야 합니다.
  - `initial`: 화면 랜더링 시, 보이는 애니메이션 처음 설정 값
  - `animate`: 애니메이션을 보일 중간 설정 값
  - `exit`: 애니메이션을 마무리할 마지막 설정 값
- 만약, 애니메이션에 조건문이 있어야한다면 `AnimatePresence`는 그 조건문도 포함한 부모요소여야 합니다.

![animatePresence](https://user-images.githubusercontent.com/64674174/235284821-4c98e7a6-d27e-417c-980c-b12410c63ce3.gif)

### 7. Slider

- Framer motion를 활용한 슬라이더
- `/slider`페이지가 랜더링되고 가운데 'prev', 'next' 버튼을 클릭하면 애니메이션이 보입니다.
- 필요한 애니메이션은 따로 `custom` 적용
- `custom`은 애니메이션을 적용할 부모요소, 자식요소에게 줍니다.

![slider](https://user-images.githubusercontent.com/64674174/235284877-abeef5ea-de02-4bec-9235-e585b781882a.gif)

### 8. Modal

- Framer motion를 활용한 팝업 모달창
- `/modal`페이지가 랜더링되고 가운데 박스들을 하나하나 클릭하면 해당박스 애니메이션이 보입니다.
- 모달창을 적용할 박스와 해당 박스를 클릭하면 활성화 될 박스에 같은 `layoutId`를 줍니다.

![modal](https://user-images.githubusercontent.com/64674174/235284947-e7b38421-c5c6-4f9d-8da2-22c4609aaab5.gif)

### 9. Etc

- Framer motion의 `layoutId`를 활용한 애니메이션
- `/etc`페이지가 랜더링되고 아무데나 클릭하면 모양이 바뀌며 각각의 박스를 넘나들며 이동하는 파란 원이 보입니다.
- 애니메이션을 적용할 요소에 같은 `layoutId`줍니다.
  - HTML의 `<input id="inputId"/>`와 `<label for="inputId"></label>`나 `input`의 `name`과 비슷한 역할을 합니다.
  
![etc](https://user-images.githubusercontent.com/64674174/235285019-8d453c20-335b-4bde-b20c-46e5f3811d1d.gif)

