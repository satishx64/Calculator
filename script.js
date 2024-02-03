let displayVal = '';
let pendingVal;
let evalStringArray = [];

function addToDisplay(val) {
  displayVal += val;
  document.getElementById('display').value = displayVal;
}

function operate(operator) {
  if (displayVal !== '') {
    evalStringArray.push(displayVal);
    evalStringArray.push(operator);
    pendingVal = displayVal;
    displayVal = '';
    document.getElementById('display').value = '';
  } else if (evalStringArray[evalStringArray.length - 1] === operator) {
    return;
  } else {
    evalStringArray.pop();
    evalStringArray.push(operator);
  }
}

function calculate() {
  evalStringArray.push(displayVal);
  let evaluation = eval(evalStringArray.join(' '));
  displayVal = evaluation + '';
  document.getElementById('display').value = displayVal;
  evalStringArray = [];
}

function clearDisplay() {
  displayVal = '';
  pendingVal = undefined;
  evalStringArray = [];
  document.getElementById('display').value = '';
}