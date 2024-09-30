# 2024/09/25 6주차 파트 3

## `next()`

```js
const validate = (req, res) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
        return res.status(400).json(err.array());
    }
}

router
    .route('/')
    .get(
        [
            body('userId').notEmpty().isInt().withMessage('숫자 입력 필요'),
            validate
        ],
        (req, res) => {
            ...
```

형식으로는 요청이 제대로 작동하지 않음

express에서는 `next()` 라는 함수로 다음 미들웨어를 호출하는 기능이 있음

이 기능을 사용해야 정상적으로 요청을 처리할 수 있음

validate 함수를 아래와 같이 수정해주면 됨

```js
const validate = (req, res, next) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
        return res.status(400).json(err.array());
    }
    return next();
}
```

## 인증과 인가

- 인증 (=로그인)
  - Authentication
  - 유저가 누구인지 확인하는 절차
- 인가
  - Authorization
  - 유저에 대한 권한을 허락하는 것

## 쿠키 vs 세션 vs JWT

### 쿠키

로그인 시 서버가 쿠키를 제공, 클라이언트에 저장 후 요청 시 마다 서버에게 전달

Stateless => RESTful 하다

보안에 취약함

### 세션

서버에 저장 후 클라이언트에게는 세션 ID만 제공, 세션 ID만 주고받음

보안에는 좋으나 서버에 저장해야 함 => 서버 저장 공간 필요

Stateless X

### JWT

JSON Web Token

### 개념

JSON 형태의 데이터를 안전하게 전송하기 위한 (웹에서 사용하는) 토큰

= 토큰을 가진 사용자가 증명하기 위한 수단

### 장점

- 보안에 강함 <= 암호화가 되어있음
- 서버가 상태를 저장하지 않음
- Stateless
- HTTP 특징을 잘 따름
- 서버의 부담을 줄여주 수 있음

### 구조

#### Header

토큰을 암호화하는데 사용한 알고리즘, 토큰의 형태

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

#### Payload

사용자 정보 (이름, 주소, 핸드폰, ..., *비밀번호 X*)

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}
```

#### Signature

페이로드 값이 바뀌면 서명값도 통째로 바뀜

이 서명 때문에 JWT를 믿고 쓸 수 있음

```js
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  your-256-bit-secret
)
```

#### Encoded

```text
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

## JWT 인증/인가 절차

1. 로그인 요청
    - 클라이언트 -> 서버
    - POST /login
    - Body에 username과 password 전송
1. 내부 로직 확인
    - 서버
1. JWT 토큰 발행
    - 서버
    - JWT 발행 시점 저장
1. 로그인
    - 서버 -> 클라이언트
    - JWT 토큰 전달
    - 다음 요청에서는 클라이언트가 JWT 토큰을 서버에 전달해야 함
1. 다른 요청
    - 클라이언트 -> 서버
    - Header로 JWT 토큰 전달
1. 서명 확인
    - 서버

## JWT 구현

강의에서는 [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) 사용

### 서명

```js
const jwt = require('jsonwebtoken');
const token = jwt.sign({ foo: 'bar' }, 'shhhh'); // HMAC SHA256
console.log(token); // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE3MjcyNTMzMzZ9.G3Tp9IZAbqtIIjM8sf1DKCgYcv0Qk_sbBNC5pJJFpWk
```

### 검증

```js
const decoded = jwt.verify(token, 'shhhh');
console.log(decoded); // { foo: 'bar', iat: 1727253595 }
```

iat: Issued At Token, 토큰 발행 시각

## `.env`

개발을 하다가 포트 넘버, 데이터베이스 계정, 암호키 등 외부에 유출되면 안되는 중요한 값들을 환경변수로 관리

코드 내에 Secret Key가 존재하면 위험할 수 있기 때문에 `.env` 로 분리

강의에서는 [dotenv](https://www.npmjs.com/package/dotenv) 사용

```shell
PRIVATE_KEY='shhhh' # JWT 암호키
```

```js
const dotenv = require('dotenv');
dotenv.config();

console.log(process.env.PRIVATE_KEY); // shhhh
```

## express 쿠키

```js
res.cookie('key', value);
```

![로그인 결과 쿠키](image.png)

## Secure

- HTTP
  - `http://localhost:3000/login`
- HTTPS (Secure)
  - `https://localhost:3000/login`

## HttpOnly Cookie

프론트엔드가 아닌 API 호출만 허용하는 설정 (XSS 공격 방지)

```js
res.cookie('token', token, {
    httpOnly: true,
});
```

## 쿠키 유효기간 설정

`60, 2 days, 10h, 7d` 등의 문법 사용 가능

```js
const token = jwt.sign({
    email: loginUser.email,
    name: loginUser.name,
}, process.env.PRIVATE_KEY, {
    expiresIn: '30m',
    issuer: 'songa',
});
```

### 유효 기간 설정한 Payload

`exp` 키가 추가됨

```json
{
  "email": "kim@mail.com",
  "name": "kimgsonga",
  "iat": 1727270767,
  "exp": 1727272567,
  "iss": "songa"
}
```
