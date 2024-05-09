// como crear un array

// new array() or array()

const fruits = Array('apple', 'bannana', 'orange')
console.log(fruits)

const justOneNumber = Array(12)
console.log(justOneNumber)

const number = Array(1,2,3,4,5)
console.log(number)

// 2. Array literal syntax

const oneNumber = [4]
console.log(oneNumber)

const emptyArray = []
console.log(emptyArray)

const sports = ['soccer', 'tennis', 'rugby']
console.log(sports)

const recipeIngredients = [
    'Flour',
    true,
    2,
    {
        ingredients: 'Milk', quantity: '1 cup'
    },
    false
]
console.log(recipeIngredients)


// Accesing array elements

const firstFruit = fruits[0]
console.log(firstFruit)

// Length property

const numberOfFruits = fruits.length
console.log(numberOfFruits)

// Mutability

fruits.push('watermelon')
console.log(fruits)

// Immutability

const newFruits = fruits.concat(['grape', 'kiwi'])
console.log(fruits)
console.log(newFruits)

// Cheking arrays with Array.isArray()

const isArray = Array.isArray(fruits)
console.log(isArray)

// Practical exercise: sum all elements of an array.

const numbersArrays = [1,2,3,4,5]
let sum = 0

for(let i = 0; i < numbersArrays.length; i++){
    sum += numbersArrays[i]
}
console.log(sum)

// Methods that modify the original array (Mutability).

// push() | Inserta elementos a un array

const countries = ['USA', 'Canada', 'UK']
const newCountries = countries.push('Germany', 'Australia')

console.log(countries)
console.log(newCountries)

// pop | elimina el ultimo elemento del array 
const removeCountry = countries.pop()
console.log(countries)
console.log(newCountries)


// Exercise: Managing a Stack

let bookCart = []

const ADD_TO_CART_ACTION = 'addToCard'
const REMOVE_FROM_ACTION = 'removeFromCart'
const VIEW_CART_ACTION = 'viewCart'

function viewCart(){
    console.log('Current Cart of Books:', bookCart)
}

function perfromCartActions (action, newBook){
    switch(action){
        case ADD_TO_CART_ACTION:
            bookCart.push(newBook)
            break;
        case REMOVE_FROM_ACTION:
            if(bookCart.length === 0){
                console.log('Cart is empty. No books to remove')
            } else {
                const removedBook = bookCart.pop()
                console.log(`Removed book from the cart: ${removedBook}`)
            }
            break;
        case VIEW_CART_ACTION:
            viewCart()
            break;
        default:
            console.log('Invalid action. Please choose a valid option.')
    }
}
perfromCartActions(ADD_TO_CART_ACTION, 'Ego is the enemy.')
perfromCartActions(VIEW_CART_ACTION)