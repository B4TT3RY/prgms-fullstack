# 도서 전체 및 상세 조회 결과

## 도서 전체 조회 코드

```js
const allBooks = (req, res) => {
    const { category_id: categoryId } = req.query;
    if (categoryId) {
        const sql = 'SELECT * FROM `books` WHERE `category_id` = ?';
        conn.query(sql, categoryId, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(StatusCodes.BAD_REQUEST).end();
            }

            if (results.length > 0)
                return res.status(StatusCodes.OK).json(results);
            else
                return res.status(StatusCodes.NOT_FOUND).end();
        });
    } else {
        const sql = 'SELECT * FROM `books`';
        conn.query(sql, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(StatusCodes.BAD_REQUEST).end();
            }
            
            return res.status(StatusCodes.OK).json(results);
        });
    }
};
```

## 도서 전체 조회 결과

```json
[
  {
    "id": 1,
    "title": "어린왕자들",
    "img": 7,
    "category_id": 0,
    "form": "종이책",
    "isbn": "0",
    "summary": "어리다..",
    "detail": "많이 어리다..",
    "author": "김어림",
    "pages": 100,
    "contents": "목차입니다.",
    "price": 20000,
    "pub_date": "2019-01-01"
  },
  {
    "id": 2,
    "title": "신데렐라들",
    "img": 10,
    "category_id": 0,
    "form": "종이책",
    "isbn": "1",
    "summary": "유리구두..",
    "detail": "투명한 유리구두..",
    "author": "김구두",
    "pages": 100,
    "contents": "목차입니다.",
    "price": 20000,
    "pub_date": "2024-10-04"
  },
  {
    "id": 3,
    "title": "백설공주들",
    "img": 60,
    "category_id": 1,
    "form": "종이책",
    "isbn": "2",
    "summary": "사과..",
    "detail": "빨간 사과..",
    "author": "김사과",
    "pages": 100,
    "contents": "목차입니다.",
    "price": 20000,
    "pub_date": "2023-11-01"
  },
  {
    "id": 4,
    "title": "흥부와 놀부들",
    "img": 90,
    "category_id": 2,
    "form": "종이책",
    "isbn": "3",
    "summary": "제비..",
    "detail": "까만 제비..",
    "author": "김제비",
    "pages": 100,
    "contents": "목차입니다.",
    "price": 20000,
    "pub_date": "2024-09-17"
  }
]
```

## 도서 상세 조회 코드

```js
const bookDetail = (req, res) => {
    const id = parseInt(req.params.id);

    const sql = 'SELECT * FROM `books` WHERE `id` = ?';
    conn.query(sql, id, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end();
        }

        if (results[0])
            return res.status(StatusCodes.OK).json(results[0]);
        else
            return res.status(StatusCodes.NOT_FOUND).end();
    });
};
```

## 도서 상세 조회 결과

```json
{
  "id": 3,
  "title": "백설공주들",
  "img": 60,
  "category_id": 1,
  "form": "종이책",
  "isbn": "2",
  "summary": "사과..",
  "detail": "빨간 사과..",
  "author": "김사과",
  "pages": 100,
  "contents": "목차입니다.",
  "price": 20000,
  "pub_date": "2023-11-01"
}
```
