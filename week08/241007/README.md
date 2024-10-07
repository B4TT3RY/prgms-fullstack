# 2024/10/07 8주차 파트 1

## Foreign Key 설정

`books` 테이블의 `category_id` 컬럼을 FK로 설정

레퍼런스는 `category` 테이블의 `id` 컬럼

## LEFT JOIN

카테고리 ID를 사용해 카테고리 이름을 가져와야 함

```sql
SELECT * FROM books
LEFT JOIN category
ON books.category_id = category.id;
```

## SQL 별칭

```sql
SELECT name AS category_name FROM Bookshop.category;
```

`category` 테이블의 `name` 컬럼 이름을 바꿔 출력할 수 있음

books 테이블의 컬럼이 많은 관계로 `category` 테이블의 `name` 컬럼을 `category_name` 으로 변경하기로 함

## SQL 시간 범위

- 시간 더하기
  - `DATE_ADD(기준 날짜, INVERVAL)`
- 시간 빼기
  - `DATE_SUB(기준 날짜, INTERVAL)`

```sql
SELECT DATE_ADD("2024-02-01", INTERVAL 1 MONTH);
```

결과는 `2024-03-01`

```sql
SELECT DATE_SUB(NOW(), INTERVAL 1 MONTH);
```

결과는 `2024-09-07 06:36:11`

- 시간 범위를 설정해서 SELECT

    최근 한달 이내 신간을 구하는 SQL 쿼리

    ```sql
    SELECT * FROM books WHERE pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 1 MONTH) AND NOW();
    ```

## 데이터베이스 페이징

페이징: 한 결과에 몇 개씩 보여줄지

전체 리스트가 100개인데 8개씩 필요할 때

```sql
SELECT * FROM books LIMIT 3 OFFSET 3;
```

- `LIMIT`: 출력할 행의 수
- `OFFSET`: 시작 지점
  - 0부터 시작해야 함
  - 3개씩일 경우 [**0**, 1, 2], [**3**, 4, 5], ...

```sql
SELECT * FROM books LIMIT 0, 3;
```

으로 `LIMIT 3 OFFSET 0`을 대신할 수 있음
