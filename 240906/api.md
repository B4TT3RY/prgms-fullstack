# 회원 API 설계 및 결과

- 로그인 `POST /login`
  - req: body (id, pwd)
  - res: `{name}님 환영합니다`
- 회원 가입 `POST /register`
  - req: body (id, pwd, name)
  - res: `{name}님 환영합니다`
- 회원 정보 조회 `GET /users/:id`
  - req: URL (id)
  - res: id, name
- 회원 탈퇴 `DELETE /users/:id`
  - req: URL (id)
  - res: `{name}님 다음에 또 뵙겠습니다` or 메인 페이지

## 로그인

강의 상 미구현, 다음 강의에서 구현 예정

## 회원 가입

### Request #1

```http
POST /register HTTP/1.1
Host: localhost:3000
User-Agent: curl/8.7.1
Accept: */*
Content-Type: application/json
Content-Length: 64

{
  "userId": "test",
  "password": "1234",
  "name": "tester"
}
```

### Response #1

```http
HTTP/1.1 201 Created
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 40
ETag: W/"28-wY0ayMp6wFuD5DYoVXXxrT0e5uE"
Date: Fri, 06 Sep 2024 11:10:27 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"message":"tester님 환영합니다."}
```

### Request #2

```http
POST /register HTTP/1.1
Host: localhost:3000
User-Agent: curl/8.7.1
Accept: */*
```

### Response #2

```http
HTTP/1.1 400 Bad Request
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 54
ETag: W/"36-hPNonmI0/d0dlsC3NI7hErr3UHA"
Date: Fri, 06 Sep 2024 11:12:52 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"message":"입력 값을 다시 확인해주세요."}
```

## 회원 정보 조회

### Request #3

```http
GET /users/1 HTTP/1.1
Host: localhost:3000
User-Agent: curl/8.7.1
Accept: */*
```

### Response 3

```http
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 33
ETag: W/"21-7T1A0NEfYEXL8ckRHieHicFDH9M"
Date: Fri, 06 Sep 2024 11:14:13 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"userId":"test","name":"tester"}
```

### Request #4

```http
GET /users/999 HTTP/1.1
Host: localhost:3000
User-Agent: curl/8.7.1
Accept: */*
```

### Response #4

```http
HTTP/1.1 404 Not Found
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 44
ETag: W/"2c-ZwAKBQDMs8HK9DcnB9biEiOxBLw"
Date: Fri, 06 Sep 2024 11:21:48 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"message":"회원 정보가 없습니다."}
```

## 회원 탈퇴

### Request #5

```http
DELETE /users/1 HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/8.7.1
> Accept: */*
```

### Response #5

```http
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 54
ETag: W/"36-pATsh/MdER7g5y+RnN637rM2vq0"
Date: Fri, 06 Sep 2024 11:24:53 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"message":"tester님 다음에 또 뵙겠습니다."}
```

### Request #6

```http
DELETE /users/1 HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/8.7.1
> Accept: */*
```

### Response #6

```http
HTTP/1.1 404 Not Found
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 44
ETag: W/"2c-ZwAKBQDMs8HK9DcnB9biEiOxBLw"
Date: Fri, 06 Sep 2024 11:26:00 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"message":"회원 정보가 없습니다."}
```
