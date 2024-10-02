# 로그인 API 구현

```js
const login = (req, res) => {
    const { email, password } = req.body;

    const sql = 'SELECT * FROM `users` WHERE `email` = ?';
    conn.query(sql, email, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(StatusCodes.BAD_REQUEST).end();
        }

        const loginUser = results[0];

        const hashPassword = crypto.pbkdf2Sync(password, loginUser.salt, 10000, 10, 'sha512').toString('base64');
        
        if (loginUser && loginUser.password == hashPassword) {
            const token = jwt.sign(
                {
                    email: loginUser.email,
                },
                process.env.PRIVATE_KEY,
                {
                    expiresIn: '5m',
                    issuer: 'songa',
                }
            );

            res.cookie('token', token, {
                httpOnly: true,
            });

            console.log(token);

            return res.status(StatusCodes.OK).json(results);
        } else {
            return res.status(StatusCodes.UNAUTHORIZED).end();
        }

    });
};
```
