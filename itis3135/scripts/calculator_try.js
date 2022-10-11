window.onload = function(){

}
var numOperators = 0;

function operatorClicked(){
    const display = document.getElementById("display");
    const operator = document.getElementsByClassName("operator");
    if(numOperators >= 2){
        display.textContent = display.textContent.slice(0, display.textContent.length - 1);
    }
}

function ans(){
    const display = document.getElementById("display");
    const output = document.getElementById("output");
    numOperators = 0;
    display.textContent = output.textContent;
}

function performAction(opt){
    const display = document.getElementById("display");
    const output = document.getElementById("output");
    

    var operator;
    if(display.textContent == '0'){
        display.textContent = '';
    }
    display.textContent = display.textContent + opt;
    if(display.textContent.includes('+')){
        operator = '+';
        numOperators += 1;
        var index = display.textContent.indexOf('+');
        var firstNum = parseFloat(display.textContent.slice(0, index));
        var secondNum = parseFloat(display.textContent.slice(index+1, display.textContent.length));
        output.textContent = calculate(firstNum, secondNum, operator);
        
    }else if(display.textContent.includes('-')){
        operator = '-';
        numOperators += 1;
        var index = display.textContent.indexOf('-');
        var firstNum = parseFloat(display.textContent.slice(0, index));
        var secondNum = parseFloat(display.textContent.slice(index+1, display.textContent.length));
        output.textContent = calculate(firstNum, secondNum, operator);

    }else if(display.textContent.includes('*')){
        operator = '*';
        numOperators += 1;
        var index = display.textContent.indexOf('*');
        var firstNum = parseFloat(display.textContent.slice(0, index));
        var secondNum = parseFloat(display.textContent.slice(index+1, display.textContent.length));
        output.textContent = calculate(firstNum, secondNum, operator);
    }else if(display.textContent.includes('/')){
        operator = '/';
        numOperators += 1;
        var index = display.textContent.indexOf('/');
        var firstNum = parseFloat(display.textContent.slice(0, index));
        var secondNum = parseFloat(display.textContent.slice(index+1, display.textContent.length));
        output.textContent = calculate(firstNum, secondNum, operator);
    }
    
}

function clearCalc(){
    numOperators = 0;
    const display = document.getElementById("display");
    display.textContent = '0';
}

function calculate(firstNum, secondNum, operator){
    if(!secondNum == ''){
        if(operator == "+"){
            return firstNum + secondNum;
        }
        if(operator == "-"){
            return firstNum - secondNum;
        }
        if(operator == "*"){
            return firstNum * secondNum;
        }
        if(operator == "/"){
            return (firstNum / secondNum);
        }
    }
}

