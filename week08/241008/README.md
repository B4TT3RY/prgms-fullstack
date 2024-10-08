# 2024/10/08 8주차 파트 2

## 좋아요 API

헤더에 `Authorization: token` 을 날려야 함

## 서브쿼리

책 별 좋아요 수를 포함한 모든 책을 가져오는 쿼리

```sql
SELECT 
 *,
 (SELECT count(*) FROM likes WHERE liked_book_id = books.id) AS likes
FROM books;
```

데이터가 존재하는지 확인하는 함수

```sql
SELECT EXISTS (SELECT * FROM likes WHERE user_id = 1 AND liked_book_id = 1);
```

를 이용해 책 좋아요를 했는지 확인하는 쿼리

```sql
SELECT
 *,
 (SELECT count(*) FROM likes WHERE liked_book_id = books.id) AS likes,
 (EXISTS (SELECT * FROM likes WHERE user_id = 1 AND liked_book_id = 1)) AS liked
FROM books
WHERE books.id = 1;
```

최종적으로 API 명세에 맞는 쿼리는

```sql
SELECT
 books.*, category.category_name,
 (SELECT count(*) FROM likes WHERE liked_book_id = books.id) AS likes,
 (EXISTS (SELECT * FROM likes WHERE user_id = 1 AND liked_book_id = books.id)) AS liked
FROM books
LEFT JOIN category
ON books.category_id = category.category_id
WHERE books.id = 1;
```
