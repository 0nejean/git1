// ******* 1. 함수 선언하기 *******
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
