// JavaScript : Prototype-based programming
var person = { }

person.name = 'egoing';

person.introduce = function() {
    return 'My name is' + this.name;
}

console.log(person.introduce());

var person1 = {
    'name' : 'egoing',
    'introduce' : function() {
        return 'My name is' + this.name;
    }
}

var person2 = {
    'name' : 'leezche',
    'introduce' : function() {
        return 'My name is' + this.name;
    }
}

console.log(person2.introduce())

function Person() { }
var p0 = new Person();
p0.name = 'egoing';
p0.introduce = function() {
    return 'My name is ' + this.name;
}

// 생성자 초기화
function Person(name) {
    this.name = name;
    this.introduce = function() {
        return 'My name is ' + this.name;
    }
}

var p1 = new Person('egoing');
console.log(p1.introduce());

var p2 = new Person('leezche');
console.log(p2.introduce());