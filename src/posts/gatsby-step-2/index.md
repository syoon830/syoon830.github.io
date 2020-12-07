---
title: 블로그 만들기 feat. Gatsby - 2.컴포넌트
date: 2020-11-10 21:20
---

## 컴포넌트 생성

### src/components/header.tsx

```tsx
import * as React from "react"
import { Link } from "gatsby"

const Header: React.FC = () => (
  <header>
    <h1>
      <Link to="/">My Blog</Link>
    </h1>
    <Link to="/about">about</Link>
  </header>
)

export default Header
```

### src/components/layout.tsx

```tsx
import * as React from "react"
import Header from "./header"

const Layout: React.FC = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
)

export default Layout
```

## Layout 컴포넌트 적용

### src/pages/index.tsx

```tsx
import * as React from "react"
import Layout from "../components/layout"

export default class IndexPage extends React.Component {
  public render() {
    return <Layout>Index</Layout>
  }
}
```

### src/pages/about.tsx

```tsx
import * as React from "react"
import Layout from "../components/layout"

export default class AboutPage extends React.Component {
  public render() {
    return <Layout>About</Layout>
  }
}
```

![](./1.gif)
