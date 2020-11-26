---
title: "[JPA] Annotation 정리"
date: "2020-09-20 14:55"
---
### @Entity
- 테이블과 매핑할 클래스 위에 선언하는 어노테이션 (선언하면 @Id를 꼭 달아주어야함)
- Entity 이름을 지정하는 name 속성이 있음 (사용은 잘 안하는 듯함)

### @Id
- 테이블 PK 값 매핑

### @GeneratedValue
- @Id와 같이 써주는 어노테이션으로 자동 생성 해줌  
- 속성에는 strategy가 있으면 값으로는 IDENTITY, SEQUENCE, TABLE, AUTO가 있음

### @Table
- 매핑할 테이블 정보를 직접적으로 지정할때 사용  
- 속성에는 name, catalog, schema, uniqueConstraints 가 있음

### @Coumn
- 테이블 컬럼 매핑
- name, insertable, updatable, precision 속성이 있음
- DDL 생성시 옵션은 nullable, unique, columnDefinition, length, scale 속성이 있음

### @Temporal
- 날짜 컬럼 매핑 (현재는 잘 안 쓴다고 한다.)

### @Enumerated
- ENUM 컬럼 매핑 시 사용 (주의: DB에는 ENUM 개념이 없음)
- value 속성이 있으며 그 값에는 EnumType.ORDINAL, EnumType.STRING 있음
    - ORDINAL: enum의 index 값을 저장
    - STRING: enum의 string 값을 저장

### @Lob
- CLOB, BLOB이 있음 (더 알아봐야겠음)

### @Transient
- @Entity 내에 있는 속성 무시할 때 사용. 사용하면 DB에 저장 및 조회 안됨

### @ManyToOne
- 다 대 일

### @OneToOne
- 일 대 일

### @ManyToMany
- 다 대 다

### @OneToMany
- 일 대 다