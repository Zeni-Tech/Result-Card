function calculateResult() {
    let obt1 = parseInt(document.getElementById("obt1").value);
    let obt2 = parseInt(document.getElementById("obt2").value);
    let obt3 = parseInt(document.getElementById("obt3").value);
    let obt4 = parseInt(document.getElementById("obt4").value);
    let obt5 = parseInt(document.getElementById("obt5").value);
    let stdTmMarks=document.getElementById("tm").value ;
    let totalObtainedMarks = obt1 + obt2 + obt3 + obt4 + obt5;
    let Result=(totalObtainedMarks/stdTmMarks)*100;
    document.write("Total Percentage : " + Result);
    if(Result===100){
        document.write("A+ Grade")
    }
    else if(Result>=90 && Result<100){
        document.write("A Grade")
    }
    else if(Result>=70 && Result<89){
        document.write("B Grade")
    }
    else if(Result>=50 && Result<69){
        document.write("C Grade")
    }
    else if(Result>=40 && Result<49){
        document.write("D Grade")
    }
    else{
        document.write("F Grade")
    }
    document.getElementById("result").innerHTML ="Total Percentage:" +Result;    

}