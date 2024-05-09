// Methods that modify the original array (Mutability).

// shift()

const colors = ['yellow', 'blue', 'red']
const removeColors = colors.shift()

console.log(colors)
console.log(removeColors)

// Unshift()

const newColors = colors.unshift('pink', 'purple')

console.log(colors)
console.log(newColors)