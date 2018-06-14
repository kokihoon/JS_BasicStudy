var a = 1;
var b = a;
b = 2;

console.log(a);

var a = {'id':1};
var b = a;
b.id = 2;
console.log(a.id) // 2

var a = {'id':1};
var b = a;
b = {'id': 2}; // 객체 생성

console.log(a.id) // 1

var a = 1;
function func(b) {
  b = 2;
}

func(a);
console.log(a); // 1

var a = {'id' : 1};
function func(b) {
  b = {'id':2};
}

func(a);

console.log(a.id); // 1

var a = {'id': 1};
function func(b) {
  b.id = 2;
}
func(a);

console.log(a.id); // 2

// primitives = 문자열, 숫자, 블리언 객체처럼 사용할수 있는것은 wrap로 감싸져 있기 떄문이다.
