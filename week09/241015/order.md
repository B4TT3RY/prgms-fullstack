# 주문 내역 조회 기능 구현

```js
const getOrders = async (req, res) => {
    const conn = await mariadb.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'Bookshop',
        dateStrings: true,
    });

    let sql = `SELECT orders.id, created_at, address, receiver, contact, book_title, total_quantity, total_price
                FROM orders LEFT JOIN delivery
                ON orders.delivery_id = delivery.id`;
    let [rows, fields] = await conn.query(sql);

    return res.status(StatusCodes.OK).json(rows);
};

const getOrderDetail = async (req, res) => {
    const { id } = req.params;

    const conn = await mariadb.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'Bookshop',
        dateStrings: true,
    });

    let sql = `SELECT book_id, title AS book_title, author, price, quantity
                FROM orderedBook LEFT JOIN books
                ON orderedBook.book_id = books.id
                WHERE order_id = ?`;
    let [rows, fields] = await conn.query(sql, id);

    return res.status(StatusCodes.OK).json(rows);
};
```
