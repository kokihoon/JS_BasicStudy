function Person(name) {
    this.name = name;
}

Person.prototype.name = null;
Person.prototype.introduce = function() {
    return 'My name is ' + this.name;
}


var p1 = new Person('kokihoon');
console.log(p1.introduce() + "<br/>");  // 상속 받았기 때문에 introduce 가능함.


function Programmer(name) {
    this.name = name;
}
Programmer.prototype = new Person(); // Person 상속 함.
Programmer.prototype.coding = function() {
    return "hello world";
}

function Designer(name) {
    this.name = name;
}

Designer.prototype = new Person();
Designer.prototype.design = function() {
    return "beautiful!";
}

var p2 = new Programmer('koki');
console.log(p2.introduce() + "<br/>");
console.log(p2.coding()+"<br/>");

var p3 = new Designer('kihoon');
console.log(p3.introduce() + "<br/>");
console.log(p3.design()+"<br/>");

