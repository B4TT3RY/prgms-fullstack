# 2024/09/03 4주차 파트 2

- Map의 Value에 Object를 넣을 수 있음

## 객체에 필드 추가

```js
let product = db.get(id);
product.id = id;
product['id'] = id;
```

## 웹 프레임워크

내가 만들고 싶은 웹 서비스를 구현하는 데 필요한 모든 일을 틀 안에서 할 수 있는 것

## Express Generator

```console
npx express-generator
```

명령어를 사용해 express 기본 구조를 간편하게 생성할 수 있음

## 자바스크립트 함수 4가지 종류

```js
function add1(x, y) {
    return x + y;
}

let add2 = function(x, y) {
    return x + y;
}

const add3 = (x, y) => {
    return x + y;
}

var add4 = (x, y) => x + y;
```
