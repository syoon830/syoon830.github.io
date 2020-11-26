---
title: "[Java] Wrapper Class 정리"
date: "2020-10-09 20:21"
---

### **Wrapper Class란 무엇인가?**

이름에서 알 수 있듯이 Wrapper Class는 기본 Java 유형을 캡슐화하는 객체다.

각 자바 기본 타입에는 일치하는 Wrapper Class가 있다.

| 기본 타입 | Wrapper Class |
| :------- | :------------ |
| boolean  | Boolean       |
| byte     | Byte          |
| short    | Short         |
| char     | Character     |
| int      | Integer       |
| long     | Long          |
| float    | Float         |
| double   | Double        |

---

### **왜, 언제 사용할까?**

#### 기본적으로 제네릭은 기본 타입을 받지 못한다! 이때 Wrapper Class를 써주면 된다.

```java
ArrayList<int> ints = new ArrayList<int>(); // 에러 발생

ArrayList<Integer> integers = new ArrayList<>(); // 정상 동작
```

#### 또한 기본 타입은 null을 받지 못하지만 Wrapper Class는 null을 받을 수 있다.

```java
int nullable1 = null; // 에러 발생

Integer nullable2 = null; // 정상 동작
```

#### toString()을 통해 문자열로 반환이 가능하고 length를 통해 길이를 체크 할 수도 있다.

```java
Integer myInteger = 123;

System.out.println(myInteger.toString().length()); // 3
```