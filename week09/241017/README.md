# 2024/10/17 9주차 파트 4

- `ensureAuthorization` 모듈화
- pagination 추가
- response 네이밍 컨벤션 camelCase로 변경

## `SQL_CALC_FOUND_ROWS`

```sql
SELECT SQL_CALC_FOUND_ROWS * FROM books LIMIT 4 OFFSET 0;
SELECT found_rows();
```

전체 rows 수를 임시로 저장하고 `found_rows()` 함수로 가져올 수 있음

`count()` 함수를 사용해 SELECT를 두번 날리는 것 보다 성능적으로 유리할 것

## 패키지 구조

1. Router: 경로와 HTTP method로 요청에 따른 경로를 찾아주는 역할
1. Controller: 길 매니저 - 요청을 환영
1. Service: 직접 일을 하고
1. Model: 데이터베이스와 소통 -> query 집합

## JWT

1. Access Token: jwt 발급할 때 나온 토큰
1. Refresh Token: 로그인 연장에 필요한 토큰

## 초 미니 프로젝트

- 개요
  - 랜덤 데이터를 생성해주는 외부 API를 기반으로 가짜 사용자 정보 생성
- 내용
    1. 랜덤 데이터 생성 API
    1. 가짜 사용자 정보를 생성하는 Express 웹/앱 API

### 랜덤 데이터 생성 API

- [faker](https://fakerjs.dev/)
- [mockaroo](https://www.mockaroo.com/)
