# 2024/09/05 4주차 파트 4

## 전체조회가 안되는 이유?

`db`의 타입이 Map이기 때문에 json으로 변환이 안되어 `{}` 만 반환됨

```js
res.json(db);
```

```json
{}
```

### `forEach` 사용 하는 방법

```js
let youtubers = {};

db.forEach((value, key) => {
    youtubers[key] = value;
})

res.json(youtubers);
```

```json
{
  "1": {
    "channelTitle": "채널십오야",
    "sub": "658만명",
    "videoNum": "1.3천개"
  },
  "2": {
    "channelTitle": "침착맨",
    "sub": "258만명",
    "videoNum": "7.2천개"
  },
  "3": {
    "channelTitle": "TEO 테오",
    "sub": "109만명",
    "videoNum": "1천개"
  }
}
```

### `Object.fromEntries` 사용 하는 방법

```js
res.json(Object.fromEntries(db));
```

```json
{
  "1": {
    "channelTitle": "채널십오야",
    "sub": "658만명",
    "videoNum": "1.3천개"
  },
  "2": {
    "channelTitle": "침착맨",
    "sub": "258만명",
    "videoNum": "7.2천개"
  },
  "3": {
    "channelTitle": "TEO 테오",
    "sub": "109만명",
    "videoNum": "1천개"
  }
}
```

## `forEach`

객체 또는 배열에서 요소를 하나 꺼낸 다음 매개변수로 그 요소를 전달하여 호출되는 콜백함수

```js
let arr = [1, 2, 3, 4, 5];
arr.forEach(function (a, b, c) {
    // a: value, b: index, c: array
    console.log(`a: ${a}, b: ${b}, c: ${c}`);
})
```

```js
let map = new Map();
map.set(7, 'seven');
map.set(9, 'nine');
map.set(8, 'eight');

map.forEach(function (a, b, c) {
    // a: value, b: key, c: map
    console.log(`a: ${a}, b: ${b}, c: ${c}`);
});
```

## `map`

```js
let arr = [1, 2, 3, 4, 5];

const forEachArray = arr.forEach((value) => {
    return value * 2;
});
console.log(arr); // [ 1, 2, 3, 4, 5 ]

const mapArray = arr.map((value) => {
    return value * 2;
});
console.log(arr); // [ 1, 2, 3, 4, 5 ]

console.log(`foreach로 return하면 ${forEachArray}`); // undefined
console.log(`map으로 return하면 ${mapArray}`); // 2, 4, 6, 8, 10
```

## 유튜버 데모 `DELETE` 추가

- 유튜버 개별 삭제 => `DELETE /youtubers/:id`
  - req: params.id
  - res: `{channelTitle}님, 아쉽지만 다음에 또 뵙겠습니다.`

## 리팩토링이란?

소프트웨어 코드 내부 구조를 변경하는 것

1. 이해하기 쉽게
1. 성능
1. 안정성을 높이기 위해

...

## 리팩토링은 언제 해야하는지?

1. 에러(문제점)이 n회 이상 발견되었을 때 (리팩토링을 하면서도 에러가 발견이 될 수 있음)
1. 기능을 추가하기 전 (ex. API URL 설계 수정)
1. 코드 리뷰할 때

- 배포 운영 직전에는 절대로 코드 수정이 일어나선 안됨

## 유튜버 데모 `전체 삭제` 추가

- 전체 유튜버 삭제 -> `DELETE /youtubers`
  - req: X
  - res: `전체 유튜버가 삭제되었습니다.`

## 유튜버 데모 `수정` 추가

- 개별 유튜버 수정 -> `PUT /youtubers/:id`
  - req: params.id, body < channelTitle
  - res: `{prevChannelTitle}님, 채널명이  {channelTitle}로 변경되었습니다.`

## HTTP 상태 코드

HTTP 안에 작성되어서 들어가는 상태

### 대표적인 HTTP 상태 코드

- 조회/수정/삭제 성공: 200
- 등록 성공: 201
- 찾는 페이지 없음 (URL에 맞는 API 없음): 404
- 서버가 죽었을 떄 (서버가 크리티컬한 오류를 맞았을 때): 500
