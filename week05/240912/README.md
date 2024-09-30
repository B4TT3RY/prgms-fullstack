# 2024/09/12 5주차 파트 4

1. board 스키마 생성

    ```sql
    CREATE DATABASE Board;
    USE Board;
    ```

1. 사용자 테이블 생성

    ```sql
    CREATE TABLE users (
        id    INT NOT NULL AUTO_INCREMENT,
        name  VARCHAR(30) NOT NULL,
        job   VARCHAR(100),
        birth DATE,
        PRIMARY KEY (id)
    );
    ```

1. 사용자 데이터 삽입

    ```sql
    INSERT INTO users (name, job, birth)
    VALUES ("gongu", "actor", "1980-01-23");
    ```

1. 게시글 테이블 생성

    ```sql
    CREATE TABLE posts (
        id         INT NOT NULL AUTO_INCREMENT,
        title      VARCHAR(100) NOT NULL,
        content    VARCHAR(2000),
        created_at TIMESTAMP DEFAULT NOW(),
        PRIMARY KEY (id)
    );
    ```

1. 게시글 데이터 삽입

    ```sql
    INSERT INTO posts (title, content)
    VALUES ("title1", "content1");
    ```

1. 게시글 테이블에 수정 일자 추가

    ```sql
    ALTER TABLE posts
    ADD COLUMN updated_at DATETIME
    DEFAULT now()
    ON UPDATE NOW();
    ```

1. 게시글 테이블 id 2 수정

    ```sql
    UPDATE posts
    SET    content = "updated!"
    WHERE  id = 2;
    ```

1. 게시글 테이블에 작성자 컬럼 FK 추가

    ```sql
    ALTER TABLE posts
    ADD COLUMN user_id INT;
    ```

    ```sql
    ALTER TABLE posts
    ADD FOREIGN KEY (user_id)
    REFERENCES users (id);
    ```

    - Key에 MUL이 적혀있는데 Multiply의 줄임말
    - 여러 행이 같은 값을 가질 수 있다는 의미

## MySQL (MariaDB) 날짜 / 시간 타입

1. DATE
    - 날짜만 저장
    - YYYY-MM-DD 형식
1. DATETIME
    - 날짜 + 시간
    - YYYY_MM-DD HH:MM:SS (24시간제)
1. TIME
    - 시간
    - HH:MM:SS
1. TIMESTAMP
    - 날짜 + 시간
    - YYYY-MM-DD HH:MM:SS (24시간제)
    - 시스템 시간대 정보에 맞게 일시를 저장함
    - 자동 입력

cf. UTC: 한국시간 - 9

## NOT NULL vs DEFAULT

- NOT NULL
  - NULL 금지
- DEFAULT
  - 값이 안들어오면 기본 값으로 세팅
  - 직접 NULL을 넣으면 NULL 허용

## JOIN

Left Join을 가장 많이 사용함

```sql
SELECT * FROM posts
LEFT JOIN users ON posts.user_id = users.id;
```

```sql
SELECT posts.id, title, content, created_at, updated_at, name, job, birth FROM posts
LEFT JOIN users ON posts.user_id = users.id;
```
