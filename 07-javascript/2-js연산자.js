// <<< JS 연산자 >>>

// 1. 산술 연산자 +, -, *, /, %, ++, --
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

// 2. 할당 연산자
let a = 2;
console.log(a);
a = 3;
console.log(a);
// a = a + 3;
a += 3;
console.log(a);
a %= 3;
console.log(a);

// 3. 증(가)감(소) 연산자
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

// 4. 부정 연산자
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
