const buttons = document.querySelectorAll('button');
const inputField = document.getElementsByTagName('input')[0];

function calculate() {
  const expression = inputField.value;
  try {
    inputField.value = eval(expression);
  } catch (error) {
    inputField.value = 'erro';
  }
}

function calculateRoot() {
  const expression = inputField.value;
  const number = eval(expression);
  if (typeof number === 'number' && number >= 0) {
    inputField.value = Math.sqrt(number);
  } 
}

function clearInput() {
 let currentValue = inputField.value;
 let newValue = currentValue.substring(0, currentValue.length -1);
 inputField.value = newValue;
}
 
function handleClick(e) {
  const buttonText = e.target.textContent;
  if (buttonText === '=') {
    calculate();
  } else if (buttonText === 'x') {
    clearInput();
  } else if (buttonText === '√') {
    calculateRoot()
  }
  else {
    inputField.value += buttonText;
  }
}

buttons.forEach(button => {
  button.addEventListener('click', handleClick);
});
  
  


 






