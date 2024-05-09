// Explicit Type Casting

const string = '42'
const integer = parseInt(string)
console.log(integer)
console.log(typeof integer)

const stringDecimal = '3.14'
const float = parseFloat(stringDecimal)
console.log(float)
console.log(typeof float)

// Implicit Type Casting
const sum = '5' + 3
console.log(sum)

const sumWithBoolean = '3' + true
console.log(sumWithBoolean)

const sumWithNumber = 2 + true
console.log(sumWithNumber)

const stringValue = '10'
const numberValue = 10
const boolenValue = true

console.log('_______________________')
console.log(stringValue + stringValue)  //Contatena
console.log(stringValue + numberValue)  //Contatena
console.log(stringValue + boolenValue)  //Contatena
console.log(numberValue + stringValue)  //Contatena
console.log(numberValue + numberValue)  //Suma
console.log(numberValue + boolenValue)  //Suma
console.log(boolenValue + stringValue)  //Contatena
console.log(boolenValue + numberValue)  //Suma
console.log(boolenValue + boolenValue)  //Suma