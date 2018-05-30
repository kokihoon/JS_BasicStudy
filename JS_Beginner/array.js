var member = ['egoing', 'k8805', 'sorialgi'];

console.log(member);

function get_member1(){
  return 'egoing';
}

document.write(get_member1());

function get_member2(){
  return 'k8805';
}
document.write(get_member2());

function get_member3(){
  return 'sorialgi';
}


function get_members() {
  return ['egoing', 'k8805', 'sorialgi'];
}


var members = get_members();

document.write(members[0]);
document.write(members[1]);
document.write(members[2]);
