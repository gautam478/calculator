const display = document.getElementById('display_area')

let isOperatorPresent = false;

function takeValue(element) {
  if (!isNaN(parseInt(element.innerText))) {
    display.innerText += element.innerText;
  }
  else if (!isOperatorPresent && display.innerText != "") {
    display.innerText += element.innerText;
    isOperatorPresent = true;
  }
}

function removeAll () {
  display.innerText = "";
  isOperatorPresent = false;
}

function result () {
  if (display.innerText == null || !isOperatorPresent || isNaN(parseInt(display.innerText[display.innerText.length - 1]))) {
    return;
  }
  if (display.innerText == "0/0") {
    display.innerText = "Cannot divide by zero";
    setTimeout(removeAll, 1000);
    return;
  }

  let string = display.innerText, isFirstNegative = false, operator = '+', array = [], res = 478;

  if (string[0] == '-') {
    isFirstNegative = true;
    console.log("Yes first number is negative");
  }

  for (let i = 1; i < string.length; i++) {
    if (string[i] == '+' || string[i] == '-' || string[i] == '*' || string[i] == '/') {
      operator = string[i];
      break;
    }
  }
  console.log("operator is" ,operator);

  array = string.split(/[+\-*\/]/);
  let len = array.length;
  for (let i = 0; i < len; i++) {
    array[i] = parseFloat(array[i]);
  }
  console.log(array);

  if (isFirstNegative) {
    array[len - 2] *= -1;
  }
  
  if (operator == '+') {
    res = array[len - 2] + array[len - 1];
  }
  else if (operator == '-') {
    res = array[len - 2] - array[len - 1];
  }
  else if (operator == '*') {
    res = array[len - 2] * array[len - 1];
  }
  else if (operator == '/') {
    res = array[len - 2] / array[len - 1];
  }

  if (!Number.isInteger(res)) {
    res = res.toFixed(5);
  }

  display.innerText = res.toString();
  isOperatorPresent = false;
  
  if (display.innerText == "Infinity") {
    display.innerText = "Cannot divide by zero";
    setTimeout(removeAll, 1000);
  }
}