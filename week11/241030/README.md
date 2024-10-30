# 2024/10/30 11주차 파트 3

## React

- 자바스크립트 라이브러리
- 사용자 인터페이스를 만들기 위해 페이스북(조던 워크)에서 개발
- 싱글 페이지 어플리케이션 및 모바일 어플리케이션 개발 가능
- 2011년 페이스북의 뉴스피드에 처음 적용, 2012년 인스타그램에 적용
- 2013년 발표 후 오픈소스화

### 동작 원리

- 초기 렌더링
- 가상 DOM 변경
- 재조정
- 실제 DOM 업데이트

### 설치 방법

- JavaScript

    ```console
    npx create-react-app 프로젝트이름
    ```

- TypeScript

    ```console
    npx create-react-app 프로젝트이름 --template typescript
    ```

## JSX 문법

```tsx
function App() {
    return (
        <div className='App-header'>
            <h1>Hello, 리액트!</h1>
            <p>반갑습니다.</p>
        </div>
    )
}
```

- 최상위 부모 태그가 무조건 존재해야 함
  - 주로 `div`를 사용하지만 `Fragment (<></>)`를 사용해도 됨

### 삼항 연산자

```tsx
function App() {
    let name = '리액트';

    return (
        <div>
            { name === '리액트' ? (<h1>YES</h1>) : (<h1>NO</h1>) }
        </div>
    )
}
```

### OR 연산

```tsx
function App() {
    let port = undefined;

    return (
        <div>
            { port || '3000' }
        </div>
    )
}
```

### Inline Styling

```tsx
function App() {
    const style = {
        backgroundColor: 'black',
        color: 'white',
        fontSize: '48px',
        fontWeight: 'bold',
        padding: '20px',
    };

    return (
        <div style={style}>
            <h1>Hello, React!</h1>
            <p>반갑습니다.</p>
        </div>
    )
}
```

### Self Closing

```tsx
function App() {
    return (
        <div style={style}>
            <br />
            <input />
        </div>
    )
}
```

### 주석

```tsx
function App() {
    return (
        <div style={style}>
            { /* 주석 */ }
        </div>
    )
}
```
