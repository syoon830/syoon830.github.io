---
title: Typescript ESlint Prettier 설정 (+ Airbnb)
date: 2020-11-22 23:23
---

## 기본 설정 (공식문서에서 추천하는 룰 사용)
```bash
npm i -D eslint @typescript-eslint/eslint-plugin
npm i -D prettier eslint-config-prettier eslint-plugin-prettier
```

### /.eslintrc.json
```json
{
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "linebreak-style": 0 // CRLF, LF 때문에 넣어 둠...
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
  "extends": [
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  "rules": {
    "linebreak-style": 0
  },
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

### - React에서 사용시
### /.eslintrc.json
```json
{
  "extends": [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  "rules": {
    "linebreak-style": 0
  },
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```
