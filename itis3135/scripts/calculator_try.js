window.onload = function(){
    document.getElementById('add').onclick = function() {performAction('+'), operatorClicked()}
    document.getElementById('subtract').onclick = function() {performAction('-'), operatorClicked()}
    document.getElementById('multiply').onclick = function() {performAction('*'), operatorClicked()}
    document.getElementById('divide').onclick = function() {performAction('/'), operatorClicked()}
    document.getElementById('neg').onclick = function() {operatorClicked(), negative()}
    document.getElementById('7').onclick = function() {performAction('7')}
    document.getElementById('8').onclick = function() {performAction('8')}
    document.getElementById('9').onclick = function() {performAction('9')}
    document.getElementById('4').onclick = function() {performAction('4')}
    document.getElementById('5').onclick = function() {performAction('5')}
    document.getElementById('6').onclick = function() {performAction('6')}
    document.getElementById('1').onclick = function() {performAction('1')}
    document.getElementById('2').onclick = function() {performAction('2')}
    document.getElementById('3').onclick = function() {performAction('3')}
    document.getElementById('0').onclick = function() {performAction('0')}
    document.getElementById('clr').onclick = function() {clearCalc()}
    document.getElementById('ans').onclick = function() {ans()}
    document.getElementById('dec').onclick = function() {performAction('.')}
    document.getElementById('sqrt').onclick = function() {square_root()}
    document.getElementById('square').onclick = function() {square()}
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
        
    }else if(display.textContent.includes('-') && display.textContent.lastIndexOf('-') != 0){
        operator = '-';
        numOperators += 1;
        var index = display.textContent.lastIndexOf('-');
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
    negOperator = 0;
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

function negative(){
    const display = document.getElementById("display");
    if(display.textContent == '0'){
        display.textContent = '-';
    }else{
        display.textContent = '-' + display.textContent;
    }
}

function square(){
    const display = document.getElementById("display");
    const output = document.getElementById("output");
    if(numOperators == 0){
        output.textContent = Math.pow(parseFloat(display.textContent), 2);
    }
}

function square_root(){
    const display = document.getElementById("display");
    const output = document.getElementById("output");
    if(numOperators == 0){
        output.textContent = Math.sqrt(parseFloat(display.textContent));
    }
}


