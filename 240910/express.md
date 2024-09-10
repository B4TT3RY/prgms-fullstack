# Express 구조 요약 정리

## app.js

Express.js의 기본 설정 등이 저장되어있음

## routes

라우터용 폴더

### routes/channels.js

채널 API 로직이 저장되어있음

### routes/users.js

유저 API 로직이 저장되어있음

---

`routes` 폴더 내 모듈들을 `module.exports = router;` 로 export 한 뒤 `app.js` 에서 `app.use('/경로', include('./routes/모듈'));` 로 라우팅 기능 사용 가능
