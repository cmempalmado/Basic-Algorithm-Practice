const submitButton = document.getElementById('submitButton');

// Basic calculation using addition, subtraction, multiplication, and division
function Calculation() {
    const firstNumber = parseFloat(document.getElementById('userInput').value);
    const secondNumber = parseFloat(document.getElementById('userInput2').value);

    const sum = firstNumber + secondNumber;
    const difference = firstNumber - secondNumber;
    const product = firstNumber * secondNumber;
    const quotient = firstNumber / secondNumber;

    console.log(sum , difference , product , quotient);

    const result = document.getElementById('result').innerHTML = `
        Sum: ${sum} <br>
        Difference: ${difference} <br>
        Product: ${product} <br>
        Quotient: ${quotient}
    `;
}

// Multiply the first number starting by 1 until i is equal to second number
function Looping() {    
    const firstNumber = parseFloat(document.getElementById('userInput').value);
    const secondNumber = parseFloat(document.getElementById('userInput2').value);
    var loopNum = firstNumber;

    for (i = 1; i < secondNumber + 1; i++) {
        loopNum *= i;
        console.log(loopNum);
    };

    const resultLoop = document.getElementById('resultLoop').innerHTML = `
    First Number Multiplied by 1 until the second number is ${loopNum}
    `;
}

submitButton.addEventListener("click", Calculation);
submitButton.addEventListener("click", Looping);