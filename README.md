# React Router(리액트 라우터)

## 1. 전통적인 방식과 SPA방식

### 1.1. 전통방식

- url을 바탕으로 입력하면, 서버에게 요청을 하면 브라우저는 해당 페이지를 client에게 보여준다.

![SPA_1]()

### 1.2. SPA방식

- 하지만 리액트에서 SPA로 기존의 서버로부터 해당 url에 대한 데이터를 받아왔지만, 이제는 하나의 큰 App을 받아온다.
- 서버로부터 전체 묶음을 받아온 후에 브라우저에서 url을 따라서 어떤 것을 보여줄지를 결정하게 된다.

![SPA_2]()

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
