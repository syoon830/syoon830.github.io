---
title: "[Java] String Method 정리 - 비교"
date: "2020-09-02 20:04"
---

## 비교

### contains(string) - 문자열이 포함 되어 있는지 확인, 포함 되어 있으면 true 그렇지 않으면 false 반환

```java
String apple = "apple";
System.out.println(apple.contains("app")); // true
System.out.println(apple.contains("apple")); // true
System.out.println(apple.contains("apple!")); // false
System.out.println(apple.contains("pear")); // false
```

### contentEquals(string) - 문자열이 정확하게 일치하는지 확인

```java
String apple = "apple";
System.out.println(apple.contentEquals("app")); // false
System.out.println(apple.contentEquals("apple")); // true
System.out.println(apple.contentEquals("apple!")); // false
System.out.println(apple.contentEquals("pear")); // false
```

### endWith(string) - 지정 된 문자로 끝나는지 확인, 지정 된 문자로 끝나면 true 그렇지 않으면 false 반환

```java
String hello = "hello";
System.out.println(hello.endsWith("o")); // ture
System.out.println(hello.endsWith("lo")); // ture
System.out.println(hello.endsWith("llo")); // ture
System.out.println(hello.endsWith("ello")); // ture
System.out.println(hello.endsWith("hello")); // ture

System.out.println(hello.endsWith("h")); // false
System.out.println(hello.endsWith("he")); // false
System.out.println(hello.endsWith("hel")); // false
System.out.println(hello.endsWith("hell")); // false
```

### equals(string) - 문자열 비교, 같은지 다른지

```java
String hello = "hello";
System.out.println(hello.equals("hello")); // ture
System.out.println(hello.equals("hi")); // false
```

### equalsIgnoreCase(string) - 문자열 비교, 같은지 다른지, 대문자 무시!

```java
String hello = "hello";
System.out.println(hello.equalsIgnoreCase("HELLO")); // ture
System.out.println(hello.equalsIgnoreCase("hello")); // ture
System.out.println(hello.equalsIgnoreCase("hi")); // false
```

### isEmpty(string) - 문자열이 비어 있는지 확인, 비어 있으면 true 문자열 있으면 false

```java
String hello = "hello";
System.out.println(hello.isEmpty()); // false
hello = "";
System.out.println(hello.isEmpty()); // true
```

### matches(string) - 문자열이 정확하게 일치하는지 확인 및 정규식을 이용하여 확인 할 수 있다.

```java
String hello = "hello";

System.out.println(hello.matches("he")); // false
System.out.println(hello.matches("hello")); // true
System.out.println(hello.matches("(.*)hello")); // true
```

### startsWith(string) - endsWith() 반대로 지정 된 문자로 시작하는지 확인, 지정 된 문자로 시작하면 true 그렇지 않으면 false 반환

```java
String hello = "hello";

System.out.println(hello.startsWith("h")); // true
System.out.println(hello.startsWith("he")); // true
System.out.println(hello.startsWith("hel")); // true
System.out.println(hello.startsWith("hell")); // true
System.out.println(hello.startsWith("hello")); // true

System.out.println(hello.startsWith("o")); // false
System.out.println(hello.startsWith("lo")); // false
System.out.println(hello.startsWith("llo")); // false
System.out.println(hello.startsWith("ello")); // false
```

### regionMatches(int, string, int, int) - 두 문자열 영역이 같은지 비교

```java
String str1 = "What's your name?";
String str2 = "What's";
String str3 = "your name?";

// str1에 0번째(W...)부터 str2에 0번째(W...)에서 6자와 비교 (What's)
System.out.println(str1.regionMatches(0, str2, 0, 6)); // What's your name? == What's -> true
// str1에 7번째(y...)부터 str2에 0번째(W...)에서 6자와 비교(What's)
System.out.println(str1.regionMatches(7, str2, 0, 6)); // your name? == What's -> false
// str1에 12번째(y...)부터 str3에 5번째(n...)에서 4자와 비교(name)
System.out.println(str1.regionMatches(12, str3, 5, 4)); // your name? == name ->  true
```