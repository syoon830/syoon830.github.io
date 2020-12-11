---
title: 이터레이션 프로토콜(Iteration protocols)
date: 2020-11-30 22:58
categories: ['ES6']
---

이터레이션 프로토콜(iteration protocol)은 데이터 컬렉션을 순회하기 위한 규칙과 약속이다.  
ES6에 도입된 for..of문과 Spread문법의 피연산자가 되기 위해서는 이 프로토콜을 준수하여야 한다.

이터레이션 프로토콜에는 이터러블 프로토콜(iterable protocol), 이터레이터 프로토콜(iterator protocol)이 있다.

## 이터러블
\- 이터러블 프로토콜을 준수한 객체를 이터러블이라 한다. 

### 이터러블 프로토콜  
\- `Symbol.iterator` 메소드를 가지고 있으며, 이 메소드는 `이터레이터`를 반환한다.

Array는 대표적인 이터러블 객체로 Object와 비교해보면
```javascript
const arr = [1, 2, 3];
const obj = {};
console.dir(arr.__proto__.hasOwnProperty(Symbol.iterator)); // true
console.dir(obj.__proto__.hasOwnProperty(Symbol.iterator)); // false

for (const a of arr) {
    console.log(a);
}

for (const o of obj) {
    console.log(o);
}
```

output:  
> true  
> false  
> 1  
> 2  
> 3  
> Uncaught TypeError: obj is not iterable

Object는 Symbol.iterator가 없기 때문에 for..of문을 사용 할 수 없다.

## 이터레이터
이터레이터 프로토콜을 준수한 객체를 이터레이터라고 한다.

### 이터레이터 프로토콜
\- 이터러블이 소유한 Symbol.iterator 메소드가 아래의 형태를 반환한다.
```javascript
{
  next() {
    return {
      value: any,
      done: boolean
    }
  }
}
```

대표적인 이터러블 객체인 Array(배열)를 확인해 보면
```javascript
// 배열은 이터러블을 준수한 객체다.
const arr = [1, 2, 3];

// Symbol.iterator 메소는 이터레이터를 반환한다.
const iterator = arr[Symbol.iterator]();

// 이터레이터 프로토콜을 준수한 객체다.
console.log('next' in iterator); // true
console.log('value' in iterator.next()); // true
console.log('done' in iterator.next()); // true
```

#### 참고:  
>[poiemaweb.com/es6-iteration-for-of](https://poimaweb.com/es6-iteration-for-of)  
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
