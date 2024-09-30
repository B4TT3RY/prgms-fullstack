# 2024/08/28 3주차 파트 4

## 백엔드 구조

```text
         요청         요청                   요청
클라이언트 <---> 웹서버 <---> 웹 어플리케이션 서버 <---> 데이터베이스
         응답         응답                   응답
```

## API란?

Application Programming Interface

## Interface란?

중간에서 양쪽에 있는 친구들을 중재/매개체가 되어주는 역할

- GUI: Graphical User Interface
  - 컴퓨터(프로그램)에게 명령을 내릴 때, 그래픽을 사용해서 명령을 내리는 방식
- CLI: Command Line Interface
  - 명령어 문장(줄)으로 컴퓨터에게 명령을 내리는 방식

## Rest API

HTTP 규약을 잘 따른 API

## Restful API

HTTP 규약을 매우 잘 따른 API

## Uniform Resource Locator

인터넷 상에서 웹 페이지가 어디 있는지 "위치"를 알려주는 것 뿐 아니라, 데이터 연산을 해달라고 서버에 요청을 보내는 방법

## URL + Method 연습

URL 연습

- <http://localhost:8888/post> product - 상품 등록 -> "POST" /product
- <http://localhost:8888/select_all_products> - 전체 상품 조회 -> "GET" /products
- <http://localhost:8888/DeleteAllProducts> - 전체 상품 삭제 -> "DELETE" /products

## REST API URL 규칙

- 대문자 X, 소문자 O
- 언더바 X, 하이픈 O
- 마지막에 / 포함 X
- 행위 포함 X = 목적 포함 X
- 파일 확장자 포함 X
- 복수형 사용

## URL + Method 연습 2 (API 설계)

1. 상품 전체 조회 GET: <http://localhost:8888/products>
1. 상품 id 개별 조회 GET: /products/{id}, /products/1, /products/2, /products/3
1. 상품 개별 수정 PUT: /products/{id}

cf. 복수형으로 표한혀면 좋은 이유

- 상품"들" 중에 id 값을 가지는 개별 데이터
- 통일감
