// 산술 연산자
// +, -, *, /, %, ++, --

console.log(1 + 2); // 3
console.log(5 - 7); // -2
console.log(5 * 7); // 35
console.log(10 / 2); // 5
console.log(7 % 5); // 2
console.log(6 % 3); // 0
console.log(8 % 2); // 0

function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(3)); // false
console.log(isEven(4)); // true

// 할당 연산자

let a = 2;
console.log(a); // 2

// 재할당
a = 3;
console.log(a); // 3

// a = a + 3;
a %= 3;
console.log(a); // 6

// 증가 연산자
let b = 1;

// b = b + 1;
console.log(++b);
console.log(++b);

// 감소 연산자
let c = 1;

// c = c - 1;
console.log(--c); // 1
console.log(c); // 1

// 부정 연산자
console.log(!true); // false
console.log(!false); // true
console.log(!0); // true
console.log(!1); // false
console.log(!!0); // false

console.log(![]); // false
console.log(!{}); // false
console.log(!null); // true
console.log(!function () {}); // false

// 비교 연산자
// ==, ===, !=, !==, >, >=, <, <=

console.log(1 == '1'); // true
console.log(1 === '1'); // false
console.log(1 != '1'); // false (부동)
console.log(1 !== '1'); // true(불일치)
console.log(1 > 2); // false
console.log(1 < 2); // true
console.log(1 >= 2); // false
console.log(1 <= 2); // true

// 논리 연산자
// &&, ||

const f = true;
const g = true;

if (f && g) {
  console.log('둘 다 참입니다.');
}

console.log(true && false); // false
console.log(1 && 0); // 0
console.log(1 && 2 && 0); // 0
console.log(1 && 0 && 3); // 0
console.log('a' && 'b' && ''); // ''
console.log('a' && 'b' && 'c'); // 'c'

// 또(||)는 연산자
const h = true;
const i = true;

if (h || i) {
  console.log('둘 중 하나라도 참입니다.');
}

// 연산자를 기준으로 가장 먼저 만나는 ture 데이터를 반환한다.
console.log(true || false); // true
console.log(1 || 0); // 1
console.log(false || {} || 0); // {}
console.log(false || [] || null); // []
console.log(function () {} || '' || undefined);
console.log(false || 0 || '' || NaN); // NaN

// 병합 연산자
// a ?? b

const j = 0;

console.log(j || 5); // 5
console.log(j ?? 5); // 0
console.log(null ?? 1); // 1
console.log(undefined ?? 1); // 1
console.log(undefined || null); // null
console.log(null ?? 1 ?? 2); // 1
console.log(0 ?? 1 ?? 2); // 0

// 삼항 연산자
// 조건 ? 참 : 거짓

console.log(true ? 1 : 2); // 1
console.log(false ? 1 : 2); // 2

// if문
let p = 1;

// if (p < 3) {
//   console.log('p는 3보다 작습니다.');
// } else {
//   console.log('p는 3보다 큽니다.');
// }

console.log(p < 3 ? '참' : '거짓');

// 예시
function isAnimal(text) {
  return text === '고양이' ? '고양이' : '고양이 아님';
}

console.log(isAnimal('고양이')); // 고양이
console.log(isAnimal('개')); // 고양이 아님

// 전개 연산자
// 배열의 전개
const q = [1, 2, 3];
const r = [4, 5, 6];

console.log(q.concat(r)); // [1, 2, 3, 4, 5, 6]
console.log([...q, ...r]); // [1, 2, 3, 4, 5, 6]

// 객체의 전개
const userC = {
  name: '김부모',
  age: 50,
};

const userD = {
  ...userC,
  nick: '김자식',
  // parent: userC,
};

console.log(userD);

// 함수의 전개
function sum(a, b, c) {
  console.log(a + b + c);
}

sum(1, 2, 3); // 6

const num = [1, 2, 3];
sum(num[0], num[1], num[2]); // 6

// 전개연산사
sum(...num); // 6
