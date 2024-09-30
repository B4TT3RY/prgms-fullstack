# 2024/09/09 5주차 파트 1

## 빈 객체를 확인하는 법

1. `Object.keys()` < 강사님 추천!
1. `for in` 문 사용
1. `lodash` 라이브러리 사용, `isEmpty` 함수 사용

### `Object.keys()`

```js
const emptyObj = {};
const obj = { message: 'Not Empty' };

console.log(Object.keys(emptyObj)); // []
console.log(Object.keys(obj)); // [ 'message' ]
```

```js
const str1 = 'one';
const str2 = '';

console.log(Object.keys(str1)); // [ 0, 1 , 2 ]
console.log(Object.keys(str2)); // []
```

문자열도 객체이기 때문에 작동함

```js
function isEmpty(obj) {
    return Object.keys(obj).length === 0
}
```

와 같은 함수를 만들어서 사용

`obj`가 `Object` 타입인지 확인하는 방법은

```js
obj.constructor === Object
```

로 확인할 수 있음

## 채널 API 설계

- 채널 생성: `POST /channels`
  - req: body (channelTitle)
  - res: 201 `{channelTitle}님 채널을 응원합니다.`
- 채널 수정: `PUT /channels/:id`
  - req: URL (id), body (channelTitle)
  - res: 200 `채널명이 성공적으로 수정되었습니다. 기존: {} -> 수정 {}`
- 채널 개별 삭제: `DELETE /channels/:id`
  - req: URL (id)
  - res: 200 `{channelTitle} 채널이 정상적으로 삭제되었습니다.`
- 채널 전체 조회 `GET /channels`
  - req: X
  - res: 200 채널 전체 데이터 list, json array
- 채널 개별 조회: `GET /channels/:id`
  - req: URL (id)
  - res: 200 채널 개별 데이터
