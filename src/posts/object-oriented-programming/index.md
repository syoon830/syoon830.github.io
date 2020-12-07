---
title: "객체 지향 프로그래밍 (Object Oriented Programming)"
date: "2020-11-15 21:45"
categories: ["객체지향 프로그래밍"]
---

## 객체지향이란?

\- **캡슐화, 다형성, 상속**을 이용하여 코드 재사용을 증가 시키고, 유지보수를 감소 시키는 장점을 얻기 위해서 객체들을 연결 시켜 프로그래밍 하는것

\- 프로그래밍의 설계 패러다임 중 하나로, 현실 세계를 프로그램 설계에 반영한다는 개념을 기반으로 접근하는 방법

### 클래스와 객체 (Class, Object)

클래스는 일정의 설계도이고 객체는 클래스를 사용하여 생성한 실제 물건이다.

\- 스마트폰(클래스), 아이폰(객체), 갤럭시(객체)

\- 자동차(클래스), 소나타(객체), 그랜져(객체)

위 정의가 꼭 클래스, 객체라는 이야기는 아니다. 스마트폰, 자동차 또한 객체가 될 수 있다.

\- 무선 전화기(클래스) - 스마트폰(객체)

\- 이동수단(클래스) - 자동차(객체)

마찬가지로 무선 전화기, 이동수단 또한 꼭 클래스가 아닐 수 있다.

### 추상화(Abstration)

> 아이폰12 -> 아이폰 -> 스마트폰 -> 무선 전화기 -> 전화기 -> 통신 기기 -> 기계 ...

이렇게 상위 개념을 추적해나가면서 만들어지는 행위 자체를 추상화(Abstration)라고 한다. 추상은 객체가 가지고 있는 여러가지 속성 중에서 특정한 속성을 가려내어 포착하는 것을 의미한다. (**필요한 관점만을 추출하는 행위)**

![](./1.jpg)
![](./2.gif)

## 객체지향 프로그래밍 언어의 특징

### 1\. 상속(inheritance)

\- 속성 및 기능을 물려받아 확장 할 수 있음.

```java
class 자동차 {
	void 악셀() {
    	System.out.println('이동');
    }

    void 브레이크() {
    	System.out.println('멈춤');
    }
}

class 현대 extends 자동차 {
	... 기본적인 자동차의 기능을 물려 받음 (악셀, 브레이크)

    String 회사이름 = 현대;
}

class 소나타 extends 현대 {
	... 기본적인 자동차의 기능을 물려 받음 (악셀, 브레이크)
    ... 회사이름을 물려 받음 (현대)

    String 자동차이름 = 소나타;
}
```

상속이 필요한 이유는**코드의 중복을 없애기 위함**입니다.

### 2\. 다형성(Polymorphism)

\- 어떤 하나의 변수명이나 함수명이 상황에 따라서 다르게 해석될 수 있는 것을 의미 (형태가 같은데 다른 기능을 하는 것)

```java
class 동물 {
  void 울음() {
  }
}

class 고양이 extends 동물 {
  @Override
  void 울음() {
    System.out.println("야옹");
  }
}

class 강아지 extends 동물 {
  @Override
  void 울음() {
    System.out.println("멍멍");
  }
}
```

### 3\. 캡슐화(Encapsulation)

\- 어떠한 클래스를 사용할 때 내부 동작이 어떻게 돌아가는지 모르더라도 사용법만 알면 쓸 수 있도록 클래스 내부를 감추는 기법이다.

\- 캡슐화는 외부에서 사용 못하도록 은닉화하는 은닉성이 존재한다.

\- 은닉화 된 정보를 사용하기 위해서는 메소드를 사용한다.

![](./3.jpg)

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
