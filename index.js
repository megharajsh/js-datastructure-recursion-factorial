// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function computeThruLoop(num) {
  var result = 1;
  for (let i=2; i<=num; i++) {
    result *= i;
  }

  return result;
}

function computeFactorial(num) {
  if (num === 1) {
    return 1;
  } else {
    return num * computeFactorial(num-1)
  }
}

console.log('Factorial Result: '+ computeThruLoop(6));
console.log('Factorial Result: '+ computeFactorial(6));