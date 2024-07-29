let display = document.querySelector('.display');
let previousOperator = null;
let previousOperand = null;

function appendNumber(number) {
    display.textContent += number;
}

function appendOperator(operator) {
    if (previousOperator) {
        calculate();
    }
    previousOperator = operator;
    previousOperand = parseFloat(display.textContent);
    display.textContent += operator;
}

function appendDecimal(decimal) {
  // Vérifie si un point décimal existe déjà dans l'affichage
  if (!display.textContent.includes('.')) {
    display.textContent += decimal;
  }
}
function effacerUnChiffre() {
    let valeurAffichage = display.value;
   // if (valeurAffichage.length > 0) {
      display.value = valeurAffichage.slice(0, -1);
    //} 
    
}

function clearDisplay() {
    display.textContent = '';
    previousOperator = null;
    previousOperand = null;
}

function calculate() {
    let currentOperand = parseFloat(display.textContent.substring(display.textContent.lastIndexOf(previousOperator) + 1));
    let result;

    switch (previousOperator) {
        case '+':
            result = previousOperand + currentOperand;
            break;
        case '-':
            result = previousOperand - currentOperand;
            break;
        case '*':
            result = previousOperand * currentOperand;
            break;
        case '/':
            if (currentOperand === 0) {
                result = 'Erreur : Division par zéro';
            } else {
                result = previousOperand / currentOperand;
            }
            break;
        case '%':
          result = previousOperand * (currentOperand / 100);
          break;
        default:
            result = display.textContent;
    }

    display.textContent = result;
    previousOperator = null;
    previousOperand = null;
}
