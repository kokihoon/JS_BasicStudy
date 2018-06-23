// 3. 커링 함수의 인자를 하나씩 적용해 나가다가 필요한 인자가 모두 채워지면 함수 본채를 실행하는 기법

function _curry(fn) {
  return function(a, b){

    return arguments.length == 2 ? fn(a,b) : function(b) {return fn(a, b);};

    // if(arguments.length == 2) return fn(a, b);
    // return function(b){
    //   return fn(a, b);
    // }
  }
}


function _curryr(fn) {
  return function(a, b) {

    return arguments.length == 2 ? fn(a,b) : function(b) {return fn(b, a);};
  }
}

var add = function(a, b) {
  return a + b;
};

console.log(add(10, 5));

var add1 = _curry(function(a, b){
  return a+ b;
});

var add10 = add1(10);
console.log(add10(5));
console.log(add1(5)(3));

var sub = _curryr(function(a, b){
  return a -b;
});
console.log(sub(10, 5 ));
var sub10 = sub(10);
console.log(sub10(5));


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

   // 2. _get 만들어 좀 더 간단하게 하기
  // function _get(obj, key) {
  //   return obj == null ? undefined : obj[key];
  // }
  var _get = _curryr(function(obj, key) {
    return obj == null ? undefined : obj[key];
  });

var users = [
  {id:1, name:'ID', age:36},
  {id:2, name:'BJ', age:32},
  {id:3, name:'JM', age:32},
  {id:4, name:'PJ', age:27},
  {id:5, name:'HA', age:25},
  {id:6, name:'JE', age:26},
  {id:7, name:'JI', age:31},
  {id:8, name:'MP', age:23}
];

console.log(
  _map(
    _filter(users, function(user){return user.age >= 30;}),
    _get('name')
    // function(user) {return user.name;}
  )
);

console.log(
  _map( _filter(users, function(user){return user.age < 30;}), _get('age')
    // function(user) {return user.name;}
  )
);

// var user1 = users[0];
// console.log(user1.name);
// console.log(_get(user1, 'name'));
//
// var get_name = _get('name');
// console.log(get_name(user1));
// console.log(get_name(users[3]));
// console.log(get_name(users[4]));


// console.log(users[10].name);
console.log(_get(users[10], 'name'));
