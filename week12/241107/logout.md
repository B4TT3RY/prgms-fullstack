# 로그아웃 기능 구현

## userSlice.ts

```ts
removeUser: (state) => {
    state.email = "";
    state.id = "";
},
```

## boardList.tsx

```tsx
const handleSignOut = () => {
    signOut(auth)
        .then(() => {
            dispatch(removeUser());
        })
        .catch((error) => {
            console.error(error);
        });
};
```
