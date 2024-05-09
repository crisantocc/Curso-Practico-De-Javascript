// Methods that iterate over an array.
// Methods that DO NOT modifiy the original array (Immutability).

//filter()
const numbers = [1,2,3,4,5,6,7,8,9,10]
const evenNumbers = numbers.filter(number => number % 2 === 0)
console.log(numbers)
console.log(evenNumbers)

// reduce
const numbersReduce = [1,2,3,4,5]
const sum = numbersReduce.reduce((accumalator, currentValue) => accumalator + currentValue, 0)
console.log(numbersReduce)
console.log(sum)

// reduce: case 2

const words = ['apple', 'bannana', 'hello', 'bye', 'bannana', 'bye', 'bye']

const wordFrecuency = words.reduce((accumalator, currentValue) => {
    if (accumalator[currentValue]){
        accumalator[currentValue]++
    } else {
        accumalator[currentValue] = 1
    }
    return accumalator
}, {})

console.log(wordFrecuency)

// Extercise: Passing Grade Average
const grades = [85, 92, 60, 78, 95, 66, 88, 50, 94]
const passingGrades = grades.filter(grade => grade >= 70)

const averragePassingGrade = passingGrades.reduce((sum, grade) => sum + grade, 0) / passingGrades.length
console.log('Original Grades: ', grades)
console.log('Passing Grades: ', passingGrades)
console.log('Average Passing Grade: ', averragePassingGrade)
