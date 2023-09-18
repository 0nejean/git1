// 1. 구조 분해 할당
// 배열의 구조 분해
var a, b, rest;
[a, b] = [10, 20];
console.log(a);
console.log(b);

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a);
console.log(b);
console.log(rest);

({ a, b } = { a: 10, b: 20 });
console.log(a);
console.log(b);

({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
console.log(a);
console.log(b);
console.log(rest);

var x = [1, 2, 3, 4, 5];
var [y, z, h] = x;
console.log(y);
console.log(z);
console.log(h);

var foo = ["one", "two", "three"];
var [red, yellow, green] = foo;
console.log(red);
console.log(yellow);
console.log(green);

var a, b;
[a, b] = [1, 2];
console.log(a);
console.log(b);

var a, b;
[a = 5, b = 7] = [1];
console.log(a);
console.log(b); // b = 7 이라고 선언하고 성립되는 값이 undefined이므로 그냥 7 출력

var a = 1;
var b = 3;
[a, b] = [b, a];
console.log(a);
console.log(b);

function f() {
  return [1, 2];
}
var a, b;
[a, b] = f();
console.log(a);
console.log(b);

function f() {
  return [1, 2, 3];
}
var [a, , c] = f();
console.log(a);
console.log(c);
[, ,] = f();
console.log(a);
console.log(b);
console.log(c);

var [a, ...b] = [1, 2, 3];
console.log(a);
console.log(b);

function parseProtocol(url) {
  var parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
  if (!parsedURL) {
    return false;
  }
  console.log(parsedURL); // ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]

  var [, protocol, fullhost, fullpath] = parsedURL;
  return protocol;
}

console.log(
  parseProtocol("https://developer.mozilla.org/en-US/Web/JavaScript")
); // "https"

//객체 구조 분해
var o = { p: 42, q: true };
var { p, q } = o;
console.log(p);
console.log(q);

var a, b;
({ a, b } = { a: 1, b: 2 });
console.log(a);
console.log(b);

var o = { p: 42, q: true };
var { p: foo, q: bar } = o;
console.log(foo);
console.log(bar);

var { a = 10, b = 5 } = { a: 3 };
console.log(a);
console.log(b);

var { a: aa = 10, b: bb = 5 } = { a: 3 };
console.log(aa);
console.log(bb);

let key = "z";
let { [key]: poo } = { z: "bar" };
console.log(poo);
