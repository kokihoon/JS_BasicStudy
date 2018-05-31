var urlPattern = /\b(?:https?):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*/gim;
var content = ' 생활 코딩 : http://opentutorials.org/course/1 입니다. 네이버 : http://naver.com 입니다. ';

var result = content.replace(urlPattern, function(url) {
    return '<a href="'+url+'">'+url+'</a>';
});

console.log(result);