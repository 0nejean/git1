// 표준 내장 객체 - 문자열(string)
string(문자열);
const str = "hello world";
length;
// 문자의 길이를 반환한다.
console.log(str.length); // 11

includes();
// 문자열에 특정 문자열이 포함되어 있는지 확인한다.
console.log(str.includes("hello")); // true
console.log(str.includes("Hello")); // false (대소문자 구분)
console.log(str.includes("hello", 1)); // false (1번째 인덱스부터 시작)

indexOf();
// 문자열에 특정 문자열이 포함되어 있는지 확인한다.
// 포함되어 있으면 해당 문자열의 인덱스를 반환한다.
// 없으면 -1을 반환한다.
console.log(str.indexOf("world")); // 6
console.log(str.indexOf("fall")); // -1

if (str.indexOf("hello") !== -1) {
  console.log("hello가 포함되어 있습니다.");
}

if (!str.includes("hello")) {
  // 부정연산자
  console.log("hello가 포함되어 있지 않습니다.");
}

padStart();
// 문자열의 길이가 지정한 길이보다 작으면 지정한 길이가 될 때까지 문자열을 채운다.
// 문자열의 길이가 지정한 길이보다 크거나 같으면 문자열을 그대로 반환한다.
const str2 = "12345";

console.log(str2.padStart(10, "!")); // !!!!!12345
console.log(str2.padStart(3, "!")); // hello world

padEnd();
// 문자열의 길이가 지정한 길이보다 작으면 지정한 길이가 될 때까지 문자열을 채운다.
// 문자열의 길이가 지정한 길이보다 크거나 같으면 문자열을 그대로 반환한다.
console.log(str2.padEnd(10, "!")); // 12345!!!!!
console.log(str2.padEnd(3, "!")); // hello world

replace();
// 문자열에서 특정 문자열(문자, 정규식)을 찾아서 다른 문자열로 치환한다.
// 치환된 새로운 문자열을 반환한다.
const str3 = "hello winter winter";

console.log(str3.replace("winter", "fall")); // hello fall winter
console.log(str3.replace(/winter/g, "fall")); // hello fall fall (정규식) : g는 전역을 의미해 모든 winter를 fall로 치환한다.
console.log(str3); // hello winter winter (원본은 변경되지 않는다.)

slice();
// 문자열의 일부를 추출하여 새로운 문자열을 반환한다.
// 두 번째 인수 직전까지 추출하고, 두 번째 인수를 생략하면 대상 문자의 끝까지 추출한다.
const str4 = "hello world";
// 01234 5 6789

console.log(str4.slice(0, 5)); // hello (0번째 인덱스부터 5번째 인덱스 직전까지 추출)
console.log(str4.slice(6, -1)); // worl (6번째 인덱스부터 끝에서 1번째 인덱스 직전까지 추출)
console.log(str4.slice(6)); // world (6번째 인덱스부터 끝까지 추출)
console.log(str4); // hello world (원본은 변경되지 않는다.)

split();
// 문자열을 지정한 구분자를 기준으로 나누어 배열로 반환한다.
console.log(str4.split(" ")); // ['hello', 'world'] (공백을 구분자로 사용하여 문자열을 나누어 배열로 반환한다.)
console.log(str4.split("")); // ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
// (구분자를 지정하지 않으면 문자열 전체를 하나의 요소로 하는 배열을 반환한다.)

const str5 = "Spring, Summer, Fall, Winter";

console.log(str5.split(", ")); // ['Spring', 'Summer', 'Fall', 'Winter']
toLowerCase();
// 문자열을 소문자로 변환하여 반환한다.
console.log(str5.toLowerCase()); // spring, summer, fall, winter
toUpperCase();
// 문자열을 대문자로 변환하여 반환한다.
console.log(str5.toUpperCase()); // SPRING, SUMMER, FALL, WINTER
trim();
// 문자열 앞뒤의 공백을 제거한다.
const str6 = " hello world ";

console.log(str6.trim()); // hello world
console.log(str6); // hello world (원본은 변경되지 않는다.)
