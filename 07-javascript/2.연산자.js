// <<< JS 연산자 >>>

// *** 1. 산술 연산자 +, -, *, /, %, ++, --
// 숫자 값은 피연산자, 사용하시는 수식은 연산자
// 나눗셈 = /
console.log(10 / 2);
// 나눗셈의 나머지 값 = % 짝수, 홀수, 배수를 활용한 식에 이용함.
console.log(7 % 5);
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(3));
console.log(isEven(2));
console.log(isEven(4));

// *** 2. 할당 연산자
let a = 2;
console.log(a);
a = 3;
console.log(a);
// a = a + 3;
a += 3;
// a + 3 = 을 축약해서 작성하면, a += 3 으로 표현
console.log(a);
a %= 3;
console.log(a);

// *** 3. 증(가)감(소) 연산자
// 증가 연산자 ++
let b = 1;
console.log(b);
// b=1
console.log(b++);
// b=1 선출력 후연산
console.log(b++);
// b=2 여기서 - 두번째 ++ 부터 더해짐. 1 + b
console.log(++b);
// 선연산 후출력 앞에 ++ 은 바로 더해버림 (1+b)+(1+b) 앞에 ++는 헷갈려서 잘 안 씀. 뒤에 ++ 많이 씀
// 감소 연산자 --
// 개념은 증가 연산자와 동일
let c = 7;
console.log(c);
// c=7
console.log(c--);
// c=7 한 번 불러옮 = 선출력
console.log(c--);
// c=7-1 값
console.log(--c);
// 먼저 계산부터 함 = 선연산 [{(7-1)-1}-1] 앞에 감소를 했다는 전제로 한 번 제외하고 또 감소하는건가?
console.log(--c);
// 여기서는 또 그냥 -1만 함.. 아마 첫 --는 감소를 했다는 전제로 이해하는 것 같음

// *** 4. 부정 연산자
// ! 를 사용하면 뒤에 입력값의 부정값 - 반대값이 출력됨.
console.log(!true);
console.log(!false);
console.log(!0);
console.log(!1);
console.log(!"");
console.log(!"1");
console.log(!null);
console.log(!undefined);
console.log(!NaN);
console.log(!!0);
console.log(![]);
console.log(!{});
console.log(!function () {});

// *** 5.비교 연산자
// ==(동등), ===(일치-값/타입 모두 비교), !=, !==, >, >=, <, <=
console.log(1 == "1");
// 숫자 == 문자이지만, 값이 같으므로 true
console.log(1 === "1");
// 값은 같으나, "1"는 string 문자로 인식되므로 같지 않다고 판단 false
console.log(1 != "1");
// ! 빼면 true, true의 부정(!)이므로 false - 부동
console.log(1 !== "1");
// ! 빼면 false, false의 부정(!)이므로 true - 불일치(불일치하니깐 불일치하다고 true)

// *** 6. 논리 연산자
// &&, ||
//AND(그리고) && 연산자
// && '둘 다 true 일 경우만' 출력이 가능함
// 연산자를 기준으로 '가장 먼저 만나는 거짓데이터'를 반환함. - 왼쪽에 오른쪽으로 읽어가다가 가장 먼저 만나는 false값 반환하고 그 후로 실행 취소됨.
const f = true;
const g = true;
if (f && g) {
  console.log("둘 다 참입니다.");
}
console.log(true && false);
console.log(1 && 0);
console.log(1 && 2 && 0);
console.log(1 && 2 && 3);
console.log(1 && 0 && 3);
console.log("a" && "b" && "");
console.log("a" && "b" && "c");
console.log("a" && "" && "c");
//OR(또는) || 연산자
// /데이터가 '둘중 하나만 참이면' true 반환
// 연산자를 기준으로 '가장 먼저 만나는 참 데이터' 반환
const h = false;
const i = true;
if (h || i) {
  console.log("둘 중 하나라도 참입니다.");
}
console.log(true || false);
console.log(1 || 0);
console.log(false || {});
// {} 빈 객체데이터는 참.
console.log(false || [] || null);
// [] 빈 배열은 참.
console.log(function () {} || "" || undefined);
// 빈 함수데이터는 참.
console.log(false || 0 || "");
// 모두가 거짓이라면, 마지막 데이터 반환

// 7. 병합 연산자
//  ?? 연산자를 사용한 경우 null 또는 undefined는 무시하고 그 외의 값만 사용된다.
// 왜 사용하냐면, or 연산자를 사용한 경우 가장 먼저 만나는 참 데이터를 반환하는데 참 데이터말고 숫자 데이터 0을 반환하고 싶을때와 같은 경우에 사용함.
const m = 0;
const num1 = m || 5;
console.log(num1);
// 여기서 5가 출력되지만, 0을 써야하는 경우에
const m2 = 0;
const num11 = m ?? 5;
console.log(num11);
// 그럼 null / undefined는? 건너뛰고 다음 꺼 출력함.
console.log(null ?? 1); // 1
console.log(undefined ?? 1); // 1
console.log(null ?? undefined); // undefined
console.log(null ?? 1 ?? 2); // 1
console.log(0 ?? 1 ?? 2); // 0

// 8. 삼항연산자
// 조건 ? 참:거짓
console.log(true ? 1 : 2);
console.log(true ? 2 : 1);
console.log([] ? 2 : 1);
// console.log(true의 값인 조건 ?(삼항연산자) 1(참일때 나올 값) : 2(거짓일때 나올 값))
console.log(false ? 1 : 2);
// console.log(false-거짓 ?(삼항연산자) 1(참일때 나올 값) : 2(거짓일때 나올 값))
// if문
let p = 1;
if (p < 3) {
  console.log("p는 3보다 작습니다.");
} else {
  console.log("p는 3보다 큽니다.");
}
console.log(p < 3 ? "참" : "거짓");
function isAnimal(text) {
  return text === "고양이" ? "고양이" : "고양이 아님";
}
console.log(isAnimal("고양이"));
console.log(isAnimal("강아지"));
let qq = 100;
console.log(qq >= 80 ? "PASS" : "TRY AGAIN");

// 9. 전개 연산자
// ... 을 사용하거나, concat(CONCATENATE - 이어진)를 사용하거나
// 9-1 배열의 전개
const q = [1, 2, 3];
const r = [4, 5, 6];
const s = q.concat(r);
console.log(s);
console.log(q.concat(r));
const t = [...q, ...r];
console.log(t);
// 9-2 객체의 전개
const dog = {
  name: "멍멍이",
};
const dogInfo = {
  ...dog,
  // ...을 사용하면 앞에 사용한 객체 - const dog를 불러옮
  age: 2,
};
console.log(dogInfo);

const userC = {
  name: "김부모",
  age: 50,
};
const userD = {
  ...userC,
  nick: "김자식",
};
console.log(userD);
// 9-3 함수의 인자에서의 전개
function sum(a, b, c) {
  console.log(a + b + c);
}
sum(1, 2, 3);
const num = [1, 2, 3];
sum(num[0], num[1], num[2]);
sum(...num);
