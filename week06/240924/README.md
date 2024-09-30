# 2024/09/24 6주차 파트 2

## 유효성 검사

Validation

사용자가 입력한 값 유효성 (= 타당성)을 확인하는 것

userId: 값 O, 숫자, 1 이상

채널 name: 값 O, 문자열, 2자 이상

사람 name: 값 O, 문자열, 2자 이상

[express-validator](https://www.npmjs.com/package/express-validator) 등의 모듈을 가져와 사용할 수도 있음

## express-validator

```js
const { body, validationResult } = require('express-validator');
...

    .post(
        [
            body('userId').notEmpty().isInt().withMessage('숫자 입력 필요'),
            body('name').notEmpty().isString().withMessage('문자 입력 필요'),
        ],
        (req, res) => {
            const err = validationResult(req);
            if (!err.isEmpty()) {
                return res.status(400).json(err.array());
            }

            const { name, userId } = req.body;
            ...
```

## return

함수를 더이상 진행하지 않고 종료시키고 싶을 때 사용

```js
...

if (!err.isEmpty()) {
    return res.status(400).json(err.array());
}

...
```

## Middleware

```js
const err = validationResult(req);
if (!err.isEmpty()) {
    return res.status(400).json(err.array());
}
```

validation 코드가 모든 라우터에서 사용되는 관계로 middleware로 분리하기로 함

```js
const validate = (req, res) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
        return res.status(400).json(err.array());
    }
}
```

```js
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

callback을 하기 전 실행하는 핸들러로 등록하여 실행하게 됨
