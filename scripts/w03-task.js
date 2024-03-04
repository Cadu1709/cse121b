/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
  }
  
  /* Function Expression - Subtract Numbers */
  const subtract = function(number1, number2) {
    return number1 - number2;
  };
  
  /* Arrow Function - Multiply Numbers */
  const multiply = (number1, number2) => number1 * number2;
  
  /* Open Function Use - Divide Numbers */
  function divide(number1, number2) {
    return number1 / number2;
  }
  
  /* Decision Structure */
  document.querySelector('#addNumbers').addEventListener('click', () => {
    const addNumber1 = parseFloat(document.getElementById('add1').value);
    const addNumber2 = parseFloat(document.getElementById('add2').value);
    const sum = add(addNumber1, addNumber2);
    document.getElementById('sum').value = sum;
    
    document.querySelector('#getTotal').addEventListener('click', () => {
        const subtotal = parseFloat(document.getElementById('subtotal').value);
        const isMember = document.getElementById('member').checked;
        let total;
      
        if (isMember) {
          total = subtotal * 0.8; // 20% discount for members
        } else {
          total = subtotal;
        }
      
        document.getElementById('total').textContent = `$${total.toFixed(2)}`;
      });
  });
  
  document.querySelector('#subtractNumbers').addEventListener('click', () => {
    const subtractNumber1 = parseFloat(document.getElementById('subtract1').value);
    const subtractNumber2 = parseFloat(document.getElementById('subtract2').value);
    const difference = subtract(subtractNumber1, subtractNumber2);
    document.getElementById('difference').value = difference;
  });
  
  document.querySelector('#multiplyNumbers').addEventListener('click', () => {
    const factor1 = parseFloat(document.getElementById('factor1').value);
    const factor2 = parseFloat(document.getElementById('factor2').value);
    const product = multiply(factor1, factor2);
    document.getElementById('product').value = product;
  });
  
  document.querySelector('#divideNumbers').addEventListener('click', () => {
    const dividend = parseFloat(document.getElementById('dividend').value);
    const divisor = parseFloat(document.getElementById('divisor').value);
    const quotient = divide(dividend, divisor);
    document.getElementById('quotient').value = quotient;
  });
  
  /* ARRAY METHODS - Functional Programming */
  /* Output Source Array */
  const numbersArray = Array.from({ length: 13 }, (_, index) => index + 1);
  document.getElementById('array').textContent = numbersArray;
  
  /* Output Odds Only Array */
  const oddsArray = numbersArray.filter(number => number % 2 !== 0);
  document.getElementById('odds').textContent = oddsArray;
  
  /* Output Evens Only Array */
  const evensArray = numbersArray.filter(number => number % 2 === 0);
  document.getElementById('evens').textContent = evensArray;
  
  /* Output Sum of Org. Array */
  const sumOfArray = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  document.getElementById('sumOfArray').textContent = sumOfArray;
  
  /* Output Multiplied by 2 Array */
  const multipliedArray = numbersArray.map(number => number * 2);
  document.getElementById('multiplied').textContent = multipliedArray;
  
  /* Output Sum of Multiplied by 2 Array */
  const sumOfMultiplied = multipliedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;
  