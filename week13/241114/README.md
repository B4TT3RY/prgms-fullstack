# 2024/11/14 13주차 파트 4

## 상태 관리

Zustand 라이브러리를 사용해 전역 상태 관리

## CORS

API 요청이 안됨 + express에서 cors 미들웨어를 사용해도 작동하지 않아 확인해본 결과

`withCredentials: true` 를 사용한 상황에서는 서버측에서 도메인을 일부만 허용해줘야 함

```js
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3001',
    credentials: true,
};

app.use(cors(corsOptions));
```
