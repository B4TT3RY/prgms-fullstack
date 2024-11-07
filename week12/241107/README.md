# 2024/11/07 12주차 파트 4

Drag & Drop 기능을 구현함

Firebase를 사용해서 Auth 기능을 구현함

GitHub와 Firebase를 사용해 웹앱을 배포함

## react-beautiful-dnd

리액트에서 Drag & Drop 기능을 사용할 수 있게 해주는 라이브러리

```tsx
<DragDropContext>
    <Droppable>
        <Draggable />
        <Draggable />
    </Droppable>
</DragDropContext>
```

구조가 되어야 사용할 수 있음

왜인지 모르겠으나 `StrictMode`가 활성화 되어있으면 작동하지 않음
