// ******* 4. 반복문 *******
// for = for(초기화; 조건; 증감) {실행문;}
// 증가
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// 감소
for (let i = 9; i > -1; i--) {
  if (i < 5) {
    break;
  }
  console.log(i);
}
// continue
for (let i = 9; i > 0; i--) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
// for of = for(변수 of 배열) {실행문;}
// *배열의 길이는 1부터 시작하지만, 배열의 요소(index)는 0부터 시작함
const animalsA = ["dog", "cat", "fish"];
for (let i = 0; i < animalsA.length; i++) {
  console.log(animalsA[i]);
}
for (let animal of animalsA) {
  console.log(animal);
}

const users = [
  { name: "winter", age: 2 },
  { name: "fall", age: 3 },
  { name: "summer", age: 4 },
];
for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}
for (let user of users) {
  console.log(user);
  console.log(user.name);
}

// for in = for(변수 in 객체) {실행문;}
const user = {
  name: "Winter",
  age: 2,
  city: "Seoul",
};
for (let key in user) {
  console.log(key);
  console.log(user[key]);
}

// while문 = while (조건) {실행문;}
// while문은 무한 반복이 될 수 있기 때문에 거짓의 조건을 명확하게 명시해야 한다.
let j = 0;
while (j < 10) {
  console.log(j); // 0 ~ 9까지 출력
  j++;
}

// do while문 = do {실행문;} while (조건);
// do while문은 코드를 먼저 실행하고 조건을 검사한다.
let j2 = 0;
do {
  console.log(j2); // 0부터 9까지 출력
  j2++;
} while (j2 < 10);
