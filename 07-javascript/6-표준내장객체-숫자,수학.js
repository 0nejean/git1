// 숫자

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
