# 2024/10/16 9주차 파트 3

## JWT Cookie

`Authorization` 헤더에 JWT 토큰을 넣고 express에서 `req.headers['authorization']` 으로 JWT 토큰을 가져올 수 있음

## 예외 처리

JWT 유효기간이 지나 오류가 나는 것을 핸들링 하기 위해 예외 처리를 함

`try/catch` 문 사용 예정

1. TokenExpiredError
    - 유효기간이 지난 토큰
1. JsonWebTokenError
    - 문제가 있는 토큰

## try/catch

수많은 (개발자가 예상하지 못한) 에러를 처리하는 문법

```js
try {
    // 코드 실행
} catch (err) {
    console.error(err);
}
```

try 구문의 코드를 실행하다가 에러가 발생하면 try 코드를 멈추고 catch 구문 코드 실행

## 에러 객체

```js
try {
    username;
} catch (err) {
    console.log(err.name); // ReferenceError
    console.log(err.message); // username is not defined
}
```

## throw 연산자

```js
throw new Error('메시지');
```

```js
const string = '{"num1": 1}'

try {
    const json = JSON.parse(string);
    
    if (!json.name) {
        throw new SyntaxError('입력 값에 이름이 없습니다.');
    }

    let name = json.name;
    console.log(name);
} catch (err) {
    console.log(err.name);
    console.log(err.message)
}
```

## instanceof

객체가 특정 클래스에 속하는지 확인할 수 있음

```js
if (authorization instanceof jwt.TokenExpiredError) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
        message: '로그인 세션이 만료되었습니다. 다시 로그인 하세요.',
    });
}
```
