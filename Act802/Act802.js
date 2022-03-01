function multiply(){
    let number1 = document.querySelector('#numero1').value;
    let number2 = document.querySelector('#numero2').value;
    document.querySelector('#result').innerHTML = number1 * number2;
}

function addition(){
    let number1 = document.querySelector('#numero1').value;
    let number2 = document.querySelector('#numero2').value;
    document.querySelector('#result').innerHTML = +number1 + +number2;
}

function divide(){
    let number1 = document.querySelector('#numero1').value;
    let number2 = document.querySelector('#numero2').value;
    document.querySelector('#result').innerHTML = number1 / number2;
}

function subtraction(){
    let number1 = document.querySelector('#numero1').value;
    let number2 = document.querySelector('#numero2').value;
    document.querySelector('#result').innerHTML = number1 - number2;
}

