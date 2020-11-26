---
title: "[Java] Optional 정리"
date: "2020-08-31 20:43"
---

## **CreatingOptionalObjects**

### empty() - 값 비우기

```java
Optional<String> empty = Optional.empty();
```

### of() - 값 설정

```java
Optional<String> opt = Optional.of("opt");
```

### ofNullable() - 값이 null이거나 있거나

```java
Optional<String> opt = Optional.ofNullable("opt");
// or
Optional<String> opt = Optional.ofNullable(null);
```

---

## **Returning Value Withget()**

### get() - 값 얻기

```java
Optional<String> opt1 = Optional.of("opt1");
Optional<String> opt2 = Optional.ofNullable("opt2");

System.out.println(opt1.get()); // opt1
System.out.println(opt2.get()); // opt2
```

---

## **Checking Value Presence**

### isPresent() - 값이 있나 없나 (있으면 true, 없으면 false)

```java
Optional<String> opt1 = Optional.of("opt1");
Optional<String> opt2 = Optional.ofNullable("opt2");
Optional<String> opt3 = Optional.ofNullable(null);

System.out.println(opt1.isPresent()); // true
System.out.println(opt2.isPresent()); // true
System.out.println(opt3.isPresent()); // false
```

### ifPresent() - 만약에 값이 있다면

```java
Optional<String> opt1 = Optional.of("opt1");
Optional<String> opt2 = Optional.ofNullable("opt2");

opt1.ifPresent(name -> System.out.println(name)); // opt1
opt2.ifPresent(name -> System.out.println(name)); // opt2
```

### ifPresentElse() - 만약에 값이 있거나 없다면

---

## **Conditional Return**

### filter() - 값을 걸러 줌

```java
Optional<Integer> year = Optional.of(2020);

System.out.println(year.filter(y -> y == 2020).isPresent()); // true;
System.out.println(year.filter(y -> y == 2019).isPresent()); // false;
```

---

## **Transforming Value**

### map() - 값을 변환해서 반환

```java
Optional<Integer> year = Optional.of(2020);
Optional<Integer> nextYear = year.map(y -> y + 1);
System.out.println(nextYear.get()); // 2021
```

### flatMap() - 헷갈리는 부분인데 나중에 다시 확인

```java
Optional<String> str = Optional.ofNullable("str");
Optional<Integer> integer = str.flatMap(s -> Optional.of(s.length()));
System.out.println(integer.get()); // 3

String[][] data = new String[][]{ {"1", "2"}, {"3", "4"} };

Stream<Stream<String>> map = Arrays.stream(data).map(x -> Arrays.stream(x));
map.forEach(s -> s.forEach(System.out::println));

Stream<String> flatmap = Arrays.stream(data).flatMap(x -> Arrays.stream(x));
flatmap.forEach(System.out::println);
```

---

## **Default Value**

### orElse() - null 이면 설정한 값으로

```java
String nullName = null;
String name = Optional.ofNullable(nullName).orElse("john");
System.out.println(name); // john
```

### orElseGet() - null이면 함수 실행! (orElse랑 거의 비슷...)

```java
String nullName = null;
String name = Optional.ofNullable(nullName).orElseGet(() -> {
System.out.println("호출도 가능!");
    return "john";
});
System.out.println(name);

----- console ----
호출도 가능!
john
```

### orElseThrow() - null이면 예외 발생!

```java
String nullName = null;
String name = Optional.ofNullable(nullName).orElseThrow(
    IllegalArgumentException::new
);

----- console ----
Exception in thread ....
```

---

참고: [www.baeldung.com/java-optional](https://www.baeldung.com/java-optional)  
참고: [qkrrudtjr954.github.io/java/2017/10/15/difference-between-map-and-flatMap.html](https://qkrrudtjr954.github.io/java/2017/10/15/difference-between-map-and-flatMap.html)