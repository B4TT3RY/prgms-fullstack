# 2024/10/14 9주차 파트 1

## `Error: Column 'delivery_id' cannot be null`

콜백 함수 안에서 `console.log`를 찍어보면 값이 나옴

하지만 콜백 함수 밖에서 `console.log`를 찍어보면 `undefined`가 나옴

코드가 **비동기**로 실행되었기 때문

- 비동기 발생
  - 실행되는 코드가 기다려야 하는 시간이 생긴다는 의미
  - ex. `setTimeout()`, `setInterval()`, `query()`
- 비동기 처리
  - 비동기가 필요하지 않을 때가 있음
  - 예를 들어 `query()`
  1. **콜백 함수**
  1. Promise(resolve, reject)
  1. then & catch
  1. **ES2017 Promise => async, await**

## Promise

```js
// executor가 성공하면 resolve(결과), 실패하면 reject(에러)
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve('완료!'), 3000);
});

// Promise의 기본 메소드
// Promise가 할 일을 다 한 후 호출하는 함수
promise.then(
    function(result) { // resolve
        console.log(result);
    },
    function(error) { // reject
        console.error(error);
    });
```

## Promise Chaining

```js
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve('완료!'), 3000);
})
    .then(
        function(result) { // resolve
            console.log(result);
            return result + '!!!!!';
        },
        function(error) { // reject
            console.error(error);
        })
    .then(
        function(result) { // resolve
            console.log(result);
            return result + '!!!!!';
        },
        function(error) { // reject
            console.error(error);
        })
    .then(
        function(result) { // resolve
            console.log(result);
        },
        function(error) { // reject
            console.error(error);
        });
```

## async-await

### async

Promise 객체를 좀 더 쉽고 편하게 사용할 수 있는 문법

비동기 처리가 쉬워짐

```js
function f() {} // 일반 함수
async function f() {} // async 함수
```

```js
async function f() {
    return 7;
}

f().then(
    function (result) {
        console.log(`Promise resolve: ${result}`);
    }, function (error) {
        console.log(`Promise reject: ${error}`);
    }
);
```

async 함수는 무조건 Promise 객체를 반환

만약 반환값이 Promise가 아니면 Promise.resolve()로 감싸고 반환

### await

await은 async 함수 안에서만 동작함

await은 `Promise.then()` 을 좀 더 쉽게 사용할 수 있음

```js
async function f() {
    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve('완료!'), 3000);
    });

    let result = await promise;
    console.log(result);
}

f();
```
