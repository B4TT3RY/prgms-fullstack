# 도서 목록 조회 페이징 구현

```js
const allBooks = (req, res) => {
    const { category_id: categoryId, new: isNew, limit, currentPage } = req.query;

    // limit: page 당 도서 수
    // current: 현재 페이지
    // limit * (currentPage - 1)

    const offset = limit * (currentPage - 1);

    let sql = 'SELECT * FROM `books`';
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

        if (results.length > 0)
            return res.status(StatusCodes.OK).json(results);
        else
            return res.status(StatusCodes.NOT_FOUND).end();
    });
};
```
