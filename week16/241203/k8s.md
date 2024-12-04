# 쿠버네티스 사용 방법 정리

## 노드와 포드 정보 조회

```console
kubectl get nodes
```

```console
kubectl get pods
```

## 디플로이먼트 생성 및 조회

```console
kubectl create deployment <이름> --image=<이미지>
```

```console
kubectl get deployment
```

## 상세 정보 조회

```console
kubectl describe <리소스 타입> <이름>
```

## 스케일링

```console
kubectl scale <리소스 타입> <이름> --replicas=<수량>
```

## 서비스 노출

```console
kubectl expose pod <이름> --type=<서비스 타입> --name=<서비스 이름> [--port=80]
```

## 매니페스트 적용

```console
kubectl apply -f <파일 이름>
```

## 컨테이너 내부 진입

```console
kubectl exec -it <pod 이름> -- /bin/bash
```

## 롤아웃 정보 및 이력 조회

```console
kubectl rollout status deployment <디플로이먼트>
```

```console
kubectl rollout history deployment <디플로이먼트>
```
