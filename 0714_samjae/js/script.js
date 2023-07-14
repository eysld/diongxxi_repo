var ganji = ["신","유","술","해","자","축","인","묘","진","사","오","미"]

function zodiac(year){
    return ganji[year % 12];
}

document.getElementById("btn").onclick = Function()
    var samjae = false ;
    var birth = document.getElementById("birth").value;
    var target = document.getElementById("target").value;
    
    if(birth.length * target.length == 0){
        alert("생년과 대상년도를 입력하세요");
    }else{
        var birthDii = zodiac(birth);
        var targetDii = zodiac(target); 
        if(birthDii=="신"|| birthDii=="자" || birthDii=="진"){
            if(targetDii=="인"|| targetDii=="묘" || targetDii=="진"){
                samjae = true;
            }else{
                samjae = false;
            }
        }
        if(birthDii=="해"|| birthDii=="묘" || birthDii=="미"){
            if(targetDii=="사"|| targetDii=="오" || targetDii=="미"){
                samjae = true;
            }else{
                samjae = false;
            }
        }   
        if(birthDii=="해"|| birthDii=="묘" || birthDii=="미"){
            if(targetDii=="신"|| targetDii=="유" || targetDii=="술"){
                samjae = true;
            }else{
                samjae = false;
            }
        }   
    }