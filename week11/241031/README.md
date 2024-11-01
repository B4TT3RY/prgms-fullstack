# 2024/10/31 11주차 파트 4

## 클래스형 컴포넌트

리액트 초기에 주로 사용했던 컴포넌트

```tsx
import { Component } from 'react';

class ClassComponent extends Component {
    render() {
        return (
            <div>클래스형 컴포넌트</div>
        )
    }
}

export default ClassComponent;
```

## 함수형 컴포넌트

최근 리액트가 16버전 이후로 권장하는 컴포넌트

```tsx
function FunctionComponent() {
    return (
        <div>함수형 컴포넌트</div>
    )
}

export default FunctionComponent;
```

```tsx
const  FunctionComponent = () => {
    return (
        <div>함수형 컴포넌트</div>
    )
}

export default FunctionComponent;
```

## State

```tsx
import { useState } from 'react';

...

const [ todos, setTodos ] = useState<string[]>(['공부하기', '잠자기', '미팅하기']);
```

## 데이터 반복문 처리

for문은 사용할 수 없기 때문에 map을 사용해야 함

```tsx
{todos.map((todo, index) => (
    <li key={todo.id}>
        {todo.text}
    </li>
))}
```

key값을 지정하는 이유는 변동사항을 효율적으로 관리하려고 하기 때문
