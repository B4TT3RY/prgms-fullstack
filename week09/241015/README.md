# 2024/10/15 9주차 파트 2

## MySQL 데이터 삭제하는 방법

1. DELETE
    - DELETE FROM 테이블명 (WHERE 조건);
    - 조건이 없으면 모든 행 삭제
1. DROP
    - DROP TABLE 테이블명;
    - 테이블을 통째로 삭제
1. TRUNCATE
    - TRUNCATE 테이블명;
    - 모든 행 삭제

## `1701 Cannot truncate a table referenced in a foreign key constraint`

```sql
SET FOREIGN_KEY_CHECKS = 0;
```

쿼리로 FK 체크를 비활성화 한 후 다시 `TRUNCATE` 해주면 작동

`TRUNCATE` 후 다시 1로 설정해줘야 함
