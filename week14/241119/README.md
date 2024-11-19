# 2024/11/19 14주차 파트 2

## 중복 회고 도출 아이템

1. alias 적용
1. 중복 코드 제거
1. 스니펫 만들기
1. useAuth 훅 만들기
1. react-query 적용
1. 다양한 UI 경험

## alias 적용

[CRACO](https://craco.js.org) 사용

## Snippet 만들기

### typescriptreact.json

```json
{
  "_comp": {
    "prefix": "_comp",
    "body": [
      "import styled from \"styled-components\";",
      "",
      "const $1 = () => {",
      "\treturn (",
      "\t\t<$1Style>",
      "\t\t\t$1",
      "\t\t</$1Style>",
      "\t)",
      "}",
      "",
      "const $1Style = styled.div``;",
      "",
      "export default $1;"
    ]
  },
  ...
}
```
