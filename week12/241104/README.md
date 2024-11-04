# 2024/11/04 12주차 파트 1

프론트엔드 심화 과정 시작

상태 관리와 비동기 처리, React (TypeScript) 기반의 동적 UI 개발

`vite` 사용

## 설치

```console
npm init vite
```

React + TypeScript로 구성

## 상태 관리 라이브러리

State, Props로 여러 컴포넌트와 상태를 공유함

하지만 앱이 커지면 관리가 힘들어지고 소스코드가 지저분해짐

### Redux

Redux는

1. Action 객체 Dispatch 함수
1. Reducer 함수로 전달
1. type에 따라 return 하는 값을 Redux Store에 있는 state에 업데이트가 됨
1. state가 업데이트 되면 React Component 리렌더링

순으로 작동함

## 타입 추론

TypeScript에서는 타입 추론을 할 수 없으면 개발자가 타입을 직접 지정할 수 있음

```ts
type RootState = ReturnType<typeof store.getState>

const logger = useSelector((state: RootState) => state.logger);
```

```ts
interface Obj<T> {
    name: T;
}

interface State {
    state: {
        data: string,
        loading: boolean,
    }
}

const obj: Obj<State> = {
    name: {
        state: {
            data: 'abc',
            loading: false,
        }
    }
}
```
