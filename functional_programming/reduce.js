var slice = Array.prototype.slice;
function _rest(list, num) {
  return slice.call(list, num || 1);
}

function _each(list, iter) {
  for(var i = 0; i < list.length; i++) {
    iter(list[i]);
  }
  return list;
}
var add = function(a, b) {
  return a + b;
};

// 4. _reduce 만들기

function _reduce(list, iter, memo) {
  if(arguments.length == 2) {
    memo = list[0];
    list = _rest(list);

  }
  _each(list, function(val) {
    memo = iter(memo, val);
  });
  return memo;
}

console.log(_reduce([1,2,3], function(a, b) {   // add(add(add(0, 1), 2), 3);
  return a + b;
}, 0));  // 6

// memo = add(0,1);
// memo = add(memo, 2);
// memo = add(memo, 3);
// return memo;

console.log(
  _reduce([1,2,3], add, 10)) // 16

console.log(
  _reduce([1,2,3], add)); // 6

console.log(
  _reduce([1,2,3,4], add)
);
