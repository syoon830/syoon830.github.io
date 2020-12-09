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
  ]
}
```

## + Airbnb
```bash
npm install eslint-config-airbnb-typescript --save-dev
```
  
#### - 추가로 아래 라이브러리 버전 설치

```bash
npm install eslint-plugin-import@^2.22.0 \
            @typescript-eslint/eslint-plugin@^4.4.1 \
            --save-dev
```
#### /.eslintrc.json
```json
{
  "extends": [
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

### - React에서 사용시
```bash
npm install eslint-plugin-import@^2.22.0 \
            @typescript-eslint/eslint-plugin@^4.4.1 \
            eslint-plugin-jsx-a11y@^6.3.1 \
            eslint-plugin-react@^7.20.3 \
            eslint-plugin-react-hooks@^4.0.8 \
            --save-dev
```
### /.eslintrc.json
```json
{
  "extends": [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ]
}
```
