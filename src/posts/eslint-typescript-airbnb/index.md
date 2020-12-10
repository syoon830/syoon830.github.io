---
title: Typescript ESlint Prettier 설정 (+ Airbnb)
date: 2020-11-22 23:23
---

## 기본 설정 (공식문서에서 추천하는 룰 사용)

```bash
npm i -D eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
npm i -D prettier eslint-config-prettier eslint-plugin-prettier
```

### /.eslintrc.json

```json
{
  "extends": [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:react/recommended", // react
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react" // react
  ],
  "rules": {
    "linebreak-style": 0, // CRLF, LF 때문에 넣어 둠...
    "@typescript-eslint/no-var-requires": 0 // require 오류 나서
  }
}
```

## + Airbnb

```bash
npm install -D eslint-config-airbnb-typescript
```

### /.eslintrc.json

```json
{
  ...
  "extends": [
    "airbnb-typescript",
    "airbnb/hooks"
  ]
  ...
}
```
