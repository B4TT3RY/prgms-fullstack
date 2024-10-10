# 장바구니 상품 목록 구현

```js
const getCartItems = (req, res) => {
    const { user_id: userId, selected } = req.body;

    const sql = `SELECT cartItems.id, book_id, title, summary, quantity, price
                FROM cartItems
                LEFT JOIN books ON cartItems.book_id = books.id
                WHERE user_id = ? AND cartItems.id IN (?)`;
    const values = [ userId, selected ];
    conn.query(sql, values,
        (err, results) => {
            if (err) {
                console.log(err);
                return res.status(StatusCodes.BAD_REQUEST).end();
            }

            return res.status(StatusCodes.OK).json(results);
        }
    );
};
```
