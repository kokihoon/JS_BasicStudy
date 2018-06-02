function sum(arg1, arg2) {
  return arg1 + arg2;
}

console.log(sum.apply(null, [4,2]))
console.log(sum.apply(null, [1,2,3,4,5,6,6,7]))

// apply 사용 이유
o1 = {val1:1, val2:2, val3:3}
o2 = {v1:10, v2:50, v3:100, v4:25}


function sum() {
  var _sum = 0;
  for(name in this) {
    _sum += this[name];
  }
  return _sum;
}

console.log(sum.apply(o1))
console.log(sum.apply(o2))
