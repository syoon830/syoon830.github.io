---
title: "[Java] String Method 정리 - 검색"
date: "2020-09-05 21:02"
---

## 검색

### charAt(int) - 지정 된 인덱스에 있는 문자를 반환!

```java
String str = "str";
System.out.println(str.charAt(0)); // s
System.out.println(str.charAt(1)); // t
System.out.println(str.charAt(2)); // r
```

### indexOf(int) - 설정한 문자 위치 반환

```java
String hello = "hello";
System.out.println(hello.indexOf("h")); // 0
System.out.println(hello.indexOf("e")); // 1
System.out.println(hello.indexOf("l")); // 2
System.out.println(hello.indexOf("l")); // 2
System.out.println(hello.indexOf("o")); // 4
```

### lastIndexOf(string) - 위 indexOf() 와 비슷하지만 뒤에서부터 우선 검색

```java
System.out.println(hello.lastIndexOf("h")); // 0
System.out.println(hello.lastIndexOf("e")); // 1
System.out.println(hello.lastIndexOf("l")); // 3
System.out.println(hello.lastIndexOf("l")); // 3
System.out.println(hello.lastIndexOf("o")); // 4
```

### substring(index, index) - 설정한 범위(startIndex부터 endIndex까지) 문자열 반환

```java
String hello = "hello! my name is yoon";
System.out.println(hello.substring(7)); // my name is yoon
System.out.println(hello.substring(7, 10)); // my
```

### subSequence(index, index) - 위 substring 처럼 범위를 지정하여 문자열 반환, 다른 점은 substring은 startIndex만 써도 되지만 이 메소드는 endIndex까지 써줘야 한다? 그리고 char sequence 형태로 반환이 된다고 한다.

```java
String hello = "hello! my name is yoon";
System.out.println(hello.subSequence(7, 14)); // my name
System.out.println(hello.subSequence(7, 10)); // my
```