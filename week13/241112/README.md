# 2024/11/12 13주차 파트 2

## Omit

유틸리티 타입

특정 속성을 제거한 타입을 정의함

## Component Test

### Title.spec.tsx

```tsx
describe("Title 컴포넌트 테스트", () => {
  it("렌더를 확인", () => {
    // 1. 렌더
    render(
      <BookStoreThemeProvider>
        <Title size="large">제목</Title>
      </BookStoreThemeProvider>
    );

    // 2. 확인
    expect(screen.getByText("제목")).toBeInTheDocument();
  });

  it("size props 적용", () => {
    const { container } = render(
      <BookStoreThemeProvider>
        <Title size="large">제목</Title>
      </BookStoreThemeProvider>
    );

    expect(container?.firstChild).toHaveStyle({ fontSize: '2rem' });
  });

  it("color props 적용", () => {
    const { container } = render(
      <BookStoreThemeProvider>
        <Title size="large" color="primary">제목</Title>
      </BookStoreThemeProvider>
    );

    expect(container?.firstChild).toHaveStyle({ color: 'brown' });
  });
});
```

expect 내 `container?.firstChild`가 eslint에서 [testing-library/no-node-access](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-node-access.md) 규칙을 어기고 있으므로 다른 방법을 알아두는 것도 좋은 방법일듯

```tsx
it('size props 확인', () => {
    render(
        <BookStoreThemeProvider>
            <Button size="large" scheme="primary">버튼</Button>
        </BookStoreThemeProvider>
    );

    expect(screen.getByRole('button')).toHaveStyle({ fontSize: '1.5rem' });
});
```

다음 강의에서 `screen.getByRole`을 사용하는 것으로 알려주심

## forwardRef

HTML Element에 직접 접근하기 위해 사용함

### InputText.tsx

```tsx
const InputText = React.forwardRef(
  ({ placeholder }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    return <InputTextStyle placeholder={placeholder} ref={ref} />;
  }
);
```

```tsx
const ref = React.createRef<HTMLInputElement>();
...
<InputText placeholder="여기에 입력" ref={ref} />
```
