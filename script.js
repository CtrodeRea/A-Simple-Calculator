const inputField = document.getElementById('input');
const outputField = document.getElementById('output');
const buttons = document.getElementsByClassName('button');


function addToInput(value) {
  inputField.value += value;
}
function addToOutput(value) {
    outputField.value += value;
}

// Function to evaluate the expression and calculate the result
function calculate() {
  const expression = inputField.value;

  // Split the expression into numbers and operators
  const numbers = expression.split(/(\+|\-|\*|\/)/);

  var result = parseFloat(numbers[0]);

  for (i = 1; i < numbers.length; i += 2) {
    const operator = numbers[i];
    const operand = parseFloat(numbers[i + 1]);

    if (operator === '+') {
      result += operand;
    } else if (operator === '-') {
      result -= operand;
    } else if (operator === '*') {
      result *= operand;
    } else if (operator === '/') {
      result /= operand;
    }
  }

  outputField.value = result;
}

// Function to clear the input field
function clearInput() {
  inputField.value = '';
  outputField.value = '';
}

// Function to to clear the input field item
function deleteLast(){
    // inputField.value = inputField.value.splice(0, -1);
    
        // inputField.value = inputField.value.substring(0, inputField.value.length - 1);
        inputField.value = inputField.value.slice(0, inputField.value.length - 1);

      
      
}