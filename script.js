let displayValue = '';

function appendNumber(num) {
  displayValue += num;
  document.getElementById('result').value = displayValue;
}

function appendOperator(op) {
  displayValue += op;
  document.getElementById('result').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('result').value = '';
}

function calculate() {
  try {
    let result = eval(displayValue);
    document.getElementById('result').value = result;
    displayValue = '';
  } catch (error) {
    alert('Invalid Input');
    clearDisplay();
  }
}
