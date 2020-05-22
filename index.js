// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1><hr>`;


appDiv.innerHTML += `<strong>Compute Factorial: </strong> <input type="text" value="10" id="factNum" onchange="computeFactorial()"/>`;

function computeThruLoop(num) {
  var result = 1;
  for (let i=2; i<=num; i++) {
    result *= i;
  }
  return result;
}

function computeFactorial() {
  var factNum = document.getElementById('factNum').value;
  console.log('Factorial Result: '+ computeThruLoop(factNum));
  console.log('Factorial Result: '+ computeFactorialUsingRecursion(factNum));
}

function computeFactorialUsingRecursion(num) {
  if (num === 1) {
    return 1;
  } else {
    return num * computeFactorialUsingRecursion(num-1);
  }
}

computeFactorial();