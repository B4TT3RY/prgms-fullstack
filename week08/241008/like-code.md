# 좋아요 추가 기능 구현

```js
const addLike = (req, res) => {
    const { id: likedBookId } = req.params;
    const { user_id: userId } = req.body;

    let sql = 'INSERT INTO likes (user_id, liked_book_id) VALUES (?, ?)';
    const values = [ userId, likedBookId ];
    conn.query(sql, values, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end();
        }
        
        return res.status(StatusCodes.OK).json(results);
    })
}

const removeLike = (req, res) => {
    let sql = 'DELETE FROM likes WHERE user_id = ? AND liked_book_id = ?';
    const values = [ userId, likedBookId ];
    conn.query(sql, values, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end();
        }
        
        return res.status(StatusCodes.OK).json(results);
    })
}
```
