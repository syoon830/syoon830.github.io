---
title: "[Java] static"
date: "2020-10-09 20:23"
---

static은 메모리 관리에 사용됩니다. 해당 클래스의 인스턴스가 아닌 클래스 자체에 속합니다.

static 키워드는 Variable, Method, Block, Nested class에 적용 할 수 있습니다.

## **1\. Variable**

\- static 변수는 모든 인스턴스의 공통 속성을 참조하는데 사용할 수 있습니다. (예: 직원의 회사 이름, 학생의 대학 이름 등)

\- static 변수는 class 로드시 class 영역에서 한번만 메모리를 가져옵니다.

```java
class Student {
	int rollno;
	String name;
	String college = "ITS";
}
```

500명의 학생을 등록 한다 했을 때, 모든 인스턴스 데이터 멤버는 객체가 생성 될 때마다 메모리를 갖게 됩니다.

모든 학생은 고유한 롤 번호와 이름을 가지고 있으므로 이러한 경우 인스턴스 데이터 멤버가 좋습니다. 여기, "college" 속성은 모든 객체의 공통 속성을 나타냅니다.

만약 static으로 만든다면 이 속성은 메모리를 한번만 가져옵니다.

```java
class Student {
      int rollno; // instance variable
      String name; // instance variable
      static String college = "ITS"; // static variable
    
      // constructor
      Student(int r, String n) {
          rollno = r;
          name = n;
      }
    
      void display() {
          System.out.println(rollno + " " + name + " " + college);
      }
}
```

```java
public class TestStaticVariable1 {
	public static void main(String args[]) {
    	Student s1 = new Student(111, "Karan");
        Student s2 = new Student(222, "Aryan");
        
        s1.display();
        s2.display();
    }
}
```

Output:

> 111 Karan ITS  
> 222 Aryan ITS

![](./1.png)

### **소스 코드를 통해 static 변수를 확인해보자!**

#### **static을 사용 안하는 Counter**

```java
public class Counter {
	int count = 0;

	Counter() {
		count++;
		System.out.println(count);
	}

	public static void main(String[] args) {
		Counter c1 = new Counter();
		Counter c2 = new Counter();
		Counter c3 = new Counter();
	}
}
```

Output:

> 1  
> 1  
> 1

#### **static을 사용하는 Counter**

```java
public class Counter {
	static int count = 0;

	Counter() {
		count++;
		System.out.println(count);
	}

	public static void main(String[] args) {
		Counter c1 = new Counter();
		Counter c2 = new Counter();
		Counter c3 = new Counter();
	}
}
```

Output:

> 1  
> 2  
> 3

## **2\. Method**

\- 위 변수와 마찬가지로 method 또한 클래스 자체에 속함

\- 인스턴스를 만들 필요 없이 클래스에서 바로 호출 가능

\- static 변수를 제어 할 수 있음

```java
public class Student {
	int rollno;
	String name;
	static String collge = "ITS";

	static void change() {
		collge = "BBDIT";
	}

	public Student(int r, String n) {
		rollno = r;
		name = n;
	}

	void display() {
		System.out.println(rollno + " " + name + " " + collge);
	}
}
```

```java
public class TestStaticMethod {
	public static void main(String[] args) {
		Student.change();

		Student s1 = new Student(111, "Karan");
		Student s2 = new Student(222, "Aryan");
		Student s3 = new Student(333, "Sonoo");

		s1.display();
		s2.display();
		s3.display();
	}
}
```

Output:

> 111 Karan BBDIT  
> 222 Aryan BBDIT  
> 333 Sonoo BBDIT