// Factorial Calculation Functions
function factorialIterative(num) {
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

function factorialRecursive(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorialRecursive(num - 1);
}

// Input Validation
function isValidInput(input) {
    const number = parseInt(input, 10);
    return !isNaN(number) && number >= 0;
}

// Event Listeners
const iterativeButton = document.getElementById("calculate-iterative");
const recursiveButton = document.getElementById("calculate-recursive");
const numberInput = document.getElementById("number-input");
const resultText = document.getElementById("result-text");

iterativeButton.addEventListener("click", () => {
    const input = numberInput.value;
    if (isValidInput(input)) {
        const result = factorialIterative(parseInt(input, 10));
        resultText.textContent = `Iterative result: ${result}`;
    } else {
        resultText.textContent = "Please enter a valid positive integer.";
    }
});

recursiveButton.addEventListener("click", () => {
    const input = numberInput.value;
    if (isValidInput(input)) {
        const result = factorialRecursive(parseInt(input, 10));
        resultText.textContent = `Recursive result: ${result}`;
    } else {
        resultText.textContent = "Please enter a valid positive integer.";
    }
});
