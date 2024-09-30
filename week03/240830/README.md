# 2024/08/30 3주차 파트 6

## express 설치

`npm i express`

## 포트 충돌이 발생 할 경우 (macOS)

```console
$ lsof -i :3000

COMMAND     PID USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
node      15542 ****   18u  IPv6 0xec5e42182b1f9a5b      0t0  TCP *:hbci (LISTEN)

$ kill -15 15542
```

혹은 포트 번호 변경

## express GET Method

```js
app.get(PATH, (req, res) => {
    res.send(RESPONSE);
});
```

## 객체란?

키(key)과 값(value)으로 구성된 프로퍼티(Property)들의 집합

express에서 데이터를 한번에 여러개를 보낼 수 없으니 하나의 객체로 만들어 보내야함

## json이란?

**J**ava**S**cript **O**bject **N**otation

```js
let person = {
    name: "songa",
    age: 20,
}
```

```js
let book = {
    title: "Node.js를 공부해보자",
    price: 20000,
    description: "이 책 왜 좋음? 김송아가 지음",
}
```

## express에서 json으로 response 하기

`res.send(RESPONSE)` 부분을 `res.json(RESPONSE)` 로 바꿔주면 됨

## URL Params 사용법

```js
app.get('/products/:n', (req, res) => {
    // /products/__ 빈칸에 올 값을 n이라는 변수에 담음
    // req.params
    res.json({
        num: req.params.n,
    });
});
```
