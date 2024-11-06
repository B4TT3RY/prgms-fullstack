# 게시판 삭제 기능 코드

## boardsSlice.ts

```ts
type TDeleteBoardAction = {
  boardId: string;
}
...
    deleteBoard: (state, { payload }: PayloadAction<TDeleteBoardAction>) => {
      state.boardArray = state.boardArray.filter(board => board.boardId !== payload.boardId)
    },
```
