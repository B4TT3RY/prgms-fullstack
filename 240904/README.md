# 2024/09/04 4주차 파트 3

## POST Body값이 뜨지 않는 이유?

```js
console.log(req.body);
// undefined
```

```js
app.use(express.json());
```

express 안에 있는 모듈 중 하나임

json이라는 Middleware를 사용하면 request로 오는 body값을 json으로 읽어볼 수 있음

```js
console.log(req.body);
// { message: 'Bye Post!!!' }
```

## 유튜버 데모 업그레이드

### API 설계

- 전체 유튜버 조회: `GET /youtubers`
  - req: X
  - res: map을 전체 조회하여 return
- 개별 유튜버 조회: `GET /youtuber/:id`
  - id로 map에서 객체를 찾아서 그 객체의 정보를 뿌려줌
  - req: params.id <- map에 저장된 key 값을 전달
  - res: map에서 id로 객체를 조회해서 전달
- 유튜버 등록: `POST /youtuber`
  - req: body <- `channelTitle, sub = 0, videoNum = 0`, 신규 유튜버 정보를 전달, DB에 저장
  - res: `{channelTitle}님, 유튜버 생활을 응원합니다!`
