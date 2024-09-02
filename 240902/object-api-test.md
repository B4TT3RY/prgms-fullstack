# 객체 생성 및 API 테스트 결과

## 유튜버 객체 생성

```js
let youtuber1 = {
    channelTitle: '채널십오야',
    sub: '658만명',
    videoNum: '1.3천개',
};

let youtuber2 = {
    channelTitle: '침착맨',
    sub: '258만명',
    videoNum: '7.2천개',
};

let youtuber3 = {
    channelTitle: 'TEO 테오',
    sub: '109만명',
    videoNum: '1천개',
};
```

## API 테스트 결과

### 유튜버1

```http
GET /@15ya.fullmoon HTTP/1.1
Host: localhost:3000
User-Agent: curl/8.7.1
Accept: */*
```

```http
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 75
ETag: W/"4b-vQJUP47oa/6IN1qDlmAP8v+1L7g"
Date: Mon, 02 Sep 2024 09:13:34 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"channelTitle":"채널십오야","sub":"658만명","videoNum":"1.3천개"}
```

### 유튜버2

```http
GET /@ChimChakMan_Official HTTP/1.1
Host: localhost:3000
User-Agent: curl/8.7.1
Accept: */*
```

```http
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 69
ETag: W/"45-P3ptElWW5tuYE9l7IQcednJFzxg"
Date: Mon, 02 Sep 2024 09:15:39 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"channelTitle":"침착맨","sub":"258만명","videoNum":"7.2천개"}
```

### 유튜버3

```http
GET /@TEO_universe HTTP/1.1
Host: localhost:3000
User-Agent: curl/8.7.1
Accept: */*
```

```http
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 68
ETag: W/"44-EP4gQVpstoLyBfSX8BDZWTm3dJ8"
Date: Mon, 02 Sep 2024 09:16:32 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"channelTitle":"TEO 테오","sub":"109만명","videoNum":"1천개"}
```

### 리스트에 없는 유튜버

```http
GET /@none-exists-youtuber HTTP/1.1
Host: localhost:3000
User-Agent: curl/8.7.1
Accept: */*
```

```http
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 53
ETag: W/"35-Dc8Fjp5AuPgAxsBASDpO2bS0hEg"
Date: Mon, 02 Sep 2024 09:17:46 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"message":"저희가 모르는 유튜버입니다."}
```
