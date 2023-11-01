import './style.css'


const display = document.getElementById('display');
let input = document.getElementById('input');
const successMsg = document.querySelector('.positive__message-wrapper');
const errorMsg = document.querySelector('.negative__message-wrapper');
const reservedKeywordErrorMsg = document.querySelector('.reserved-keyword-error');
const validateBtn = document.getElementById('check__variable');
const constantBtn = document.getElementById('constant-case');
const pascalBtn = document.getElementById('pascal-case');
const snakeBtn = document.getElementById('snake-case');
const camelBtn = document.getElementById('camel-case');
const allCaseBtns = Array.from(document.getElementsByClassName('case'));



const variableNameFormatter = /^[a-zA-Z_$][0-9a-zA-Z_$]*$/;

const reservedKeywords = [
  'await', 'break', 'case', 'catch', 'class', 'const', 'continue', 'debugger', 'default', 'delete', 'do', 'else',
  'export', 'extends', 'finally', 'for', 'function', 'if', 'fetch', 'import', 'in', 'instanceof', 'let', 'new', 'return',
  'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while', 'with', 'yield', 'enum', 'implements',
  'interface', 'package', 'private', 'protected', 'public', 'static', 'null', 'true', 'false'
];


let resultVariableName;


// validation functions

const isValidVariableName = validVariableName => {
  if (variableNameFormatter.test(validVariableName)) {
    resultVariableName = validVariableName;
    display.innerText = resultVariableName;
    successMsg.style.visibility = 'visible';
    console.log('Valid variable name!');
  }else {
    successMsg.style.visibility = 'hidden';
  }
}

const isInvalidVariableName = invalidVariableName => {
  if (!variableNameFormatter.test(invalidVariableName)) {
    display.innerText = '';
    errorMsg.style.visibility = 'visible';
    successMsg.style.visibility = 'hidden';
    console.log('Invalid variable name!');
  }else {
    errorMsg.style.visibility = 'hidden';
  }
}

const isReservedKeywords = foundReservedKeywords => {
  if (reservedKeywords.includes(foundReservedKeywords)) {
    display.innerText = '';
    reservedKeywordErrorMsg.style.visibility = 'visible';
    errorMsg.style.visibility = 'visible';
    successMsg.style.visibility = 'hidden';
    console.log('JavaScript reserved keyword found!');
  }else {
    reservedKeywordErrorMsg.style.visibility = 'hidden';
  }
}

// validation

validateBtn.addEventListener('click', () => {
  isValidVariableName(resultVariableName);
  isInvalidVariableName(resultVariableName);
  isReservedKeywords(resultVariableName);
})



// case formatting function

allCaseBtns.map((caseBtns) => {
  caseBtns.addEventListener('click', (e) => {
    let buttonValue = e.target.innerText;

    switch (buttonValue) {
      case 'camelCase':
        display.innerText = 'Feature coming soon!';
        // display.innerText = resultVariableName;
        console.log(`the button value is: ${buttonValue}`);
        break;
      case 'Pascal Case':
        display.innerText = 'Feature coming soon!';
        console.log(`the button value is: ${buttonValue}`);
        break;
      case 'CONSTANT':
        display.innerText = 'Feature coming soon!';
        console.log(`the button value is: ${buttonValue}`);
        break;
      case 'snake_case':
        display.innerText = 'Feature coming soon!';
        console.log(`the button value is: ${buttonValue}`);
        break;
    }
  }) 
})


input.addEventListener('input', (e) => {
  let inputValue = e.target.value
  resultVariableName = inputValue

  if (resultVariableName === '') {
    display.innerText = ''
    successMsg.style.visibility = 'hidden';
    errorMsg.style.visibility = 'hidden';
    reservedKeywordErrorMsg.style.visibility = 'hidden';
  }
})


// pascalBtn.addEventListener('click', (e) => {
//   let buttonValue = e.target.innerText;
//   display.innerText = buttonValue
//   console.log(`the button value is: ${buttonValue}`)
//   // toPascalCase(inputValue);
// }) 

// camelBtn.addEventListener('click', (e) => {
//   let buttonValue = e.target.innerText;
//   console.log(`the button value is: ${buttonValue}`)
//     // toCamelCase(inputValue);
// })

// constantBtn.addEventListener('click', (e) => {
//   let buttonValue = e.target.innerText;
//   console.log(`the button value is: ${buttonValue}`)
//   // toConstantCase(inputValue);
// })

// snakeBtn.addEventListener('click', (e) => {
//   let buttonValue = e.target.innerText;
//   console.log(`the button value is: ${buttonValue}`)
//   // toSnakeCase(inputValue);
// })
