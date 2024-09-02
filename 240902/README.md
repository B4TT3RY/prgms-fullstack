# 2024/09/02 4주차 파트 1

## `parseInt()`

자바스크립트는 문자로 된 숫자도 숫자로 처리하고 있긴 함

```js
req.params.n;

{"num": "8"}
```

```js
parseInt(req.params.n);

{"num": 8}
```

## 파라메터

```js
// /@blabla
// req.params.nickname
app.get('/:nickname', (req, res) => {
    const p = req.params;
    ...
});
```

## 쿼리

```js
// /watch?v=test&t=123t
// req.query.v
// req.query.t
app.get('/watch', (req, res) => {
    const q = req.query;
    ...
});
```

## 비구조화

배열이나 객체 속성을 해체하여 개별 변수에 값을 담을 수 있는 JavaScript 표현식

### 객체의 비구조화

```js
const { v, t } = req.query;
```

### 배열의 비구조화

```js
const array = [1, 2, 3, 4, 5];
const [ , num2, num3, , num5 ] = array;
```

## 자바스크립트 네이밍 규칙

### kebab-case

- demo-api
- object-api-demo
- 폴더, 파일
  - 두개 이상의 단어를 합쳐서 쓸 때, 첫번째 단어와 두번째 단어 사이에 하이픈

### camelCase

- channelTitle
- videoNum
- 변수, 함수
  - 두개 이상의 단어를 합쳐서 쓸때, 두번째 단어의 첫글자를 대문자로

### snake_case

### PascalCase

## Map

키-값 으로 이루어져있으며, 삽입 순서를 기억하고 있음

```js
map.set(key, value);
map.get(key);
map.has(key);
```
