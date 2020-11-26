---
title: "[Java] String Method 정리 - 교체"
date: "2020-09-05 21:04"
---

## 교체

### replace(string, string) - 문자열 교체

```java
String hello = "hello";
System.out.println(hello.replace("l", "o")); // heooo
```

### replaceFirst(string, string) - 위 replace와 다르게 처음 하나만 교체

```java
String hello = "hello hello hello";
System.out.println(hello.replaceFirst("hello", "hi")); // hi hello hello
```

### replaceAll(string, string) - 위 replace와 비슷하지만 정규식 사용 가능

```java
String hello = "hello hello hello";
System.out.println(hello.replaceAll(".", "hi")); // hihihihihihihihihihihihihihihihihi
// 정규식에서 . 은 모든 문자를 의미
```