# 2024/11/13 13주차 파트 3

## 라우팅

react-router 사용 예정

- 로그인 /login
- 회원가입 /signup
- 비밀번호 초기화 /reset

---

- 도서 목록 /books
- 도서 상세 /books/{id}
- 장바구니 /cart
- 주문서 작성 /order
- 주문 목록 /orderlist

## 데이터 흐름

### API 요청 플로우

```text
   View    ->    Hooks    -> Query Library (Optional) ->     Fetcher     -> API Server
Header.tsx -> useCategory ->                          -> category.api.ts ->
```
