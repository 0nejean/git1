// ******* 1. 함수 선언하기 *******
// import function from './module';
// 함수 선언문과 표현식의 차이점
// = 함수 선언문은 호이스팅이 일어나지만,
//   함수 표현식은 호이스팅이 일어나지 않는다.
// 함수 선언문 (Declaration)
function hello() {
  console.log("hello");
}
// 함수 표현식 (Expression)
const world = function () {
  console.log("world");
};
hello(); // hello
world(); // world

// ******* 2. 호이스팅이란? *******
// 함수 선언문이 코드의 최상단으로 끌어올려지는 것을 말한다.
// 함수 선언문은 선언하기 전에 호출해도 정상적으로 실행된다.
hello1();
function hello1() {
  console.log("hello1"); // hello1
}
// 하지만, 함수 표현식은 호이스팅이 일어나지 않기 때문에,
// 함수 표현식을 선언하기 전에 호출하면 에러가 발생한다.
// hello2();
// const hello2 = function () {
//   console.log("hello2"); // TypeError: hello2 is not a function
// };
// 함수의 구현 부분은 보통 복잡하기 때문에
// 위쪽에 위치할 경우 코드의 가독성이 떨어진다.
// 따라서 *** 함수의 구현 부분은 아래쪽에 위치 *** 하는 것이 좋다.

// ******* 3. 반환(Return) 및 종료(Exit) *******
// 함수는 return 키워드를 사용하여 호출한 곳으로 값을 반환할 수 있다.
// return 키워드를 사용하면 함수가 종료된다.
function hello1() {
  return "Hello"; // Hello
  console.log("World~"); // 실행되지 않는다. 이미 return에서 값을 출력했으므로.
}
console.log(hello1());
function hello2() {
  return; // undefined
}
console.log(hello2());
function hello3() {
  return 1;
  return 2; // 실행되지 않는다. 역시나 return 1이 실행했으므로.
}

console.log(hello3());
function hello4() {
  console.log("1");
  return; // undefined
  console.log("2"); // 실행되지 않는다. return으로 마무리 했으니깐. 이미 1 출력해놓음.
}
console.log(hello4());

// 예시
function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

const grade = getGrade(100);
console.log(grade); // A+
const grade2 = getGrade(77);
console.log(grade2);

// ******* 4. 매개변수 패턴 *******
// 매개변수 (Parameter)는 함수를 호출할 때 값을 지정하여 호출한 곳에서 함수로 값을 전달할 수 있다.
// 매개변수는 함수 내부에서 변수와 동일하게 취급된다.
// 매개변수는 함수를 호출할 때 값을 지정하지 않으면 undefined가 할당된다.

// 기본값
// 함수는 매개변수의 기본값을 설정할 수 있다.
function sum(x, y = 1) {
  return x + y;
}

console.log(sum(1, 5));
console.log(sum(1)); // 1 + undefined = Not a Number / y에 1 할당해서 2 출력

// 객체 구조 분해 할당
// 일반적
const user = {
  name: "winter",
  age: "2",
  email: "123@4567.com",
  emailX: "",
};

function getName(user) {
  return user.name;
}
console.log(getName(user));

function getName({ name }) {
  // 매개변수에 구조 분해 할당을 사용 - const A로 잡은 매개변수에서 name 값만 빼서 사용한다.
  return name;
}
console.log(getName(user));

function getEmail({ email }) {
  return email;
}
console.log(getEmail(user));

function getEmailX({ emailX = "이메일이 없습니다." }) {
  return emailX;
}
console.log(getEmailX(user));

// 배열 구조 분해 할당
// 일반적

const animals = ["dog", "cat", "fish"];
const numbers = [1, 2, 3];

function getSecond([, b, c]) {
  return [b, c];
}

console.log(getSecond(animals));
console.log(getSecond(numbers));

// ******* 5. 화살표 함수 (Arrow Function) *******
// 화살표 함수는 function 키워드 대신 =>를 사용하여 좀 더 간략한 방법으로 함수를 선언할 수 있다.
// 화살표 함수는 익명이기 때문에 함수 표현식으로만 사용할 수 있다.

// 화살표 함수의 기본 문법
// function 함수이름(매개변수) {실행문} --> (매개변수) => {실행문}
// () => { ... }  매개변수가 없을 경우
// x => { ... } 매개변수가 한 개인 경우, 소괄호를 생략할 수 있다.
// (x, y) => { ... } 매개변수가 여러 개인 경우, 소괄호를 생략할 수 없다.

function hello() {
  console.log("hello");
}
const hello11 = function () {
  console.log("hello11");
};

hello();
hello11();

const hello12 = () => {
  console.log("hello12");
};
hello12();

// 화살표 함수 예시
const a = () => {};
const b = (x) => {};
const c = (x, y) => {};
const d = (x) => {
  return x + x;
};
const e = (x) => x + x;
const f = (x) => {
  console.log(x);
  return x * x;
};
// 객체데이터 반환하는 경우
const g = () => {
  return { a: 1 };
};
const h = () => ({ a: 1 });
// 배열데이터 반환하는 경우
const i = () => {
  return [1, 2];
};
const j = () => [1, 2];

// 객체 구조 분해 할당
const user1 = {
  name: "가을",
  age: 2,
};

function print({ name, age }) {
  // const { name, age } = u;
  return `${name}은 ${age}살 입니다.`;
}

console.log(print(user1));

// 배열의 구조 분해 할당
const animals1 = ["dog", "cat", "fish"];

function getSecond(array) {
  return array[1]; // 배열의 두 번째 요소를 반환한다.
}

console.log(getSecond(animals1)); // cat
// getSecond 함수는 animals 배열을 매개변수로 전달받아 animals[1]을 반환한다.

const animals2 = ["dog", "cat", "fish"];

function getSecond([, b]) {
  // 매개변수에 구조 분해 할당을 사용한다.
  return b; // 추출한 두 번째 요소를 반환한다.
}

console.log(getSecond(animals2)); // cat
// getSecond 함수는 animals 배열을 매개변수로 전달받아 animals[1]을 반환한다.

const animals3 = ["dog", "cat", "fish"];
const numbers1 = [1, 2, 3];

function getSecond([, b = "두 번째 요소가 없습니다."]) {
  // 매개변수에 구조 분해 할당을 사용한다.
  return b; // 추출한 두 번째 요소를 반환한다.
}

console.log(getSecond(animals3));
// 두 번째 요소가 없습니다. - animals 배열에 두 번째 요소가 없기 때문에 undefined가 반환된다.
console.log(getSecond(numbers1)); // 2
// getSecond 함수는 numbers 배열을 매개변수로 전달받아 numbers[1]을 반환한다.

// 나머지 매개변수
function sum(...rest) {
  console.log(rest);
  // return이 없으면 undefined가 반환된다.
}

console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3, 4)); // 10
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8)); // 36

// a, b를 매개변수에 추가하여 상태 확인

function sum(...rest) {
  // 매개변수 rest는 인수들의 목록을 배열로 전달받는다.
  console.log(rest);
  // return이 없으면 undefined가 반환된다.

  return rest.reduce(function (acc, current) {
    // 추후 reduce 메소드에 대해 다룰 예정이다.
    // reduce 메소드는 배열의 첫 번째 요소부터 순차적으로 접근하며, reduce 함수의 반환값은 누적된 결과값이다.
    // reduce 메소드는 배열의 모든 요소를 순회하며 인수로 전달받은 콜백 함수를 반복 호출한다.
    // acc는 누적된 결과값이고, current는 현재 요소이다.
    return acc + current; // 배열의 모든 요소를 더하여 반환한다.
  }, 0); // reduce 메소드의 두 번째 인수는 초기값이다. 초기값을 생략하면 배열의 첫 번째 요소가 초기값이 된다.
}

console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3, 4)); // 10
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8)); // 36

// 화살표 함수
// 기본문법
const name = () => {};
() => {}; // 매개변수가 없을 경우
(x) => {}; // 매개변수가 하나일 때 소괄호 생략가능
(x, y) => {}; // 매개변수가 여러 개인 경우, 소괄호를 생략할 수 없다.
(x) => {
  return x + x;
};
(x) => x + x; // 중괄호 생략시 return 문 생략 가능
(x) => {
  console.log(x);
  return x * x;
};
// const sum = (a, b) => { // 매개변수가 여러 개인 경우, 소괄호를 생략할 수 없다.
//    return a + b;
//}
const sum1 = (a, b) => a + b; // 중괄호를 생략하면 return 문도 생략할 수 있다.
console.log(sum1(1, 2)); // 3

// 화살표 함수의 다양한 예시
// 매개변수가 없는 경우
const a1 = () => {};
// 매개변수가 한 개인 경우
const b1 = (x) => {};
// 매개변수가 여러 개인 경우
const c1 = (x, y) => {};
// 함수의 리턴이 있는 경우
const d1 = (x) => {
  return x * x;
};
// 함수의 리턴이 있는 경우, 중괄호 생략
const e1 = (x) => x * x;
// return 키워드로 시작하지 않는 경우, 중괄호 생략하면 안된다.
const f1 = (x) => {
  console.log(x * x);
  return x * x;
};

// 객체데이터 반환하는 경우
const g1 = () => {
  return { a: 1 };
};
// const h = () => { a: 1 };
// 객체데이터의 중괄호를 화살표 함수의 중괄호와 구분하기 위해 소괄호를 사용한다.
const h1 = () => ({ a: 1 });

// 배열데이터 반환하는 경우
const i1 = () => {
  return [1, 2, 3];
};
const j1 = () => [1, 2, 3];
