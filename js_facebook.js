var celebrate = 5;
var comment_select = '.3b-9>div>.UFIComment .UFICommentActorName';

function random(a) {
  for(let i = a.length; i > 0; i--){
    let j = Math.floor(Math.random() *i);
    [a[i-1], a[j]] = [a[j], a[i-1]];
  }
}

var list = [];
document.querySelectorAll(comment_select).forEach(function(e){
  list.push(e.innerText);
});
list = list.filter((v,i,a) => a.indexOf(v) === i);
random(list)
console.log(list.slice(0, celebrate));
