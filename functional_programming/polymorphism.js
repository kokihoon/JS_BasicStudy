console.log(
  [1,2,3].map(function(val){
    return val*2;
  })
);

console.log(
  [1,2,3,4].filter(function(val){
    return val % 2;
  })
);


function _filter(users, predi) {
  var new_list = [];
  for(var i = 0; i < users.length; i++) {
    if(predi(users[i])) {
      new_list.push(users[i]);
    }
  }
  return new_list;
}


function _map(list, mapper) {
  var new_list = [];
  for(var i = 0; i < list.length; i++) {
    new_list.push(mapper(list[i]));
  }
  return new_list;
}

// 에러뜸
// console.log(
//   document.querySelectorAll('*').map(function(node){
//     return node.nodeName;
//   })
// );

// console.log(
//   _map(document.querySelectorAll('*'), function(node) {
//     return node.nodeName;
//   })
// );



  // 3. 내부 다형성
    // 1. predi, iter, mapper

_map([1,2,3,4], function(v) {
  return v+ 10;
});
