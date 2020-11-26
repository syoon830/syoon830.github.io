---
title: "[Java] public, private, default, protected 비교"
date: "2020-08-28 20:00"
---

자바를 공부하면서 접근 제어자가 헷갈려 정리해 보았다.

### public

모든 클래스에서 사용가능 (다른 패키지 포함)

```java
// fruit/Apple.java
public class Apple {
    public String name = "사과";
}

// fruit/Pear.java (Apple.java name에 접근가능)
public class Pear {
    public static void main(String[] args) {
        Apple apple = new Apple();
        System.out.println(apple.name); // "사과"
    }
}

// vegetable/Pimento.java (Apple.java name에 접근가능)
public class Pimento {
    public static void main(String[] args) {
        Apple apple = new Apple();
        System.out.println(apple.name); // "사과"
    }
}
// vegetable/Carrot.java (Apple.java name에 접근가능)
public class Carrot {
    public static void main(String[] args) {
        Apple apple = new Apple();
        System.out.println(apple.name); // "사과"
    }
}
```

![](./1.png)

### default

해당 패키지 내 클래스에서만 사용가능

```java
// fruit/Apple.java
public class Apple {
    String name = "사과"; // (default 생략 가능)
}

// fruit/Pear.java (Apple.java name에 접근가능)
public class Pear {
    public static void main(String[] args) {
        Apple apple = new Apple();
        System.out.println(apple.name); // "사과"
    }
}

// vegetable/Pimento.java (Apple.java name에 접근불가)
public class Pimento {
    public static void main(String[] args) {
        Apple apple = new Apple();
        System.out.println(apple.name); // error
    }
}
// vegetable/Carrot.java (Apple.java name에 접근불가)
public class Carrot {
    public static void main(String[] args) {
        Apple apple = new Apple();
        System.out.println(apple.name); // error
    }
}
```

![](./2.png)

### private

같은 클래스에서만 사용가능

```java
// fruit/Apple.java
public class Apple {
    private String name = "사과"; 
}

// fruit/Pear.java (Apple.java name에 접근불가)
public class Pear {
    public static void main(String[] args) {
        Apple apple = new Apple();
        System.out.println(apple.name); // error
    }
}

// vegetable/Pimento.java (Apple.java name에 접근불가)
public class Pimento {
    public static void main(String[] args) {
        Apple apple = new Apple();
        System.out.println(apple.name); // error
    }
}
// vegetable/Carrot.java (Apple.java name에 접근불가)
public class Carrot {
    public static void main(String[] args) {
        Apple apple = new Apple();
        System.out.println(apple.name); // error
    }
}
```

![](./3.png)

### protected

같은 패키지 내 클래스는 접근 가능. 다른 패키지 내 클래스는 조건부 접근 가능 (확장하여)

```java
// fruit/Apple.java
public class Apple {
    protected String name = "사과"; 
}

// fruit/Pear.java (Apple.java name에 접근가능)
public class Pear {
    public static void main(String[] args) {
        Apple apple = new Apple();
        System.out.println(apple.name); // error
    }
}

// vegetable/Pimento.java
// Apple.java name에 직접적으로 접근은 불가
public class Pimento {
    public static void main(String[] args) {
        Apple apple = new Apple();
        System.out.println(apple.name); // error
    }
}
// 확장하여 접근 가능
public class Pimeto extends Apple {
    public static void main(String[] args) {
        Pimeto apple = new Pimeto();
        System.out.println(apple.name); // "사과"
    }
}
// vegetable/Carrot.java 
// Apple.java name에 직접적으로 접근은 불가
public class Carrot {
    public static void main(String[] args) {
        Apple apple = new Apple();
        System.out.println(apple.name); // error
    }
}
// 확장하여 접근 가능
public class Carrot extends Apple {
    public static void main(String[] args) {
        Carrot apple = new Carrot();
        System.out.println(apple.name); // "사과"
    }
}
```

![](./4.png)