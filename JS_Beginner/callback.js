// //값으로서의 함수
// function cal(func, num) {
//   return func(num)
// }
//
// function increase(num) {
//   return num+1
// }
//
// function decrease(num) {
//   return num -1
// }
//
// console.log(cal(increase, 1))
// console.log(cal(decrease, 1))

// // 함수의 용도2
// function cal(mode) {
//   var funcs = {
//     'plus' : function(left, right) {return left + right},
//     'minus' : function(left, right) {return left - right}
//
//   }
//   return funcs[mode]
// }
//
// console.log(cal('plus')(2,1))
// console.log(cal('minus')(4,1))
//
// // 배열 값으로도 사용
// var process = [
//   function(input) {return input + 10;},
//   function(input) {return input * input;},
//   function(input) {return input / 2;}
//
// ];
//
// var input = 1;
//
// for(var i = 0; i < process.length; i++) {
//
//   input = process[i](input);
// }
//
// console.log(input)

// 콜백 : 콜백이 가능한것은 자바스크립트에 함수가 값이기 떄문에 가능한 것이다.
var numbers = [20, 10, 9,8,7,6,5,4,3,2,1];
var sortfunc = function(a, b) {
  // if(a > b) {
  //   return 1;
  // }
  // else if(a < b) {
  //   return -1;
  // }
  // return 0;
  return a -b;
}
console.log(numbers.sort(sortfunc));
