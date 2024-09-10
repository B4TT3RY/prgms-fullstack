# 2024/09/10 5주차 파트 2

## Server와 Router의 역할

- Server: Request를 받음
- Router: Request의 URL에 따라 경로(Route)를 정해줌

## Node.js에서의 Routing이란?

Request가 날라왔을 때, 원하는 경로에 따라 적절한 경로를 안내해주는 것

URL, Method를 사용해서 경로를 정함

## ERD

### 회원

|user_id|password|name|
|---|---|---|
|testid1|1234|tester1|
|testid2|5678|tester2|

### 채널

|id|channel_title|user_id|sub_num|video_num|
|---|---|---|---|---|
|1|날아라송아|testid1|0|0|
|2|달려라송아|testid1|0|0|
|3|걸어라|testid2|0|0|

## 채널 API 변동 사항

- 채널 생성 `POST /channels`
  - req: body (channelTitle, userId)
- 회원의 채널 전체 조회 `GET /channels`
  - req: body (userId)
