# 2024/11/20 14주차 파트 3

## 모킹 서버 작성

[msw](https://mswjs.io) 라이브러리 사용

msw는 Mock Service Worker의 줄임말

존재하지 않는 API에 대한 응답을 모킹함

## createPortal

사이드이펙트로 인해 컴포넌트를 다른 곳에 띄워야 할 경우

```tsx
return createPortal(
    <ModalStyle>
    </ModalStyle>,
    document.body
)
```

를 하게 되면 `body` 태그 끝에 컴포넌트가 생김
