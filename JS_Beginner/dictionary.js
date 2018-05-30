var grades = {'egoin':10,'k8805':6,'sorialgi':80}


for (key in grades) {
  document.write("key : " + key + " value : " +grades[key] + "<br />")
}
console.log(grades)

var grades = {
  'list' : {'egoing' : 10, 'k8805' : 8, 'sorialgi' : 80},
  'show' : function() {
    alert('Hello world');
    console.log(this.list);

    for(var name in this.list) {
      console.log(name, this.list[name]);
    }
  }
}
alert(grades['list']['egoing']);
alert(grades['show']());
grades.show();
