# 2024/09/06 4주차 파트 5

## Handler란?

HTTP Request가 날아오면 자동으로 호출되는 메소드

`app.get` 등의 함수에 들어가는 콜백 함수가 핸들러임

스프링에서는 컨트롤러, 노드에서는 콜백 함수 로 사용

## 배열에서 값 찾기

```js
const fruits = [
    { id: 1, name: 'Apple'},
    ...,
];
```

### forEach로 찾기

```js
let findFruit = {};
fruits.forEach((fruit) => {
    if (fruit.id == id) {
        findFruit = fruit;
    }
});
```

## `find()`로 찾기

```js
let findFruit = fruits.find((fruit) => fruit.id == id);
```

## Response에 HTTP Status 설정하는 방법

```js
res.status(STATUS_CODE).json(BODY);
```

## `==` vs `===`

```js
// 같다 출력
if (1 == '1') {
    console.log('같다');
} else {
    console.log('같지 않다');
}

// 같지 않다 출력
if (1 === '1') {
    console.log('같다');
} else {
    console.log('같지 않다');
}
```

두 값을 비교해서 같으면 true, 다르면 false를 리턴하지만

`==` 는 두 피연산자 값이 서로 타입이 다를 경우 자동으로 일부 피연산자의 타입을 변환한 후에 값을 비교함

`===` 는 두 피연산자 값의 타입이 다르더라도 변환하지 않고 있는 그대로의 값을 비교하는 방식으로 엄격하게 값을 비교함

## 유튜버 데모 API 예외처리 & 고도화

- 404: 찾는 리소스가 존재하지 않을 경우
- 400: 요청한 연산을 할 때 필요한 데이터가 덜 왔을 경우
- 201: 등록 성공

## 미니 프로젝트

### 회원

- 로그인 `POST /login`
  - req: body (id, pwd)
  - res: `{name}님 환영합니다`
- 회원 가입 `POST /register`
  - req: body (id, pwd, name)
  - res: `{name}님 환영합니다`
- 회원 정보 조회 `GET /users/:id`
  - req: URL (id)
  - res: id, name
- 회원 탈퇴 `DELETE /users/:id`
  - req: URL (id)
  - res: `{name}님 다음에 또 뵙겠습니다` or 메인 페이지

회원은 계정 1개당 채널 100개를 가질 수 있음

### 채널

- 채널 생성
- 채널 수정
- 채널 삭제

## 라우트

```js
app
    .route('/users/:id')
    .get((req, res) => { ... })
    .delete((req, res) => { ... })
```
