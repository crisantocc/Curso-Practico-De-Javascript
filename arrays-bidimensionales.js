let array1D = [1, 2, 3] // Unidimensional
let array2D  = [[1, 2, 3], [1, 2, 3], [1, 2, 3]] // Bidimensional

let matrix = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
]
matrix[1][2] = 10
console.log(matrix)

let value = matrix[0][1]
console.log(value)

// Operator

for (let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
        console.log(matrix[i][j])
    }
}

function findElement (matrix, elemnt){
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            if (matrix[i][j]=== elemnt){
                return true
            }
        }
    }
    return false
}

console.log(findElement(matrix, 5))

function duplicateMatrix (matrix){
    let newMatrix = []

    for (let i = 0; i < matrix.length; i++){
        newMatrix[i] = [...matrix[i]]
    }
    return newMatrix
}

console.log(duplicateMatrix(matrix))