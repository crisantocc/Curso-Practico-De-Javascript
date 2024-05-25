/*
estructura de datos

key / value

objeto {
    propiedad: valor,
    propiedad: valor,
    propiedad: valor
    Metodos
}
*/

const persona = {
    nombre: "Jhon",
    edad: 30,
    dirrecion: {
        calle: "av insurgentes 187",
        ciudad: "CDMX"
    },
    saludar() {
        console.log(`hola, mi nombre es ${persona.nombre}`)
    }
}

console.log(persona)

console.log(persona.nombre)
console.log(persona.saludar())

persona.telefono = "555-555-5555"

console.log(persona.telefono)

persona.despedir = () => {
    console.log("Adios")
}

console.log(persona.despedir())