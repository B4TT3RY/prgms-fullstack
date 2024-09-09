# 로그인 기능 고도화 결과 코드

```js
app.post('/login', (req, res) => {
    console.log(req.body); // userId, pwd

    const { userId, password } = req.body;
    let loginUser = {};

    // userId가 디비에 저장된 회원인지 확인
    db.forEach((user, id) => {
        if (user.userId === userId) {
            loginUser = user;
        }
    });

    // pwd도 맞는지 비교
    if (isExists(loginUser) && loginUser.password === password) {
        res.status(200).json({
            message: '로그인 성공!',
        });
    } else {
        res.status(401).json({
            message: '로그인 실패',
        });
    }
});
```