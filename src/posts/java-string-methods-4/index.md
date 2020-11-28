---
title: "[Java] String Method 정리 - 특수코드로 반환"
date: "2020-09-05 21:09"
---

### codePointAt(int) - 지정 된 인덱스에 있는 문자의 유니코드 반환!

```java
String str = "str";
System.out.println(str.codePointAt(0)); // 115
System.out.println(str.codePointAt(1)); // 116
System.out.println(str.codePointAt(2)); // 114
```

### codePointBefore(int) - 지정 된 인덱스 앞에 있는 문자의 유니코드 반환!

```java
String str = "str";
System.out.println(str.codePointBefore(1)); // 115
System.out.println(str.codePointBefore(2)); // 116
```

### getBytes(string) - byte로 인코드 해줌, getBytes(캐릭셋) 설정 가능!

```java
String hello = "hello";
byte[] encodeHello = hello.getBytes();

System.out.println(encodeHello); // [B@b97c004

String decodeHello = new String(encodeHello);
System.out.println(decodeHello); // hello
```

### hashCode() - hash code로 반환

```java
String hello = "hello";
System.out.println(hello.hashCode()); // 99162322
```
