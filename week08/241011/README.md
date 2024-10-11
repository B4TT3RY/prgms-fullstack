# 2024/10/11 8주차 파트 5

벌써 2차 단위기간 마지막 출석..! 시간 너무 빠르다

## ERD 추가

```text
Table orders {
  id integer [primary key]
  delivery_id integer
  book_title varchar
  total_quantity integer
  total_price integer
  created_at timestamp
  user_id integer
}

Table orderedBook {
  id integer [primary key]
  order_id integer
  book_id integer
  quantity integer
}

Table delivery {
  id integer [primary key]
  address varchar
  receiver varchar
  contact varchar
}

Ref: orders.delivery_id > delivery.id
Ref: orderedBook.order_id > orders.id
Ref: orderedBook.book_id > books.id

Ref: orders.user_id > users.id
```

## FK 네이밍 컨벤션

강의에서는 `fk_기준 테이블 명_참조 테이블 명_참조키` 형식으로 정함

## INSERT 한 데이터의 PK를 가져오는 방법

- `LAST_INSERT_ID()` 함수 사용
  - 이전 값을 들고 오는 오류가 간간히 발생 할 수 있음
- `MAX()` 함수 사용

  - ```sql
    SELECT MAX(id) FROM orderedBook;
    ```

- `results` 에 `insertId` 변수 사용

## Bulk INSERT

```js
sql = 'INSERT INTO orderedBook (order_id, book_id, quantity) VALUES ?';
values = [];
items.forEach((item) => {
    values.push([orderId, item.bookId, item.quantity]);
});

conn.query(sql, [values], (err, results) => {
    if (err) {
        console.log(err);
        return res.status(StatusCodes.BAD_REQUEST).end();
    }

    return res.status(StatusCodes.OK).json(results);
});
```
