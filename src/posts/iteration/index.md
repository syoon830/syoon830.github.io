---
title: 이터레이션
date: 2020-11-30 22:58
categories: ["함수형 프로그래밍"]
---

이터레이션 프로토콜(iteration protocol)은 데이터 컬렉션을 순회하기 위한 규칙과 약속이다.

이 이터레이션 프로토콜(iteration protocol)에는 이터러블 프로토콜(iterable protocol)과 이터레이터 프로토콜(iterator protocol)이 있다.

(용어가 비슷비슷해서 헷갈린다...)

**이터러블 프로토콜(iterable protocol): \[Symbol.iterator\]()를 가지고 있음**

**이터레이터 프로토콜(iterator protocol): { next() { return { value: any, done: boolean } } } 형태의 객체를 가지고 있음**

### 이터러블

**이터러블 프로토콜을 준수한 객체를 이터러블이라 한다.**

Array는 Symbol.iterator를 가지고 있다. 따라서 Array는 이터러블 프로토콜을 준수한 이터러블이다.

Array 외에도 Map, Set, String, TypedArray등이 이터러블 프로토콜을 준수한 이터러블이다.

\- Array, String, Map, Set, TypedArray(Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array), DOM data structure(NodeList, HTMLCollection), Arguments

Object, Number, Boolean 등의 일반 객체는 Symbol.iterator 소유하고 있지 않다. 따라서 이터러블 프로토콜을 준수한 이터러블이 아니다.

```javascript
const arr = [1, 2, 3]
const str = "Hello"
const map = new Map()
const set = new Set()

const num = 1
const bool = false

console.dir(arr.__proto__.hasOwnProperty(Symbol.iterator)) // true
console.dir(str.__proto__.hasOwnProperty(Symbol.iterator)) // true
console.dir(map.__proto__.hasOwnProperty(Symbol.iterator)) // true
console.dir(set.__proto__.hasOwnProperty(Symbol.iterator)) // true
console.dir(num.__proto__.hasOwnProperty(Symbol.iterator)) // false
console.dir(bool.__proto__.hasOwnProperty(Symbol.iterator)) // false
```

### 이터레이터

**Symbol.iterator 메소드를 통해 반환 받은 객체를 이터레이터한다. 이 이터레이터는 이터레이터 프로토콜을 준수한다.**

```javascript
const arr = [1, 2, 3]
// 이터러블 프로토콜을 준수한 객체다.
console.log(Symbol.iterator in arr) // true

// Symbol.iterator 메소드는 이터레이터를 반환한다.
const iterator = arr[Symbol.iterator]()
// 이터레이터 프로토콜을 준수한 객체다.
console.log("next" in iterator) // true
console.log("value" in iterator.next()) // true
console.log("done" in iterator.next()) // true
```

### for of 문

내부적으로 이터레이터의 next 메소드를 호출하여 **done이 ture일때 까지 순회하며** 변수에 value값을 할당한다.

[poiemaweb.com/es6-iteration-for-of](https://poiemaweb.com/es6-iteration-for-of)
