// ******* 3. 조건문 *******
// 3-1. if 조건문
// // if문
// // if (조건) {
// //   실행문;
// // }
// //if-else문
// // if만
// // if (조건) {
// //   // 조건이 참일 때 실행되는 코드
// // }
// // if + else
// if (조건) {
//   // 조건이 참일 때 실행되는 코드
// } else {
//   // 조건이 거짓일 때 실행되는 코드
// }
// // if + else if(조건2) + 거짓
// if (조건1) {
//   // 조건1이 참일 때 실행되는 코드
// } else if (조건2) {
//   // 조건2가 참일 때 실행되는 코드
// } else {
//   // 조건1과 조건2가 모두 거짓일 때 실행되는 코드
// }
function isPositive(num) {
  if (num > 0) {
    return "양수입니다.";
  } else if (num < 0) {
    return "음수입니다.";
  } else {
    return "0 입니다.";
  }
}
console.log(isPositive(1));
console.log(isPositive(-1));
console.log(isPositive(0));
// 3-2. switch 조건문
function getSound(animal) {
  let p;
  switch (animal) {
    case "개":
      p = "멍멍";
      break;
    case "고양이":
      p = "야옹~";
      break;
    case "참새":
      p = "짹짹";
      break;
    case "비둘기":
      p = "구구 구 구";
      break;
    default:
      p = "...";
  }
  return p;
}
console.log(getSound("개"));
console.log(getSound("비둘기"));
console.log(getSound("인간"));
// return 활용
function getSounds(animal) {
  switch (animal) {
    case "개":
      return "멍멍";
    case "고양이":
      return "야옹~";
    case "참새":
      return "짹짹";
    case "비둘기":
      return "구구 구 구";
    default:
      return "...";
  }
}
console.log(getSounds("개"));
console.log(getSounds("비둘기"));
console.log(getSounds("인간"));
// if문으로 바꾸기
function getSoundss(animal) {
  if (animal === "개") return "멍멍";
  if (animal === "고양이") return "야옹";
  if (animal === "참새") return "짹짹";
  if (animal === "비둘기") return "구구 구 구";
  return "...?";
}
console.log(getSoundss("개"));
console.log(getSoundss("비둘기"));
console.log(getSoundss("인간"));
