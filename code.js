let numLine=document.getElementsByClassName("numberLine")[0];
let eqButt=document.querySelector("#eq");
let numbers=document.querySelectorAll("#num");
let action=document.querySelectorAll("#action");
let upBg=document.querySelector(".upBg");
let AC=document.querySelector("#AC");
let currentAction = "";
let currentNumber = "";
let firstNumber;


action.forEach(i=> i.addEventListener("click", (e)=>{actionPressed(e)}));

AC.addEventListener("click", ()=>{
currentAction = "";
currentNumber = "";
firstNumber = "";
numLine.innerHTML="";
})

function actionPressed(e){
    if (currentAction=="") 
    {
        if (e.target.innerText=="-") 
        {
            if (currentNumber=="") 
            {
                currentNumber="-";
                numLine.innerHTML="-";
                return;
            }    
                    else{ 
                   numLine.innerHTML=numLine.innerHTML+e.target.innerHTML;
                    currentAction=e.target.innerText;
                    firstNumber=currentNumber;
                    currentNumber=""; 
                    return;
                }
        }
        if (currentNumber=="") {
            err();
            return;
        }
        else{      
            numLine.innerHTML=numLine.innerHTML+e.target.innerHTML;
            currentAction=e.target.innerText;
            firstNumber=currentNumber;
            currentNumber=""; 
        }
 
    }
    else{
        err();
    }
}

numbers.forEach(i=> i.addEventListener("click", (e)=>{getNumber(e)}));

function getNumber(arg){
    if (arg == "get") {
        return(currentNumber);
    }
    currentNumber=currentNumber+arg.target.innerHTML;
    numLine.innerHTML=numLine.innerHTML+arg.target.innerHTML;
};


eqButt.addEventListener("click", ()=>{

    switch (currentAction) {
        case "+": numLine.innerHTML=(Number(firstNumber)+Number(currentNumber)).toFixed(2); break;
        case "-": numLine.innerHTML=(Number(firstNumber)-Number(currentNumber)).toFixed(2); break;
        case "÷":numLine.innerHTML=(Number(firstNumber)/Number(currentNumber)).toFixed(2);  break;
        case "×":numLine.innerHTML=(Number(firstNumber)*Number(currentNumber)).toFixed(2); break;
    }
    currentNumber=numLine.innerHTML;
    currentAction = "";
});

function err(){
    upBg.style.backgroundColor = "red";
setTimeout(`upBg.style.backgroundColor = "rgba(0, 0, 0, 0.884)";`, 200);
}

