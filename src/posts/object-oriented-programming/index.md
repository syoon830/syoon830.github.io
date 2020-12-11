---
title: '객체지향 프로그래밍 (with. ES6)'
date: '2020-11-15 21:45'
categories: ['객체지향 프로그래밍']
---

프로그래밍의 설계 패러다임 중 하나로, 현실 세계를 프로그램 설계에 반영한다는 개념을 기반으로 접근하는 방법

### 클래스와 인스턴스(객체)

클래스는 일종의 설계도이고 인스턴스는 클래스를 사용하여 생성한 실제 물건이다.  
\- 스마트폰(클래스), 아이폰(인스턴스), 갤럭시(인스턴스)  
\- 자동차(클래스), 소나타(인스턴스), 그랜져(인스턴스)  
위 정의가 꼭 클래스, 인스턴스라는 이야기는 아니다. 스마트폰, 자동차 또한 인스턴스가 될 수 있다.

\- 무선 전화기(클래스) - 스마트폰(인스턴스)  
\- 이동수단(클래스) - 자동차(인스턴스)  
마찬가지로 무선 전화기, 이동수단 또한 꼭 클래스가 아닐 수 있다.

```javascript
class SmartPhone {
  constructor(name) {
    this.name = name;	
  }
  
  getName() {
  	return this.name;
  }
}

let galaxy = new SmartPhone("Galaxy");
let iphone = new SmartPhone("Iphone");
```

> \+ 이렇게 상위 개념을 추적하는 행위(아이폰 -> 스마트폰 -> 전화기)를 **추상화(Abstarction)**라고 한다. 추상은 객체가 가지고 있는 여러 가지 속성 중에서 특정한 속성을 가려내어 포착하는 것을 의미한다. (필요한 관점만을 추출하는 행위)

## 객체지향 프로그래밍은 아래의 특징을 가지고 있다.

### 상속(inheritance)

속성 및 기능을 물려받아 확장 할 수 있다.

```javascript
class Car {
  axle() {
    console.log('이동');
  }
  break() {
    console.log('멈춤');
  }
}

class Hyundai extends Car {
  // Car의 기능을 물려 받음(axle, break)
  companyName = '현대';
  country = '대한민국';
}

class Sonata extends Hyundai {
  // Car의 기능을 물려 받음(axle, break)
  // Hyundai 속성을 물려 받음(compnayName, country)
  modelName = '소나타';

}

let sonata2020 = new Sonata();
console.log(sonata2020.companyName); // 현대
console.log(sonata2020.country); // 대한민국
sonata2020.axle(); // 이동
sonata2020.break(); // 멈춤
```
이렇게 상속을 하게 되면 중복 코드를 피할 수 있다.

### 다형성(Polymorphism)
어떤 하나의 변수명이나 함수명이 상황에 따라서 다르게 해석될 수 있는 것을 의미 (형태가 같은데 다른 기능을 하는 것)

```javascript
class Animal {
  sound() {
    console.log('동물 울음소리를 만들어주세요.');
  }
}

class Cat extends Animal {
  sound() {
    console.log('야옹');
  }
}

class Dog extends Animal {
  sound() {
    console.log('멍멍');
  }
}

let Leo = new Cat();
let Bella = new Dog();

Leo.sound(); // 야옹
Bella.sound(); // 멍멍
```

### 캡슐화(Encapsulation)
기본적으로 관련된 여러 가지 정보를 하나의 틀 안에 담는 것을 의미한다. 아래 코드를 보면 변수들과 메서드가 서로 관련된 정보가 되고 클래스(Person)이 이것을 담는 하나의 큰 틀이라고 할 수 있다. 여기에서 중요한 것은 은닉화, 정보의 공개 여부이다. 정보 은닉(Information hiding)의 개념이 바로 이 부분을 담당한다.

```java
// 캡슐화 (속성, 메소드)
public class Capsule {
  // 은닉화
  private String name;
  private String id;

  // 은닉화한 정보 제어 할 수 있는 메소드
  // 외부에 공개
  public String getName() {
  	return this.name;
  }
  public String setName(String name) {
  	return this.name = name;
  }
  public String getId() {
  	return this.id;
  }
  public String setName(String id) {
  	return this.id = id;
  }
}
```

#### 참고:
> 인사이드 자바스크립트  
> vandbt.tistory.com/10  
> evan-moon.github.io/2019/08/24/what-is-object-oriented-programming/ 
> www.opentutorials.org/module/2495/14037
> victorydntmd.tistory.com/117
