
//전역변수 지역변수 범위
// var vscope = 'global';
// function fscope() {
//   var vscope = 'local';
//   console.log(vscope)
//   vscope = 'local';
// }
//
// fscope();
// alert(vscope);


// 잘못된 전역변수의 사용의 예
// function a () {
//   i = 0;
// }
// for(var i = 0; i < 5; i++) {
//   a();
//   console.log(i);
// }

// 전역변수를 사용하는 법
// (fucntion(){
//   var MYAPP = {}
//   MYAPP.calculator = {
//     'left' : null,
//     'right' : null
//   }
//
//
//   MYAPP.coordinate = {
//     'left' : null,
//     'right' : null
//   }
//
//   MYAPP.calculator.left = 10;
//   MYAPP.calculator.right = 20;
//
//   function sum() {
//     return MYAPP.calculator.left + MYAPP.calculator.right;
//   }
//
//   console.log(sum());
// }()) //익명함수

//정적 유효 범위
// lexical scoping : 함수가 선언된 시점이 유효 범위가 된다.
var i = 5;
function a() {
   var i = 10;
   i = 6;
   console.log(i)
  b();
}

function b() {
  console.log(i);
}
var i = 10;
a();
console.log(i)
