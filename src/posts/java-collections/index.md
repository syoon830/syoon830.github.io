---
title: "[Java] List, Map, Set"
date: "2020-09-09 21:06"
---

Java 컬랙션 List, Map, Set을 정리해 보았다!

| List       | Map           | Set           |
| :--------- | :------------ | :------------ |
| Vector     | HashMap       | HashSet       |
| ArrayList  | TreeMap       | LinkedHashSet |
| LinkedList | HashTable     | TreeSet       |
|            | LinkedHashMap |               |

## **List**

List에는 **Vector, ArrayList, LinkedList** 3개가 있다. 여기서 Vector는 거의 사용하지 않는다고 한다. 그럼 Vector를 제외 한 ArrayList와 LinkedList의 성능을 비교하자면 추가(add) 및 제거(remove)시에는 LinkedList가 빠르고 값을 검색(get)시에는 ArrayList가 더 빠르다.

## **Map**

Map에는 **HashMap, TreeMap, HashTable, LinkedHashMap** 4개가 있다. 여기서 HashTable은 더 이상 사용하지 않는 구식 메소드라고 한다. 그럼 나머지 3개에 차이는 무엇일까?

#### HashMap - 순서가 보장 되지 않음. key, value 모두에 null 허용! 

\*ConcurrentHashMap 도 있음! HashMap은 동시성 이슈가 발생

```java
Map<Integer, String> hMap = new HashMap<Integer, String>();
hMap.put(5, "A");
hMap.put(11, "C");
hMap.put(4, "Z");
hMap.put(77, "Y");
hMap.put(9, "P");
hMap.put(66, "Q");
hMap.put(0, "R");
System.out.println(hMap.entrySet()); // [0=R, 66=Q, 4=Z, 5=A, 9=P, 11=C, 77=Y]
```

#### TreeMap - HashMap과 비슷하나 순서가 보장이 되고 (0 -> 1 -> .... 77), value에만 null을 허용!

```java
Map<Integer, String> tMap = new TreeMap<Integer, String>();
tMap.put(5, "A");
tMap.put(11, "C");
tMap.put(4, "Z");
tMap.put(77, "Y");
tMap.put(9, "P");
tMap.put(66, "Q");
tMap.put(0, "R");
System.out.println(tMap.entrySet()); // [0=R, 4=Z, 5=A, 9=P, 11=C, 66=Q, 77=Y]
```

#### LinkedHashMap - 입력 한 순서대로 정렬

```java
Map<Integer, String> lhMap = new LinkedHashMap<>();
lhMap.put(5, "A");
lhMap.put(11, "C");
lhMap.put(4, "Z");
lhMap.put(77, "Y");
lhMap.put(9, "P");
lhMap.put(66, "Q");
lhMap.put(0, "R");
System.out.println(lhMap.entrySet()); // [5=A, 11=gg, 4=Z, 77=Y, 9=P, 66=Q, 0=R]
```

보통은 HashMap을 많이 사용하며 각 메소드의 특성을 잘 활용하여 사용 하면 될 것 같다!

## **Set**

**이 인터페이스는 일반적으로 중복을 허용하지 않는다.**

### HashSet - 순서가 보장이 되고 null이 허용이 됨

```java
Set<Integer> hashSet = new HashSet<>();

hashSet.add(null);
hashSet.add(1);
hashSet.add(3);
hashSet.add(2);
hashSet.add(4);

System.out.println(hashSet);
```

Output:

> \[null, 1, 2, 3, 4\]

### TreeSet - HashSet과 비슷하나 null이 허용이 안됨 (null 입력시 **NullPointerException** 발생)

### LinkedHashSet - HashSet과 다르게 순서가 보장이 안됨

```java
Set<Integer> linkedHashSet = new LinkedHashSet<>();

linkedHashSet.add(2);
linkedHashSet.add(1);
linkedHashSet.add(3);

System.out.println(linkedHashSet);
```

Output:

> \[2, 1, 3\]

사용 해보면서 내용을 더 채워야 겠다.

참조: [javatutorial.net/difference-between-hashmap-and-treemap-in-java](https://javatutorial.net/difference-between-hashmap-and-treemap-in-java)
