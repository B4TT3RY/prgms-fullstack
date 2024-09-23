# user.js 리팩토링 결과

```js
const express = require('express');
const router = express.Router();
const conn = require('../mariadb');

router.use(express.json());

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    let loginUser = {};

    let sql = 'SELECT * FROM `users` WHERE `email` = ?';

    conn.query(sql, email,
        function (err, results) {
            loginUser = results[0];
            if (loginUser && loginUser.password == password) {
                res.status(200).json({
                    message: `${loginUser.name}님 환영합니다.`,
                });
            } else {
                res.status(401).json({
                    message: '이메일 또는 비밀번호가 틀렸습니다.',
                });
            }
        }
    );
});

router.post('/register', (req, res) => {
    const { email, name, password, contact } = req.body;
    if (!email || !name || !password || !contact) {
        res.status(400).json({
            message: '입력 값을 다시 확인해주세요.',
        });
        return;
    }

    const sql = 'INSERT INTO `users` (`email`, `name`, `password`, `contact`) VALUES (?, ?, ?, ?)';
    const values = [ email, name, password, contact ];

    conn.query(sql, values,
        function (err, results) {
            res.status(201).json(results);
        }
    );
});

router
    .route('/users')
    .get((req, res) => {
        const { email } = req.body;

        const sql = 'SELECT * FROM `users` WHERE `email` = ?';

        conn.query(sql, email,
            function (err, results) {
                res.status(200).json(results);
            }
        );
    })
    .delete((req, res) => {
        const { email } = req.body;

        const sql = 'DELETE FROM `users` WHERE `email` = ?';

        conn.query(sql, email,
            function (err, results) {
                res.status(200).json(results);
            }
        );
    });

module.exports = router;
```
