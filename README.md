# React Router(리액트 라우터)

## 1. 전통적인 방식과 SPA방식

### 1.1. 전통방식

- url을 바탕으로 입력하면, 서버에게 요청을 하면 브라우저는 해당 페이지를 client에게 보여준다.

![SPA_1](https://raw.githubusercontent.com/ohtaekwon/React-Routes-test/master/src/image/spa_1.png)

### 1.2. SPA방식

- 하지만 리액트에서 SPA로 기존의 서버로부터 해당 url에 대한 데이터를 받아왔지만, 이제는 하나의 큰 App을 받아온다.
- 서버로부터 전체 묶음을 받아온 후에 브라우저에서 url을 따라서 어떤 것을 보여줄지를 결정하게 된다.

![SPA_2](https://raw.githubusercontent.com/ohtaekwon/React-Routes-test/master/src/image/SPA_2.png)

### 1.3. SPA 라우팅 과정

1. 브라우저에서 최초의 `'/'` 경로로 요청을 하면,
2. `React Web App`을 내려준다.
3. 내려받은 React App에서 `'/'` 경로에 맞는 컴포넌트를 보여준다.
4. React App에서 다른 페이지로 이동하는 동작을 수행하면, 즉, 다른 경로로 이동하면,
5. 새로운 경로에 맞는 컴포넌트를 보여준다.

<br/>

## 2. 라우팅(Routing)

- 사용자가 요청한 URL에 따라 해당 URL에 맞는 페이지를 보여주는 것

### 2.1. 리액트는 SPA (Single Page Application) 방식

- 기존 웹 페이지 처럼(MPA 방식) 여러개의 페이지를 사용, 새로운 페이지를 로드하는 방식이 아니다.
- 새로운 페이지를 로드하지 않고 하나의 페이지 안에서 필요한 데이터만 가져오는 형태를 가진다.
- `React-Router`는 신규 페이지를 불러오지 않는 상황에서 각각의 url에 따라 선택된 데이터를 하나의 페이지에서 렌더링 해주는 라이브러리 라고 볼 수 있다.

<br/>

## 3.리액트 라우터(React Router)

- 사용자가 입력한 주소를 감지하는 역할을 한다.
- 여러 환경에서 동작할 수 있도록 여러 종류의 라우터 컴포넌트를 제공한다.
- 이중 가장 많이 사용하는 라우터 컴포넌트는 `BrowserRouter`와 `HashRouter`이다.

### 3.1. 종류

- `BrowserRouter` : HTML5를 지원하는 브라우저의 주소를 감지한다.
- `HashRouter` : 해시 주소를 감지한다.
  - e.g. `https://tk.com/#/home

<br>

## 4. 설치

- npm

```shell
npm install react-router-dom
```

- cra에 기본 내장된 패키지가 아니다.
- `react-router-dom`은 Facebook의 공식 패키지가 아니다.
- 가장 대표적인 라우팅 패키지이다.

## 5. 특정 경로에서 보여줄 컴포넌트를 준비한다.

- `'/'` : Home 컴포넌트
- `'/profile'` : Profile 컴포넌트
- `'/about'` : About 컴포넌트
- Home.jsx, Profile.jsx, About.jsx ...

## 6. BrowserRouter, Route, Routes

```jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
```

- `Route` 컴포넌트에 경로(path)와 컴포넌트(component)를 설정하여 나열해준다.
- 나열된 `Route` 들을 `BrowserRouter`로 감싸준다.- 브라우저에서 요청한 경로에 `Route`의 path가 들어있으면, 해당 컴포넌트를 보여주도록 설정한다.
  - `path` : 경로를 지정한다.
  - `element` : 보여줄 컴포넌트를 지정한다.

<br/>

## 7. Dynamic 라우팅

- 두 가지 빙밥으로 동적 라우팅을 적용할 수 잇다.

### 7.1. 방법 1 - 중첩 라우터를 사용하고, 중첩 라우터에서 Outlet컴포넌트를 사용

```jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Navs from "./components/Navs";
import NavLinks from "./components/NavLinks";

function App() {
  return (
    <BrowserRouter>
      <Navs />
      <NavLinks />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<Profile />} >
          <Route path=":id" element={<ProfilePost/>}>
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### 7.2. 방법 1 - 중첩 라우터를 사용하고, 중첩 라우터에서 Outlet컴포넌트를 사용

## 8.Props 사용

### 8.1. pathname 가져오기

- 기존의 방법인 props에서 확인하는 것이 아니라, `useLocataion`을 사용하여 `pathname`을 받아온다.

### 8.2. params 가져오기

- 이것도 또한, props에서 확인하는 것이 아니라, `useParams`에서 호강ㄴ한다.

## 어려웠던 부분

- 많은 부분들에 있어서 v6때 변경이 된 사항들이 존재한다.

### `<Switch>` 대신 `<Routes>`

- 먼저, 기존의 `<Switch>` 를 통해서 경로를 감싸주는 방식 대신에 `<Routes>` 를 사용하는 방식으로 변경되었다.

### 복수의 라우팅을 막는 `exact`

- 기존의 복수의 라우팅을 막는 `exact` 방식이 있었지만, 이제는 더이상 사용하지 않고, 여러 라우팅을 매칭하고 싶은 겨웅에는 URL 뒤에 `*` 을 사용한다.
- 또한, `component`로 해당 컴포넌트를 넣는 것 대신에, `element`로 컴포넌트를 전달한다.

### Props의 사용

- 컴포넌트들에 Props를 활용해 pathname 등을 확인할 수 있었다.
- 하지만, 그러한 방법들을 없애고 `useLocation` , `useParams` 등 다양한 `Hook` 등을 사용하여 원하는 정보를 얻을 수 있다.
- 따라서 이러한 `Hook` 에 대한 사전 공부가 필요하다

### useHistory 대신 useNavigate

- `useHistory`는 Link태그와 유사한 작업을 할 수 있게 도와주는 훅이다.
- useHistory를 사용하면, `URL` 끝에 `/home` 을 추가함으로써, 페이지 이동이 가능했다.
- 하지만 v6부터는 navigate라는 명칭으로 사용한다.
- `history.push`와 `history.replace` 모두 `navigate`라는 명칭으로 사용한다.

## 참고

- [[React] react-router-dom v6 업그레이드 되면서 달라진 것들](https://velog.io/@soryeongk/ReactRouterDomV6)
