function func(){
  console.log('Hello?');

}

func();
//함수

window.func();
//객체.속성(함수) func()는 윈도우 객체의 메소드다. window는 전역객체이다.

var o = {'func' : function() {
  console.log("hello?");
}}

o.func();

window.o.func();

function func() {
  if(window === this) {
    console.log("window === this")
  }
}

func();

var o = {
  func : function() {
    if(o === this) {
      console.log("o === this");
    }
  }
}
o.func();

var funcThis = null;

function Func(){
  funcThis = this;
}

var o1 = Func();  // 함수 호 this == window가 된다.

if(funcThis === window) {
  console.log('window </br>');
}

var o2 = new Func();  // 생성자 호출 this == 생성될 객체가 된다.

if(funcThis === o2) {
  console.log('o2 </br>');
}


var o = { }
var p = { }

function func() {
  switch(this){
    case o :
      console.log('o<br />');
      break;
    case p :
      console.log('p<br />');
      break;
    case window :
      console.log('window<br/>');
      break;
  }
}

func();
func.apply(o);
func.apply(p);
