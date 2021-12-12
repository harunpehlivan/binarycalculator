//take input
function getInputs(input, select) {

let decimal;

if(input.value.trim().length==0) {
    return -1; 
   }
    
   else {
       
  if(select.value==="bin") {
  
  let test = true;
  
    for(let i=0; i<input.value.length; i++) {
      if((input.value[i] ==0) || (input.value[i] ==1)) {
        test = true;
      } else {
        test = false;
        break;
      }
    }
    
    if(test===true) {    
    decimal = convertBinary(input.value);
    }
    else {
     return -2; 
    }    
    }
     
  else if(select.value==="dec") {
   decimal = input.value;
  }
 }
 return decimal;
}

//convert binary into decimal
function convertBinary(binary) {
 let inDecimal = 0;
 let power = 0;
 for(let i=binary.length-1; i>=0; i--) {
   if(binary[i]==1) {
   inDecimal += Math.pow(2, power);   
   }
   power++;
 }
 return inDecimal;
}

//convert decimal into binary
function convertDecimal(decimal) {
 let inBinary = 0;
 let r;
 let n = 1;
 while(decimal !=0) {
   r = decimal % 2; 
   decimal = parseInt(decimal/2); 
   inBinary = inBinary + r * n;  
   n *= 10; 
 }
 return inBinary;
}

let operator;

function getOperator(clickedBtn) {
 operator = clickedBtn;
 
 //update operator label with operator symbol
 let operatorLabel = document.getElementById('operator-label');
 let sign = document.getElementById(clickedBtn);
 operatorLabel.innerHTML = sign.textContent; 
}


//calculate function
function calculate(firstValue, secondValue, op) {

if(op ==="plus") {
 return parseInt(firstValue) + parseInt(secondValue);
}
else if(op==="subtract") {
 return firstValue - secondValue;
}
else if(op==="divide") {
 return firstValue / secondValue;
}
else if(op==="multiply") {
 return firstValue * secondValue;
}
else if(op==="and") {
 return firstValue & secondValue;
}
else if(op==="or") {
 return firstValue | secondValue;
}
else if(op==="xor") {
 return firstValue ^ secondValue;
}
}

//final result
function finalResult() {

//input variables
let selectOne = document.getElementById('converter-one');
let selectTwo = document.getElementById('converter-two');
let firstInput = document.getElementById('first-input');
let secondInput = document.getElementById('second-input');

//label variables
let inputDecimalLabelOne = document.getElementById('input1-decimal');
let inputDecimalLabelTwo = document.getElementById('input2-decimal'); 
let outputDecimalLabel = document.getElementById('result-decimal');

let inputBinaryLabelOne = document.getElementById('input1-binary');
let inputBinaryLabelTwo = document.getElementById('input2-binary');
let outputBinaryLabel = document.getElementById('result-binary');

//warning variables
let warnLabelOne = document.getElementById('warn-input-one');
let warnLabelTwo = document.getElementById('warn-input-two');
let warnOperator = document.getElementById('warn-operator');


let result;
let firstValue = getInputs(firstInput, selectOne);
let secondValue = getInputs(secondInput, selectTwo);

 if(firstValue==-1 || firstValue==-2 || secondValue==-1 || secondValue==-2 || operator==undefined) {
 
 if(firstValue==-1) {
  warnLabelOne.style.visibility = "visible";
  firstInput.style.border = "solid 1px Crimson";
  warnLabelOne.innerHTML = "blank input 1*";
 } 
 
 if(firstValue==-2) {
  warnLabelOne.style.visibility = "visible";
  firstInput.style.border = "solid 1px Crimson";
  warnLabelOne.innerHTML = "not a binary*";
  }
  
  if(secondValue==-1) {
  warnLabelTwo.style.visibility = "visible";
  secondInput.style.border = "solid 1px Crimson";
  warnLabelTwo.innerHTML = "blank input 2*";
 } 
 if(secondValue==-2) {
  warnLabelTwo.style.visibility = "visible";
  secondInput.style.border = "solid 1px Crimson";
  warnLabelTwo.innerHTML = "not a binary*";
  }
  
  if(operator==undefined) {
   warnOperator.style.visibility = "visible";
   warnOperator.innerHTML = "enter the operator*";
  }
  }
 else {
 result = calculate(firstValue, secondValue, operator);
 
 inputDecimalLabelOne.innerHTML = firstValue;
 inputDecimalLabelTwo.innerHTML = secondValue;
 outputDecimalLabel.innerHTML = result;
 
 inputBinaryLabelOne.innerHTML = convertDecimal(firstValue); 
 inputBinaryLabelTwo.innerHTML = convertDecimal(secondValue);
 outputBinaryLabel.innerHTML = convertDecimal(result); 
 }
}