const str = 'Hello World';

// length
console.log(str.length); // 11

// includes
console.log(str.includes('Hello')); // true
console.log(str.includes('hello')); // false
console.log(str.includes('ello', 1)); // true

// indexOf
console.log(str.indexOf('World')); // 6
console.log(str.indexOf('world')); // -1

if (str.indexOf('Hello') !== -1) {
    console.log('Hello가 포함된 문장입니다.');
}

if (!str.includes('Hello')) {
    console.log('Hello가 포함되지 않은 문장입니다.');
}

// padStart
const str2 = '12345';

console.log(str2.padStart(10, '0')); // 0000012345
console.log(str2.padEnd(3, '0')); // 12345

// replace

const str3 = 'hello winter winter';

console.log(str3.replace('winter', 'summer')); // hello summer winter
console.log(str3.replace(/winter/g, 'summer')); // hello summer summer
console.log(str3); // hello winter winter

// slice
const str4 = 'hello world';
//.               01234 5 678910;

console.log(str4.slice(0, 3)); // hel
console.log(str4.slice(6, -1)); // worl
console.log(str4.slice(6)); // world
console.log(str4); // hello world (원본은 변하지 않음)

// split
console.log(str4.split(' ')); // [ 'hello', 'world' ]
console.log(str4.split('')); // [ 'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd' ]

// toLowerCase, toUpperCase
const str5 = 'Hello World';

console.log(str5.toLowerCase()); // hello world
console.log(str5.toUpperCase()); // HELLO WORLD

// trim
const str6 = '   hello world   ';

console.log(str6.trim()); // hello world
console.log(str6); //    hello world
