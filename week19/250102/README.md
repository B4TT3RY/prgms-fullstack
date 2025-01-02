# 2025/01/02 19주차 파트 4

## AWS (Amazon Web Service)

여러가지 응용 실현에 필요한 infrastructure를 on-demand로 서비스

- 웹/모바일 서비스 응용
- 빅데이터/인공지능 응용

IaaS, PaaS, SaaS 중 IaaS에 가까운 모델

실습에서 AWS 이용 예쩡

- Production (staging) 환경을 AWS 위에 구축
  - EC2 (Minikube cluster, web server, DB, SSL)
- 이미지 레지스트리
  - ECR
- Terraform 상태 데이터 저장
  - S3

## 클라우드 인프라의 이용

- 장점
  - 유연한 이용, 안정적 서비스, 다중화와 스케일링
  - Pay-as-you-go, TCO (total cost of ownership) 절감
  - 다양한 도구 제공, 풍부한 문서 및 참고자료
- 단점
  - 생각보다 비용이 만만하지 않을 수 있음
    - 제대로 사용하지 못해도 리소스가 이용되고 있으면 과금
  - 활용법을 익혀야 함
    - 익숙해지지 않으면 다소 복잡하고 생소하게 느껴질 수 있음

## EC2 (Elastic Compute Cloud)

AWS에 의하여 운용되고 있는 네트워크 상에 존재하는 가상의 서버

- 여러 가지의 운영 체제로 이루어진 소프트웨어 실행 환경을 선택하여 설치, 운영 가능
- 서버를 구매하고 소프트웨어 설치해서 IDC에 상면하한 것과 비유 가능

## EC2 이용

우리의 프로젝트에서 EC2 활용

- 프로덕션 (스테이징) 배포에 이용할 클러스터 제공
  - Minikube를 이용한 작은 single-node cluster
- 데이터베이스 (MariaDB) 설치하고 운용
- 웹 서버 (Nginx reverse proxy) 설치하고 운용

보다 유연한 서비스 아키텍처 구현을 위해서는

- 데이터베이스는 RDS (managed relational databsae service) 이용
- k8s 클러스터의 운용을 위해서는 EKS (elastic kubernetes service) 이용

## AMI (Amazon Machine Images)

EC2에서 활용하는 컴퓨터 (파일 시스템) 이미지

- 소프트웨어의 설치 및 구상을 모두 포함하고 있음
- Amazon이 지원하는 온갖 운영체제의 이미지, AWS와 3rd-party 제공 marketplace, 커스텀 이미지 등
