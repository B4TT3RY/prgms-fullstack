# 회원가입 API 구현

```js
const join = (req, res) => {
    const { email, password } = req.body;

    const salt = crypto.randomBytes(10).toString('base64');
    const hashedPassword = crypto.pbkdf2Sync(password, salt, 10000, 10, 'sha512').toString('base64');

    const sql = 'INSERT INTO `users` (`email`, `password`, `salt`) VALUES (?, ?, ?)';
    const values = [ email, hashedPassword, salt ];
    conn.query(sql, values, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end();
        }
        
        return res.status(StatusCodes.CREATED).json(results);
    });
};
```
