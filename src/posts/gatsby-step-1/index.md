---
title: 블로그 만들기 feat. Gatsby - 1.설치 및 세팅
date: 2020-11-10 20:38
---

많은 cms 플랫폼이 있다. hexo gatsby vuepress jekyll 등  
아시는 분이 jekyll로 블로그를 운영한다고 하여 처음에는 jekyll로 해봤는데 구축이야 금방 하는데 커스텀이 좀 까다로웠다. (ruby 언어)  
이후에 hexo로도 해보고 vuepress로도 해보고.. 돌고 돌아 gatsby로 정착(?)하게 되었다.

나는 가장 심플한 스타터를 가지고 제작해 보았다. (좋은 스타터들이 많으니 웬만하면 그 스타터를 이용하는 게 정신건강에 좋다.)  
https://www.gatsbyjs.com/starters/?v=2

## gatsby-cli 설치

```bash
npm install -g gatsby-cli
```

## gatsby starter를 이용한 gatsby 프로젝트 생성

```bash
gatsby new my-blog https://github.com/gatsbyjs/gatsby-starter-hello-world

```

## gatsby 개발서버 실행

생성한 프로젝트 폴더로 이동 후

```bash
cd my-blog
npm run develop
```

![프로젝트 세팅 완료](./1.png)

## typescript 설정

### typescript 설치
```bash
npm install -D typescript
```

### 확장자 변경
/src/pages/index.js => /src/pages/index.tsx

### /tsconfig.json
```json
{
  "compilerOptions": {
    "jsx": "react",
    "strict": true
  }
}
```

#### eslint 설정도 미리 해두자  
[Typescript ESlint Prettier 설정 (+ Airbnb)](/eslint-typescript-airbnb/)
