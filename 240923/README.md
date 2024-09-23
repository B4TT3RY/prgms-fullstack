# 2024/09/23 6주차 파트 1

## SQL Query 날릴 때 문자열 추가하는 방법

강의에서도 나왔지만 템플릿 문자열 또는 더하기 연산자를 사용하면 쿼리 결과가 나오지 않음.

mysql2 문서를 확인해보면 placeholder를 사용하라고 되어있음

```js
conn.query(
    'SELECT * FROM `users` WHERE `email` = ?',
    email,
    function (err, results, fields) {
        ...
    }
);
```

```js
conn.query(
    'INSERT INTO `users` (`email`, `name`, `password`, `contact`) VALUES (?, ?, ?, ?)',
    [ email, name, password, contact ],
    function (err, results, fields) {
        ...
    }
);
```

### 왜 placeholder를 사용해야 하는가?

쿼리를 제네릭하고 재사용이 가능하게 만들고, SQL 인젝션에 대해서도 대비할 수 있기 때문

## SQL INSERT

INSERT 구문 사용 시 results는 빈 값으로 나옴

## SQL DELETE

```json
{
  "fieldCount": 0,
  "affectedRows": 1,
  "insertId": 0,
  "info": "",
  "serverStatus": 2,
  "warningStatus": 0,
  "changedRows": 0
}
```

`results`가 위와 같이 나옴

DELETE문이 영항을 주지 않으면 `affectedRows` 값이 `0`으로 나옴

## 궁금한 점?

강의에서 email이 일치하는 열을 가져와서 js에서 비밀번호를 검증하는데 DB에서 한번에 하면 안되는지?
