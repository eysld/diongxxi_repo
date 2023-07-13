var time = Number(prompt("주차시간 입력"));

if (time<=30){
    fee=1000;
    document.write("총 주차시간 : " + time + "분 <br> 주차요금 : "+fee+"원");
}else if(time>30 && time<120){
    fee=1000;
    var extra=((Math.floor((time-30)/10))+1)*100;
    fee = fee + extra;
    document.write("총 주차시간 : " + time +"분 <br> 주차요금 : "+fee+"원");
}else if(time==120){
    fee=1500;
    document.write("총 주차시간 : "+time +"분 <br> 주차요금 : " +fee+"원");
}else if(time>120 && time<240){
    fee=1500;
    extra=((Math.floor((time-120)/10))+1)*100;
    fee=fee+extra;
    document.write("총 주차시간 : "+time +"분 <br> 주차요금 : " +fee+"원");
}else if(time==240){
    fee=2500;
    document.write("총 주차시간 : "+time +"분 <br> 주차요금 : " +fee+"원");
}else if(time>240 && time<480){
    fee=2500;
    extra=((Math.floor((time-240)/10))+1)*100;
    fee=fee+extra;
    document.write("총 주차시간 : "+time +"분 <br> 주차요금 : " +fee+"원");
}else{
    fee=5000;
    document.write("총 주차시간 : "+time +"분 <br> 주차요금 : "+fee+"원");
}