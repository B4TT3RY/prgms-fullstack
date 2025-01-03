# 2025/01/03 19주차 파트 5

## CI/CD Pipeline

- Code checkout > Unit test > Code coverage
- Production build > Packaging > Image push
- Staging > Acceptance test
- Release > Smoke test

## CI 파이프라인 설계

### SCM Checkout

- Jenkins에서 git clone 할 수 있도록 github credentials 준비 필요
- 코드는 각자의 private repo에 빌드 및 테스트 가능한 상태로 준비
  - 아직 구현이 덜 된 부분이 있어도 됨

### Unit test

- Node v18이 설치되어 있는 Jenknins agent (builder)에서 npm test
- Coverage report를 발행하기 위한 부가의 설정을 할 예정

### Build

- 단위 테스트 실행과 동일한 agent (builder)에서 npm test
- frontend/build 및 backend/build를 산출

### Packaging

- JNLP agent에서 docker build
- 같은 agent에서 docker push
  - 레지스트리 접근을 위해서 AWS credentials 설정 (플러그인 설치 포함) 필요

### Staging

- Terraform을 이용하여 스테이징 서버 (Minikube on EC2)에 컨테이너 배포
- Terraform state를 S3에 저장하기 위한 AWS credentials 설정이 필요함

### Acceptance Test

- 로컬 클러스터 내에 (임시로) Selenium Standalone 인스턴스를 배포하거 WD hub로 이동
- Python이 설치된 Jenkins agent (tester)에서 테스트 케이스 실행
  - Selenium grid를 통한 브라우저 자동화 테스트

### Release

- Staging 배포와 동일한 방식으로 프로덕션 서버에 배포
  - Terraform 환경변수와 컨테이너 환경변수만 필요에 맞도록 지정
  - 이 프로젝트에서는 실습으로 행하지는 않음

### Smoke Test

- 프로덕션 서버에 배포된 응용이 올바르게 배포되었는지 확인
  - 올바르게 "동작하는지" 가 아닌 올바르게 "배포되었는지"
- 이 프로젝트에서는 실습으로 행하지는 않음

## 파이프라인 설계 - Post-Build Actions

빌드 및 배포에 필요한 (그 외에는 필요하지 않은) 자원들을 해제

스테이징 서버에 배포한 리소스 회수

- Terraform 이용해서 k8s 오브젝트들을 destroy
- IaC를 이용하면 AWS 리소스 (EC2)도 동적으로 관리하는 것이 가능할 것

Selenium에 기반한 테스트에 이용한 리소스 회수

- 테스트가 실행되지 않는 동안에는 Selenium 인스턴스가 필요하지 않음
- 일장일단이 있을 것

## 빌드 및 배포에 이용되는 Agent들

- jnlp
  - JNLP 역할 수행, docker client, terraform client
- builder
  - node를 이용한 코드 빌드 및 테스트
- dind
  - Docker-in-Docker: 컨테이너 패키징 (이미지 빌드)을 위한 docker daemon 역할
- tester
  - Selenium을 이용한 E2E 테스트의 클라이언트
    - Python 및 pytest 라이브러리 필요
    - Selenium 라이브러리 필요
