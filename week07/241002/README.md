# 2024/10/02 7주차 파트 3

## [http-status-codes](https://www.npmjs.com/package/http-status-codes) 모듈

HTTP Status Code를 미리 선언하고 정리하여 간편하게 사용할 수 있는 모듈

```js
const { StatusCodes } = require('http-status-codes');
...
conn.query(sql, values, (err, results) => {
    if (err) {
        console.log(err);
        return res.status(StatusCodes.BAD_REQUEST).end();
    }
    
    res.status(StatusCodes.CREATED).json(results);
});
```

## Node.js 패키지(파일) 구조

- app.js: 프로젝트의 메인 라우터 역할
- /routes
  - /users.js: 하위 라우터 역할
  - /books.js: 하위 라우터 역할

### 라우터가 로직까지 수행할 때의 단점

- 프로젝트 규모가 커질수록 코드가 복잡해짐
- 가독성 X
- 트러블슈팅 X
- **결론적으로 유지보수 하기 어려움**

## 컨트롤러

- 프로젝트에서 매니저 역할을 하는 파일: 관장
- 누군가에게 일을 어떻게 시켜야할 지 알고 있음
  - 직접 일을 하지는 않을 것

라우터를 통해서 사용자의 요청(req)이 찾아오면 컨트롤러가 서비스에게 처리하게 할 것

서비스가 처리하면 컨트롤러가 사용자에게 res를 돌려줌

## 비밀번호 암호화

내장 모듈 `crypto` 사용

`pbkdf2`: Password-Based Key Derivation Function 2

```js
const crypto = require('crypto');
...
const salt = crypto.randomBytes(64).toString('base64');
const hashedPassword = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('base64');
```

이 암호화는 단방향이기 때문에 회원가입 시 암호화된 비밀번호와 salt값을 저장해야 함

그래야 로그인 시 salt값으로 암호화를 하고 암호화된 비밀번호와 비교할 수 있음
