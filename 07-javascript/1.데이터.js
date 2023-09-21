// <<< JS 데이터 >>>
// * const 변수 설정 / console 원하는 변수 출력

// 1. string 문자열
const string1 = "Hello";
const string2 = "Hello";
const string3 = `바보 ${string1} ${1 + 1}`;
console.log(string1, string2, string3);

// 2. number 숫자
const number = 123;
const negative = -123;
const float = 0.123;
console.log(number + 1);
console.log(negative + number);
console.log(float + number);
// * 숫자로 변환
const number2 = -123.1234;
console.log(number2 + undefined);
console.log(typeof (number2 + undefined));
const a = 0.1;
const b = 0.2;
console.log(a + b);
// 소수점 지정한 자리까지 출력 = toFixed
console.log((a + b).toFixed(1));
// 문자 or 숫자 인지 확인 = type of
console.log(typeof (a + b).toFixed(1));
// 다시 숫자로 변환하려면 = Number
console.log(Number((a + b).toFixed(1)));

// 3. boolean 참/거짓
const truthy = true;
const falsy = false;
if (truthy) {
  console.log("truthy");
}
if (falsy) {
  console.log("truthy");
}

// 4-1. null - 명시적으로 값을 할당하지 않음
let age = null;
console.log(age);
// 재할당의 경우 let 사용하지 않음 - let은 재할당(변수 값을 이후에 다시 변경 할 수 있음. 허나 let을 안쓰고 값만 넣는다는 말)
age = 20;
console.log(age);
// 4-2. undefined - 암시적으로 값을 할당하지 않음
let name;
console.log(name);
name = "abc";
console.log(name);
// ex null(email)과 undefined(weight)의 차이점
const user1 = {
  name: "abc",
  age: 20,
  height: 180,
  email: null,
};
console.log(user1);
console.log(user1.name, user1.age, user1.height);
console.log(user1.email); // null
console.log(user1.weight); // undefined

// 5. array 순서가 있는 데이터의 집합
const animals = ["dog", "cat", "fish"];
//  대괄호 표기법은 변수를 키로 사용할 때 사용 가능
console.log(animals[0], animals[2]);
console.log(animals);
console.log(animals.length);
console.log(animals[animals.length - 1]);

// 6. object 순서는 없지만 이름이 있는
const user2 = {
  name: "abc",
  age: "20",
};
//  점 표기법은 객체의 키가 유효한 이름인 경우에만 사용 가능
console.log(user2);
console.log(user2.name);
console.log(user2.age);
console.log(user2["name"]);
console.log(user2["age"]);
// 점/대괄호 표기법 ex
const userA = {
  name: "kim",
  age: "50",
};
const userB = {
  name: "Lee",
  age: "20",
  parent: userA,
};
console.log(userB);
console.log(userB.parent);
console.log(userB.parent.name);
console.log(userB["parent"]);
console.log(userB["parent"]["name"]);
console.log(userB.parent["name"]);
// 배열에 객체를 넣을수 있음
const users = [userA, userB];
console.log(users[0]);
console.log(users[0].name);
console.log(users[0]["name"]);

// 7. 함수 FUNCTION 선언식/표현식
// 함수 선언식 (기명 함수)
function printHello() {
  console.log("Hello");
}
printHello();
console.log(printHello());
// 함수 표현식 (익명함수)
const getNumber = function () {
  return 123;
};
console.log(getNumber());
console.log(typeof getNumber());

// 8. Type Conversion 형 변환
const aa = 1;
const bb = "1";
// == 동등연산자는 형 변환이 일어나서 숫자 1과 문자(string)1이 같다고 판단함
console.log(aa == bb);
// === 일치연산자는 형 변환이 일어나지 않으므로 숫자 1과 문자(string)1을 다르게 인식함
console.log(aa === bb);
// 동등연산자(==)는 피연산자들의 값만 비교. 일치연산자(===)는 피연산자들의 값과 타입을 모두 비교.
const cc = false;
const dd = 0;
console.log(cc == dd);
console.log(cc === dd);
const ee = true;
const ff = 1;
console.log(ee == ff);
console.log(ee === ff);

// 9. Truthy & Falsy (참과 거짓)
// Falsy와 같은 것 = false / 0 / "" / null / undefined / NaN
// truthy = Falsy와 같은 것을 제외한 나머지
if (true) {
  console.log(true);
}

// 10. 데이터 타입 확인 (typeof)
console.log("123");
console.log(typeof "123");
console.log(123);
console.log(typeof 123);
console.log(true);
console.log(typeof true);
console.log(undefined);
console.log(typeof undefined);
console.log(null);
console.log(typeof null);
console.log({});
console.log(typeof {});
console.log([]);
console.log(typeof []);
console.log(function () {});
console.log(typeof function () {});
