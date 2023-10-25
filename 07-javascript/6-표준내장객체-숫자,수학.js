// *** 숫자 ***

// toFixed(자릿수) : 소수점 자릿수를 지정
const num = 3.1439897376;

console.log(num.toFixed(2)); // 3.14
console.log(typeof num.toFixed(2)); // string
console.log(Number(num.toFixed(2))); // 3.14
// (Number로 감싸면 숫자로 변환됨)

// toLocaleString(언어) : 숫자를 문자열로 변환하면서 천 단위마다 구분자를 넣음
const num2 = 1000000000;

console.log(num2.toLocaleString()); // 1,000,000,000
console.log(`${num2.toLocaleString()}원`); // 1,000,000,000원

// Number.isInteger(숫자) : 숫자가 정수인지 확인
console.log(Number.isInteger(0.5)); // false
console.log(Number.isInteger(1)); // true
console.log(Number.isInteger(-1)); // true

//Number.isNaN() - ES6 class 문법
//전달된 인수가 NaN인지 확인합니다.
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN("Is it number?")); // false

//Number.parseInt() 또는 parseInt()
//문자열 인수를 구문 분석하여 정수를 반환합니다.
console.log(Number.parseInt("3.14", 10)); // 3 (10진수로 해석, 정수 반환)
console.log(parseInt(3.14, 10)); // 3 (10진수로 해석, 정수 반환)
// Number.parseInt()의 축약하여 parseInt()를 사용할 수 있다.

//Number.parseFloat() 또는 parseFloat()
//문자열 인수를 구문 분석하여 부동소수점 수를 반환합니다.
console.log(Number.parseFloat("3.14")); // 3.14
console.log(parseFloat(3.14)); // 3.14

// *** 수학(Math) ***

Math.abs();
//주어진 숫자의 절대값을 반환한다.
console.log(Math.abs(-1)); // 1
console.log(Math.abs("-1")); // 1
console.log(Math.abs("")); // 0
console.log(Math.abs([])); // 0
console.log(Math.abs(null)); // 0

Math.ceil();
//주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 정수로 반환한다.
console.log(Math.ceil(3.14)); // 4
console.log(Math.ceil(3.9)); // 4

Math.floor();
//주어진 숫자보다 작거나 같은 숫자 중 가장 큰 숫자를 정수로 반환한다.
console.log(Math.floor(3.14)); // 3
console.log(Math.floor(3.9)); // 3

Math.max();
//주어진 숫자 중 가장 큰 숫자를 반환한다.
console.log(Math.max(1, 2, 3, 4, 5, -10)); // 5
console.log(Math.max(-1, -2, -3, -4, -5)); // -1

Math.min();
//주어진 숫자 중 가장 작은 숫자를 반환한다.
console.log(Math.min(1, 2, 3, 4, 5, -10)); // -10
console.log(Math.min(-1, -2, -3, -4, -5)); // -5

Math.random();
//0 이상 1 미만의 난수를 반환한다.
console.log(Math.random()); // 2.12345678901234567

// 특정 범위의 랜덤한 정수를 얻는 함수
function getRandomInt(min = 0, max = 10) {
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRandomInt()); // 1 ~ 10 사이의 랜덤한 정수
console.log(getRandomInt(11, 20)); // 11 ~ 20 사이의 랜덤한 정수

Math.round();
//주어진 숫자를 반올림한 정수를 반환한다.
console.log(Math.round(3.14)); // 3
console.log(Math.round(3.9)); // 4
