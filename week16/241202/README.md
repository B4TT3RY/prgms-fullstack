# 2024/12/02 16주차 파트 1

## 웹 개발 파이프라인

1. 코드 개발
1. 지속적 통합 (CI; Continuous Integration)
    1. 빌드
    1. 테스트
    1. 코드 병합
1. 지속적 인도 (CD; Continuous Delivery)
    1. 코드 레포지토리에 자동으로 릴리즈
1. 지속적 배포 (CD; Continuous Deployment)
    1. 프로덕션 환경에 자동으로 배포

## 전통적 인도 프로세스의 한계점

- 느린 인도 기간
- 느린 피드백 주기
- 자동화 미비
- 핫픽스 위험성
- 개발문화 건전성 제한

## 해결책: 지속적 인도/배포 방식

### 해결안: 프로세스의 각 단계를 자동화

- 빠른 제품 인도
- 짧은 피드백 주기
- 위험도가 낮은 릴리즈: 반복과 롤백
- 유연한 릴리즈 정책 결정 가능

## 지속적 통합 (CI; continuous Integration)

- 코드가 올바르게 빌드 및 통합되는지 **자동으로** 확인
  - 레포지토리에서 코드를 체크아웃
  - 빌드 (컴파일 및 링크 등)를 수행하고 단위테스트를 행함
    - 테스트 커버리지 리포트 생성
  - 코드 품질을 검증
    - 정적 분석을 통한 규칙 검사
    - 코딩 규약 등의 준수 여부 검사
- 개발팀에 1차적인 피드백 제공

## 자동 인수 테스트

- 인수 테스트 (UAT; User Acceptance Test)
  - 제품이 릴리즈할 준비가 되었는지를 사용자(고객) 요구사항에 견주어 확인
  - 전통적으로 QA(Quality Assurance)팀의 역할
  - 통합 테스트, 인수 테스트, 비기능적 분석 (성능, 확장성, 보안, ...) 등을 포함
- CD 파이프라인에 통합
  - 품질 점검을 나중에 하는 것이 아니라 개발 중에 제품에 내재시키자는 것
  - 개발자가 구현을 마치는 즉시 고객이 원하는 제품인지를 검증
  - 소프트웨어의 인도 결정을 자동화한다는 뜻

## 구성 관리

- 구성 관리 (Configuration Management)
  - 소프트웨어와 환경 변화를 추적하고 제어
  - 전통적으로 운영팀의 역할
  - 필수 도구 준비와 설치
  - 응용의 배포와 관련한 다양한 서비스 인스턴스와 배포 버전 관리
- CD 파이프라인에 통합
  - 프로덕현 환경의 응용을 자동으로 구성하고 배포
  - 구성 관리 도구를 이용하여 구성 관리 파일을 버전 관리 시스템에 저장하고 변경 이력 추정

## CD를 위한 기술적 전제조건

- 자동 빌드, 테스트, 패키징, 배포
- 신속한 파이프라인 실행
- 신속한 장애 복구
- 무중단 배포
- 트렁크 기반 개발

## 파이프라인 자동화 도구들

- 컨테이너 가상화 및 클러스터 운용
  - Docker + Kubernetes
- 소프트웨어 개발 파이프라인 자동화 서버
  - Jenkins
- 구성 관리 자동화
  - Ansible
- 소프트웨어 버전 관리
  - GitHub
- 그 외
  - 빌드 도구 (ex. maven, gradle, ...)
  - 단위 테스트 프레임워크 (ex. junit, ...)
  - 정적 코드 분석기
  - 인수 테스트 프레임워크

## 가상화 컴퓨팅

컴퓨팅 자원의 추상화를 일컫는 광범위한 용어

- 물리적인 컴퓨팅 자원의 특징을 다른 시스템, 응용 프로그램, 최종 사용자들이 자원과 상호 작용하는 방식으로부터 감추는 기술
- 컴퓨터 안에 또 다른, 즉 가상의 컴퓨터가 존재하는 기술

### 이점

- 시스템 측면
  - 시스템 이용률 향상
  - 설정의 구성과 복원이 용이
- 비즈니스 측면
  - 자본 및 운영 비용 절감
  - 다운타임 최소화 (또는 제거)
  - 비즈니스 연속성 및 재해 복구 향상
  - 데이터 센터 관리 간소화
- 우리의 관심
  - 개발한 소프트웨어의 배포, 테스트, 구성 관리 등에 통일된 환경을 제공할 수 있음
  - 소프트웨어 통합/인도 프로세스의 자동화에 적용하기가 좋음

### 기술의 진화

- 가상 기계 (VM; Virtual Machine) 기반
  - 하이퍼바이저를 이용
  - Type 1: 네이티브 또는 베어메탈 형
    - 전가상화
    - 반가상화
  - Type 2: 호스트형
- 컨테이너 기반
  - 호스트 OS의 컨테이너 기술을 이용

## 컨테이너 사용의 이점

VM의 대체 또는 보완 방식으로 각광받고 있음

소프트웨어 개발 및 배포의 효율과 안정성을 향상시킴

- 응용 프로그램, 설정 파일, 라이브러리, 그리고 이들 사이의 의존성 관계를 한데 묶어 관리
- 이 묶음을 컨테이너 라고 부름
- 컨테이너 엔진의 도움으로 시스템 의존성이 최소화되어 소프트웨어 시스템의 이식이 용이해짐
