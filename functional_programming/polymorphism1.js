// var users = [
//     {id:1, name:'ID', age:36},
//     {id:2, name:'BJ', age:32},
//     {id:3, name:'JM', age:32},
//     {id:4, name:'PJ', age:27},
//     {id:5, name:'HA', age:25},
//     {id:6, name:'JE', age:26},
//     {id:7, name:'JI', age:31},
//     {id:8, name:'MP', age:23}
// ];

// function _filter(users, predi) {
//     var new_list = [];
//     for(var i = 0; i < users.length; i++) {
//       if(predi(users[i])) {
//          new_list.push(users[i]);
//        }
//     }
//     return new_list;
// }

function _curryr(fn) {
    return function(a, b) {
  
      return arguments.length == 2 ? fn(a,b) : function(b) {return fn(b, a);};
    }
}
  

function _map(list, mapper) {
    var new_list = [];
    for(var i = 0; i < list.length; i++) {
       new_list.push(mapper(list[i]));
    }
    return new_list;
}
var _get = _curryr(function(obj, key) {
    return obj == null ? undefined : obj[key];
});
var _length = _get('length')

function _each(list, iter) {
    var keys = _keys(list);
    for(var i = 0, len = keys.length; i < len; i++) {
      iter(keys[i]);
    }
    return list;
}






// 6. _each의 외부 다형성 높이기
    // 1. _each에 null 넣어도 에러 안나게
// _each(null, console.log);
// console.log(_filter(null, function(v) {return v;}));

// _go([1, 2, 3, 4],
//     _filter(function(V) {return v % 2;}),
//     _map(function(v) {return v*v;}),
//     console.log
// );

// _go(null,
//     _filter(function(V) {return v % 2;}),
//     _map(function(v) {return v*v;}),
//     console.log
// );

    // 2. _keys 만들기
    // 3. _keys에서도 _is_object인지 검사하여 null 에러 안나게
console.log(Object.keys({name:'ID', age: 33}));
console.log(Object.keys([1,2,3,4]));
console.log(Object.keys(10));
// console.log(Object.keys(null));

function _is_object(obj){
    return typeof obj == 'object' && !!obj;
}

function _keys(obj) {
    return _is_object(obj) ? Object.keys(obj) : [];
}

    // 4. _each 외부 다형성 높이기

_each({
  13: 'ID',
  19:'HD',
  29:'YD'  
}, function(name){
    console.log(name);
});

console.log(_map({
    13: 'ID',
    19:'HD',
    29:'YD'  
  }, function(name){
      return name.toLowerCase();
  }));


// _go(users,
//     _map(function(user){
//         return user.name;
//     }),
//     _map(function(name){
//         return name.toLowerCase();
//     }),
//     console.log);
