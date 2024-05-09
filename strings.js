// Creacion de strings

const primeraOpcion = 'Comillas simples'
const segundaOpcion = "Comillas simples"
const terceraOpcion = `Comillas simples`

// 1. Concatenacion: Opcion +
const dirreccion = 'Calle falsa 123'
const ciudad = 'Springfield'
const dirreccionCompleta = 'Mi dirreccion completa es ' + dirreccion + ciudad
console.log(dirreccionCompleta)

const dirreccionCompletaConEspacio = 'Mi dirrecion completa es ' + dirreccion + ' ' + ciudad
console.log(dirreccionCompletaConEspacio)

// 2. Concatenacion: Template Literals
const nombre = 'Estefany'
const pais = '🇨🇴'
const presentacion = `Hola, soy ${nombre} de ${pais}`
console.log(presentacion)

// 3. Concatenacion: Join()
const primeraParte = 'Me encanta'
const segudaParte = 'la gente de'
const terceraParte = '🇲🇽'
const pensamiento = [primeraParte, segudaParte, terceraParte]
console.log(pensamiento.join(' 🌮 '))

// 4. Concatenacion: concat()
const hobbie1 = 'correr'
const hobbie2 = 'leer'
const hobbie3 = 'estudiar'
const hoddies = 'Mis hobbies son: '.concat(hobbie1, ', ', hobbie2, ', ', hobbie3, '.')
console.log(hoddies)

// Caracter de escape
// const whatDoIDo = 'I'm software Engineer'

// 1. Escape alternativo
const escapealternativo = "I'm softwre Engineer"

// 2. Barra invertida
const barraInvertida = 'I\'m Software Engineer'

// 3. Template literals
const escapeComillasInvertida = `I'm Software Engineer`

// Escritura de Strings Largos
/*
    Las rosas son rojas,
    Las violetas son azules,
    Caracter inesperado,
    En la linea 86.
*/

const poema = 'Las rosas son rojas, \n' +
                'Las violetas son azules,\n' +
                'Caracter inesperado,\n' +
                'En la linea 86.'
console.log(poema)

const poema2 = 'Las rosas son rojas, \n\
Las violetas son azules,\n\
Caracter inesperado,\n\
En la linea 86.'
console.log(poema2)

const poema3 = `Las rosas son rojas,
Las violetas son azules,
Caracter inesperado,
En la linea 86.`
console.log(poema3)