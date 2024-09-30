# 2024/09/27 6주차 파트 5

## 회원 API 설계

1. 회원가입

    |Key|Value|
    |---|---|
    |Method|POST|
    |URI|/join|
    |HTTP Status Code|201 Created|
    |Request Body|email, password|
    |Response Body||

1. 로그인

    |Key|Value|
    |---|---|
    |Method|POST|
    |URI|/login|
    |HTTP Status Code|200 OK|
    |Request Body|email, password|
    |Response Body|JWT Token|

1. 비밀번호 초기화 요청

    |Key|Value|
    |---|---|
    |Method|POST|
    |URI|/reset|
    |HTTP Status Code|200 OK|
    |Request Body|email|
    |Response Body||

1. 비밀번호 초기화 (=수정)

    |Key|Value|
    |---|---|
    |Method|PUT|
    |URI|/reset|
    |HTTP Status Code|200 OK|
    |Request Body|password|
    |Response Body||

## 도서 API 설계

1. 전체 도서 조회

    이미지 경로 필요

    |Key|Value|
    |---|---|
    |Method|GET|
    |URI|/books|
    |HTTP Status Code|200 OK|
    |Request Body||
    |Response Body|[{ id: "도서 ID", title: "도서 제목", summary: "요약 설명", author: "도서 작가", price: "가격", likes: "좋아요 수", pubDate: "출간일" }, ...]|

1. 개별 도서 조회

    이미지 경로 필요

    |Key|Value|
    |---|---|
    |Method|GET|
    |URI|/books/:id|
    |HTTP Status Code|200 OK|
    |Request Body||
    |Response Body|{ id: "도서 ID", title: "도서 제목", category: "카테고리", format: "포맷", isbn "ISBN", summary: "요약 설명", description: "상세 설명", author: "도서 작가", pages: "쪽 수", index: "목차", price: "가격", likes: "좋아요 수", liked: Boolean, pubDate: "출간일" }|

1. 카테고리별 도서 목록 조회

    - new: true -> 신간 조회 (기준: 출간일 30일 이내)
    - new: false -> 전체 조회

    이미지 경로 필요

    카테고리 ID는 어떻게 알고 보내줄지?

    |Key|Value|
    |---|---|
    |Method|GET|
    |URI|/books?categoryId={categoryId}&new={boolean}|
    |HTTP Status Code|200 OK|
    |Request Body||
    |Response Body|[{ id: "도서 ID", title: "도서 제목", summary: "요약 설명", author: "도서 작가", price: "가격", likes: "좋아요 수", pubDate: "출간일" }, ...]|

## 좋아요 API 설계

1. 좋아요 추가

    |Key|Value|
    |---|---|
    |Method|POST|
    |URI|/likes/:bookId|
    |HTTP Status Code|200 OK|
    |Request Body||
    |Response Body||

1. 좋아요 취소

    |Key|Value|
    |---|---|
    |Method|DELETE|
    |URI|/likes/:bookId|
    |HTTP Status Code|200 OK|
    |Request Body||
    |Response Body||

## 장바구니 API 설계

1. 장바구니 담기

    |Key|Value|
    |---|---|
    |Method|POST|
    |URI|/cart|
    |HTTP Status Code|201 Created|
    |Request Body|bookId, count|
    |Response Body||

1. 장바구니 조회

    |Key|Value|
    |---|---|
    |Method|GET|
    |URI|/cart|
    |HTTP Status Code|200 OK|
    |Request Body||
    |Response Body|[{ bookId: "도서 ID", title: "도서 제목", summary: "도서 요약", count: "수량" price: "가격" }, ...]|

1. 장바구니 제거

    |Key|Value|
    |---|---|
    |Method|DELETE|
    |URI|/cart/:bookId|
    |HTTP Status Code|200 OK|
    |Request Body||
    |Response Body||

1. (장바구니에서 선택한) 주문 "예상" 상품 목록 조회

    |Key|Value|
    |---|---|
    |Method|GET|
    |URI|/...|
    |HTTP Status Code|200 OK|
    |Request Body|[ cartItemId, cartItemId, ... ]|
    |Response Body|[{ cartItemId: "장바구니 도서 ID", bookId: "도서 ID", title: "도서 제목", summary: "도서 요약", count: "수량" price: "가격" }, ...]|
