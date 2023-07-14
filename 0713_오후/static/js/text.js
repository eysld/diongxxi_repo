
// var redCup=10;
// var blueCup=20;
// var whiteCup=0;

// document.write("변경전 빨간컵 : "+redCup+"변경후 파란컵 : "+blueCup+"<br>");
// whiteCup=redCup;
// redCup=blueCup;
// blueCup=whiteCup;

// document.write("변경후 빨간컵 : "+redCup+"변경후 파란컵 : "+blueCup);

// var jin=0;
// var red=1;
// var blue=2;
// var yellow=3;
// var green=4;


// jin=red;
// document.write("변경전 : " +jin+ "<br>");
// jin=green;
// document.write(jin);

// var tall=120;
// if(tall>=140){
//     document.write("바이킹탑승");
// }else{
//     document.write("탑승 불가");
// }

// var score=80;
// if(score>=60){
//     document.write("합격");
// }else{
//     document.write("불합격");
// }

//국토 8-10길에서 시속 70km 제한이 있다.
//과속인지 아닌지 자동차의 속도를 입력받아 출력하시오/

// var car=prompt("자동차의 속력을 입력하시오");
// if(car>70){
//     document.write("과속");
// }else{
//     document.write("통과");
// }

// var score=Number(prompt("나의점수"));
// if(score>=90){
//     document.write("A등급");
// }else if(score>=80){
//     document.write("B등급");
// }else if(score>=70){
//     document.write("C등급");
// }else{
//     document.write("F등급");
// }

// var me=prompt("나의위치");

// if(me=="중구"){
//     document.write("배달료 0원");
// }else if(me=="동구"){
//     document.write("배달료 2000원");
// }else if(me=="서구"){
//     document.write("배달료1000 원");
// }
// var num = Math.floor(Math.random()*44 +23);
// document.write(num);

// var coin=Math.floor(Math.random()*2+1);
// var user =prompt("1:앞면 2:뒷면");
// if(isNaN(user)){ //isNaN함수는 숫자로 변환이 가능한 경우 거짓, 변환 불가능한 경우 참
//     alert("숫자만 입력하세요");
//     user =prompt("1:앞면 2:뒷면");
// }
// user = Number(user);
// if(coin==user){
//     document.write((user==1 ? '앞면' : '뒷면') +"정답 <br>");
// }else{
//     document.write("땡");
// }

var dice=Math.floor(Math.random()*6+1);
var user = prompt("1부터 6까지 숫자를 입력");

user=Number(user);
if(dice==user){
    document.write("정답" + dice);
}else{
    document.write("손목");
}

function inputNum(str){
    var a = prompt(str);
    while(isNaN(a)){
        alert("숫자만 입력 가능합니다");
        a=prompt(str);
    }
    a=Number(a);
    return a;
}