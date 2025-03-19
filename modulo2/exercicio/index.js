const sum = (num1, num2) => num1 + num2
const subtraction = (num1, num2) => num1 - num2
const multiplication = (num1, num2) => num1 * num2
const division = (num1, num2) => num1 / num2
function result() { 
    console.log(`Sum between ${num1} e ${num2}: ${sum(num1, num2)}`)
    console.log(`Subtraction between ${num1} e ${num2}: ${subtraction(num1, num2)}`)
    console.log(`Multiplication between ${num1} e ${num2}: ${multiplication(num1, num2)}`)
    console.log(`Division between ${num1} e ${num2}: ${division(num1, num2)}`)
}
const num1 = 22
const num2 = 7
sum()
subtraction()
multiplication()
division()
result()