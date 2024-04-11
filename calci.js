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
  let string = display.innerText, str = "", operator = '+', array = [], res = 478;

  for (let i = 0; i < string.length; i++) {
    if (!isNaN(parseInt(string[i])) || string[i] == '.') {
      str += string[i];
    }
    else {
      operator = string[i];
      array.push(parseFloat(str));
      str = "";
    }
  }
  array.push(parseFloat(str));
  console.log(array);

  if (operator == '+') {
    res = array[0] + array[1];
  }
  else if (operator == '-') {
    res = array[0] - array[1];
  }
  else if (operator == '*') {
    res = array[0] * array[1];
  }
  else if (operator == '/') {
    res = array[0] / array[1];
  }

  display.innerText = res.toString();
  isOperatorPresent = false;
  if (display.innerText == "Infinity") {
    setTimeout(removeAll, 1000);
  }
}