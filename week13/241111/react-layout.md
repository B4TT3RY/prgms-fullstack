# React Layout 구성 결과 코드

## src/components/layout/Layout.tsx

```tsx
import React, { FC } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

```
