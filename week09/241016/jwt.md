# JWT API 테스트 결과

## 만료된 JWT

```http
GET /carts HTTP/1.1
Host: localhost:3000
User-Agent: curl/8.7.1
Accept: */*
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJjaG9pQG1haWwuY29tIiwiaWF0IjoxNzI5MDc5Nzg5LCJleHAiOjE3MjkwODAwODksImlzcyI6InNvbmdhIn0.I0hasUbL4arnaR82-d2OX8vyXSCxkhEGJh0ZVPYBaVo
Content-Type: application/json
Content-Length: 27

HTTP/1.1 401 Unauthorized
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 84
ETag: W/"54-y6OB9NV9Z/AWxnc1h9Jh1ZYnEHs"
Date: Wed, 16 Oct 2024 15:19:43 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"message":"로그인 세션이 만료되었습니다. 다시 로그인 하세요."}
```

## 잘못된 JWT

```http
GET /carts HTTP/1.1
Host: localhost:3000
User-Agent: curl/8.7.1
Accept: */*
Authorization: abcde
Content-Type: application/json
Content-Length: 27

HTTP/1.1 401 Unauthorized
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 40
ETag: W/"28-w1Af/HkY9LnNEdsW6+L3mcFzODo"
Date: Wed, 16 Oct 2024 15:21:03 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"message":"잘못된 토큰입니다."}
```

## 정상적인 JWT

```http
GET /carts HTTP/1.1
Host: localhost:3000
User-Agent: curl/8.7.1
Accept: */*
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJjaG9pQG1haWwuY29tIiwiaWF0IjoxNzI5MDkyMzc3LCJleHAiOjE3MjkwOTI2NzcsImlzcyI6InNvbmdhIn0.2lzU0dSumFXQktgGqzpllmOIfrykjwyfwuNv71N93Ek
Content-Type: application/json
Content-Length: 27

HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 96
ETag: W/"60-4eybCroY7pfbdFlaWRdFvd/8AU8"
Date: Wed, 16 Oct 2024 15:26:32 GMT
Connection: keep-alive
Keep-Alive: timeout=5

[{"id":5,"book_id":7,"title":"해님달님","summary":"동앗줄..","quantity":1,"price":20000}]
```
