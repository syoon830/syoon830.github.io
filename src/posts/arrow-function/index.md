---
title: 화살표 함수(=>)
date: 2020-11-19 22:40
categories: ['함수형 프로그래밍']
---

function 키워드 대신 화살표(=>)를 사용하는 방식의 함수

```javascript
// function
function f() {}

// 화살표 함수
const f = () => {};
```

※ 그렇다고 모든 경우에 화살표 함수를 사용하면 안 됨 (아래에서 확인)

## 문법

```javascript
() => {} // 매개변수가 없을 때
x => {} // 매개변수가 한 개인 경우, 소괄호 생략 가능
(x, y) => {} // 매개변수가 여러 개인 경우, 소괄호 생략 불가

x => { return x*x } // 일반적인 함수 사용
x => x*x // 한 줄 구문이라면 중괄호 생략 가능 (암묵적으로 return)

() => { return { a: 1 }} // 일반적인 함수 사용
() => ({ a: 1 }) // 객체 반환 시 소괄호를 사용

// multi line
() => {
	const x = 10;
    return x*x;
}
```

## 일반 함수(funciton)와 화살표 함수(=>) 차이점

가장 큰 차이점은 this인데 코드를 보며 확인해 보자.

### 일반 함수(function)

```javascript
function Prefixer(prefix) {
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
  console.log(this); // Prefixer
  return arr.map(function (x) {
    console.log(this); // Window
    return this.prefix + ' ' + x;
  });
};
var pre = new Prefixer('Hi');
console.log(pre.prefixArray(['Seungyoon'])); // ["undefined Seungyoon"]
```

위 코드를 보게 되면 map 안에 this를 찍어보면 Window를 가르키고 있다. 기본적으로 내부 함수 this는 Window를 가르킨다.

\- 생성자 함수와 객체의 메소드를 제외한 모든 함수(내부 함수, 콜백 함수 포함) 내부의 this는 전역 객체(Window)를 가르키기 때문이다.

### 화살표 함수(=>)

```javascript
function Prefixer(prefix) {
  this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
  console.log(this); // Prefixer
  return arr.map((x) => {
    console.log(this); // Prexier
    return this.prefix + ' ' + x;
  });
};
var pre = new Prefixer('Hi');
console.log(pre.prefixArray(['Seungyoon'])); // ["Hi Seungyoon"]
```

위 코드와 다르게 map 안에 this는 Prexier를 가르킨다. 이는 화살표 함수의 this는 언제나 상위 스코프의 this를 가르키기 때문이다.

## 화살표 함수를 사용해서는 안되는 경우

### 1. 메소드

**\- bad**

```javascript
const seungyoon = {
  firstName: 'kim',
  lastName: 'seungyoon',
  getFirstName: () => {
    return this.firstName;
  },
};

console.log(seungyoon.getFirstName()); // undefined
```

**\- good**

```javascript
const seungyoon = {
  firstName: 'kim',
  lastName: 'seungyoon',
  getFirstName: function () {
    return this.firstName;
  },
};

console.log(seungyoon.getFirstName()); // kim
```

**\- best**

```javascript
const seungyoon = {
  firstName: 'kim',
  lastName: 'seungyoon',
  getFirstName() {
    return this.firstName;
  },
};

console.log(seungyoon.getFirstName()); // kim
```

### 2. prototype

**\- bad**

```javascript
const Person = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

Person.prototype.getFullName = () => {
  return this.firstName + ' ' + this.lastName;
};

const seungyoon = new Person('seungyoon', 'kim');
console.log(seungyoon.getFullName()); // undefined undefined
```

**\- good**

```javascript
const Person = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

Person.prototype.getFullName = () => {
  return this.firstName + ' ' + this.lastName;
};

const seungyoon = new Person('seungyoon', 'kim');
console.log(seungyoon.getFullName()); // undefined undefined
```

### **3\. 생성자 함수**

```javascript
const Person1 = () => {};
const Person2 = function () {};

// 화살표 함수는 prototype 프로퍼티가 없음
console.log(Person1.prototype); // undefined
// 일반 함수는 prototype 내 생성자 함수가 있음
console.log(Person2.prototype); // { constructor...}

const person1 = new Person1(); // TypeError: Person1 is not a constructor
const person2 = new Person2();
```

### **4\. addEventListener 함수의 콜백 함수**

**\- bad**

```javascript
var button = document.getElementById('button');

button.addEventListener('click', () => {
  console.log(this); // window
  this.innerHTML = 'Clicked Button';
});
```

**\- good**

```javascript
var button = document.getElementById('button');

button.addEventListener('click', function () {
  console.log(this); // button
  this.innerHTML = 'Clicked Button';
});
```

#### 참고:  
[poiemaweb.com/es6-arrow-function](https://poiemaweb.com/es6-arrow-function)
