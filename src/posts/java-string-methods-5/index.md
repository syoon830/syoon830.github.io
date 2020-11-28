---
title: "[Java] String Method 정리 - 기타"
date: "2020-09-05 21:12"
---

## 기타

### concat(string) - 문자열 끝에 문자열 추가

```java
String hello = "hello ";
System.out.println(hello.concat("yoon")); // hello yoon
```

### format() - locale을 지정하고 string을 인수로 넘겨 형식화 된 문자열을 리턴!

```java
// %s 문자열
System.out.println(String.format("My Name is %s", "yoon")); // My name is yoon
// %d 정수
System.out.println(String.format("1 + 1 = %d", 2)); // 1 + 1 = 2
// %d 16진수
System.out.println(String.format("10의 16진수는 %x", 10)); // 10의 16진수는 a
// %o 8진수
System.out.println(String.format("10의 8진수는 %o", 10)); // 10의 8진수는 12
// %f 실수
System.out.println(String.format("박명수는 %f 인자", 1.5)); // 박명수는 1.500000 인자
```

### length() - 문자열 개수 반환

```java
String hello = "hello";
String hi = "hi";
System.out.println(hello.length()); // 5
System.out.println(hi.length()); // 2
```

### split(string) - 문자열 분해하여 string \[\] 로 변환

```java
String hello = "hello1 hello2 hello3";
String[] splitHello = hello.split(" ");
for (int i = 0; i < splitHello.length; i++ ) {
    System.out.println(splitHello[i]);
}
```

### toLowerCase() - 소문자로 변환

```java
String hello = "HELLO";

System.out.println(hello.toLowerCase()); // hello
```

### toUpperCase() - 대문자로 변환

```java
String hello = "hello";

System.out.println(hello.toUpperCase()); // HELLO
```

### toString() - string value로 반환 (쓰나 안쓰나 차이는 없으나 아직 경험은 못해봐서 정확히 언제 써야하는지 감이 안온다.)

```java
String hello = "hello";
System.out.println(hello.toString()); // hello
```

### trim() - 양쪽 끝 공백 제거

```java
String hello = " hello ";

System.out.println(hello.trim()); // hello
```

### valueOf() - String 값으로 변환

```
int one = 1;

System.out.println(String.valueOf(one));
```

### codePointCount(int, int) - 지정된 텍스트 범위 유니 코드 반환! (startIndex, endIndex)

```java
String hello = "Hello";
System.out.println(hello.codePointCount(0, 5)); // 5
System.out.println(hello.codePointCount(1, 4)); // 3
System.out.println(hello.codePointCount(2, 3)); // 1
```

### toCharArray() - 문자열을 char \[\] 형태로 반환

```
String hello = "hello";

char[] arr = hello.toCharArray();
for (int i = 0; i < arr.length; i++) {
    System.out.print(arr[i] + "|n");
}
----------console---------
h
e
l
l
o
```

### compareTo(string) - 글자를 사전식으로 비교하여 같으면 0 낮으면 음수 높으면 양수 반환

```java
String a = "a";
System.out.println(a.compareTo("a")); // 0
System.out.println(a.compareTo("b")); // -1
System.out.println(a.compareTo("c")); // -2
System.out.println(a.compareTo("d")); // -3
System.out.println(a.compareTo("e")); // -4
System.out.println(a.compareTo("f")); // -5

String z = "z";
System.out.println(z.compareTo("z")); // 0
System.out.println(z.compareTo("y")); // 1
System.out.println(z.compareTo("x")); // 2
System.out.println(z.compareTo("w")); // 3
System.out.println(z.compareTo("v")); // 4
System.out.println(z.compareTo("u")); // 5
```

### compareToIgnoreCase(string) - 위 compareTo와 똑같지만 대문자를 무시함

```java
String a = "a";
System.out.println(a.compareToIgnoreCase("A")); // 0
System.out.println(a.compareToIgnoreCase("B")); // -1
System.out.println(a.compareToIgnoreCase("C")); // -2
System.out.println(a.compareToIgnoreCase("D")); // -3
System.out.println(a.compareToIgnoreCase("E")); // -4
System.out.println(a.compareToIgnoreCase("F")); // -5

System.out.println(a.compareTo("A")); // 32
System.out.println(a.compareTo("B")); // 31
System.out.println(a.compareTo("C")); // 30
System.out.println(a.compareTo("D")); // 29
System.out.println(a.compareTo("E")); // 28
System.out.println(a.compareTo("F")); // 27
```

### copyValueOf() - char 배열의 문자를 조합하여 반환 (char\[\], offset, count)

```java
char[] splitString = {'h', 'e', 'l', 'l', 'o'};
String hello = "";
String hell = "";
String ello = "";
System.out.println(hello.copyValueOf(splitString, 0, 5)); // hello
System.out.println(hell.copyValueOf(splitString, 0, 4)); // hell
System.out.println(ello.copyValueOf(splitString, 1, 4)); // ello
```

### getChars() - 문자열 추출해서 char 배열에 넣어줌!

```
char[] char_str = new char[5];
String hello = "안녕하세요!";
hello.getChars(0, 2, char_str, 0); // hello에 0부터 2까지 추출해서 char_str에 0부터 넣어줌
System.out.println(char_str); // 안녕
```

### intern() - new 객체로 만든경우 메모리에서 문자열을 반환할 때 사용 할 수 있다. 문자열 상수 pool에 heap 문자열 개체의 정확한 복사본을 만듭니다.

```
String s1 = new String("hello");
String s2 = "hello";
String s3 = s1.intern();

System.out.println(s1==s2); // false
System.out.println(s2==s3); // true
System.out.println(s1==s3); // false
```

### offsetByCodePoints() - ??? 32비트

### regionMatches() - Tests if two string regions are equal
