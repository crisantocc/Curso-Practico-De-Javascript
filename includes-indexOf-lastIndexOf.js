// includes() whit numbers

const numbers = [1,2,3,4,5]

const result1 =numbers.includes(3)
console.log(result1)

const result2 = numbers.includes(8)
console.log(result2)

// indexOf()

const fruits = ['apple', 'cherry', 'grape', 'mango']

const index1 = fruits.indexOf('grape')
console.log(index1)

const index2 = fruits.indexOf('blueberry')
console.log(index2)

// lastIndexOf()

const numbersAgan = [2,4,6,8,10,6]

const lastIndex1 = numbersAgan.lastIndexOf(6)
console.log(lastIndex1)

const lastIndex2 = numbersAgan.lastIndexOf(3)
console.log(lastIndex2)

// Excercise * Findid Substring Indices

const stringArray = ['apple','banana', 'orange','grape','banana', 'kiwi']
const target = 'bannana'

function findStringIndicesInArray (array, target){
    const result = {
        includesTargetString: false,
        first0ccurrenceIndex: -1,
        last0ccurrenceIndex: -1
    }

    array.forEach((element, index) => {
        if(element.includes(target)) {
            result.includesTargetString = true
            result.first0ccurrenceIndex = array.indexOf(target)
            result.first0ccurrenceIndex = array.lastIndexOf(target)
        }
    })
    return result
}
const result = findStringIndicesInArray(stringArray, target)

console.log(result)