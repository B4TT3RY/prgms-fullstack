# 2024/11/08 12주차 파트 5

Book Store라는 프로젝트를 만들어 볼 예정

인증 -> 목록 -> 상세 -> 장바구니 -> 주문 -> 환경설정

환경 설정, 타입과 모델, 데이터 흐름, 상태 관리, UI 패턴, 모바일 대응

## React 프로젝트 생성: CRA vs Vite

### CRA

- webpack
- node.js
- express server
- source build
- process.env.KEY
- HMR

### Vite

- ESBuild
- Golang
- koa Server
- module build
- import.meta.env.KEY
- HMR

## 프로젝트 디렉토리 구조

- pages: 라우트에 대응하는 페이지 컴포넌트 (컨테이너)
- components: 공통 컴포넌트, 각 페이지에서 사용되는 컴포넌트
- utils: 유틸리티
- hooks: 리액트 훅
- model: 모델 (타입)
- api: api 연동을 위한 fetcher 등
