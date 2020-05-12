
# node.js
js를 이용한 프로그램 엔진?
확장성있는 네트워크 애플리케이션
경량 서버에 가장 적합
프론트엔드에서 쓰는 것을 백엔드에서 사용가능  반대도 가능
페이팔, 야후등에서 검증이됨
+) C++로 웹 애플리케이션 개발 가능. 그러나 공식 홈페이지에 다른 장고나 RoR을 쓸 것을 추천함.

### 기본문법
- 변수, 자료형
	var x = 5;
	var : 모든 변수를 담을 수 있는 예약어, 변수의 타입을 지정하지 않음.
- 출력 : console.log() 사용
- 메서드, 기능, function
  ```javascript
      function func(p1,p2){
          return p1*p2;
      }
      var x = func(4,3);
  ```
- 객체(Object) : object도 바로바로 생성 가능, key-value 형태
```javascript
        var car = { name : "sonata", ph : "500ph"}
```
- 배열(Array)
```javascript
        var car = ["Saab", "Volvo", "BMW"];
        console.log(car[0]);
```
- 반복문
```javascript
        for(var i = 0; i < cars.length; i++){
            text+=cars[i];
        }
        while(i<10){
            text+="test"+i;
            i++;
        }
```
- 조건문(if-else)
- w2schools 참고


### 동기 비동기 함수
- 비동기
먼저 끝난 작업을 먼저 처리, callback함수로 순차처리 될 수 있도록 함.
- 동기
작업이 순차적으로 진행,


### NODEJS  웹 어플리케이션
클라이언트가 사용자가 원하는 정보를 서버에 요청(Request), 서버는 요청에 대한 응답(Responses)
브라우저 <-> ISP <-> DNS <-> target server


## 기본서버 만들기
- HTTP 클래스
	기능은 간단하나 코드가 파편화되어 불편함
- npm
	모듈 공유 관리를 위한 플랫폼, npn init을 통해 모듈 의존성을 포함하고 있는 package.json 생성
- 프레임워크 Express
	가장 인기 있는 웹 어플리케이션 프레임워크, 웹 페이즈를 위한 서버 및 웹 기반 어플리케이션 개발에 쓰임
- Front-End
	Express + Ejs + Jquery로 간단하게 구성
    EJS 템플릿 엔진 - 템플릿을 읽어 엔진의 문법과 설정에 따라  HTML 형식으로 전환
- mySql 연동
	npm에서 제공하는 모듈 사용, connection 객체를 생성하고 쿼리 전송
    