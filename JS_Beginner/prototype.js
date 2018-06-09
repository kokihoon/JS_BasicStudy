function Ultra() {
}
Ultra.prototype.ultraProp = true;

function Super() {}
var t = new Ultra();
t.ultraProp = 4;
Super.prototype = new Ultra();

function Sub() {

}
var s = new Super();
s.ultraProp = 3;
Sub.prototype = new Super();
Sub.prototype.ultraProp = 2;
var o = new Sub(); //prototype chain
o.ultraProp = 1;
console.log(o.ultraProp);
