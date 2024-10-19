# 전체 도서 조회 결과 코드

```js
const allBooks = (req, res) => {
    let allBooksRes = {};
    const { category_id: categoryId, new: isNew, limit, currentPage } = req.query;

    // limit: page 당 도서 수
    // current: 현재 페이지
    // limit * (currentPage - 1)

    const offset = limit * (currentPage - 1);

    let sql = 'SELECT SQL_CALC_FOUND_ROWS *, (SELECT count(*) FROM likes WHERE books.id = liked_book_id) AS likes FROM `books`';
    let values = [];

    if (categoryId) {
        sql += ' WHERE `category_id` = ?';
        values.push(categoryId);
    } else if (categoryId && isNew) {
        sql += ' WHERE `category_id` = ? AND pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 1 MONTH) AND NOW()';
        values.push(categoryId);
    } else if (isNew) {
        sql += ' WHERE pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 1 MONTH) AND NOW()'; 
    }

    sql += ' LIMIT ? OFFSET ?';
    values.push(parseInt(limit), offset);

    conn.query(sql, values, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end();
        }
        // console.log(results);
        if (results.length) {
            results.map((result) => {
                result.categoryId = result.category_id;
                result.pubDate = result.pub_date;
                delete result.category_id;
                delete result.pub_date;
            })
            allBooksRes.books = results;
        } else {
            return res.status(StatusCodes.NOT_FOUND).end();
        }
    });

    sql = 'SELECT found_rows()';
    conn.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end();
        }

        let pagination = {
            currentPage: parseInt(currentPage),
            totalCount: results[0]['found_rows()']
        };

        allBooksRes.pagination = pagination;

        return res.status(StatusCodes.OK).json(allBooksRes);
    });
};
```
