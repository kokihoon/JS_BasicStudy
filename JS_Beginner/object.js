//Object.keys()
var arr = ["a", "b", "c"];
console.log("Object.keys(arr)", Object.keys(arr));


//Object.prototype.toString()
var o = new Object();
console.log('o.toString()', o.toString());



var a = new Array(1,2,3);

console.log('a.toString()', a.toString());



Object.prototype.contain = function(needle) {
  for(var name in this) {
    if(this[name] === needle){
      return true;
    }
  }
  return false;
}


var o = {'name' : 'egoing', 'city': 'seoul'}
console.log(o.contain('grapittie'));

var a = ['egoing', 'leezche', 'grapittie'];
console.log(a.contain('leezche'));

for(var name in o) {
  if(o.hasOwnProperty(name)){
    console.log(name);
  }
}
