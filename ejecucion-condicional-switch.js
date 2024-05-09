// Base de switch
/*
switch(expresion){
    case valor1:
        // Codigo a ejecutar
        break;
    case valor2:
        // codigo a ejecutar
        break;
    case valor3:
        // codigo a ejecutar
        break;
    case valor4:
        // codigo a ejecutar
        break;
    case valor5:
        // codigo a ejecutar
        break;
        default:
            // codigo
}
*/

let expr = "Papayas"

switch(expr){
    case "Naranjas":
        console.log("Las naranjas cuestan $20 el kilo")
        break;
    case "Manzanas":
        console.log("Las manzanas cuestan $43 el kilo")
        break;
    case "Platanos":
        console.log("El platano esta en $30 el kilo")
        break;
    case "Mangos":
        break;
    case "Papayas":
        console.log("El platano esta en $30 el kilo")
        break;
    default:
        console.log(`Lo siento no contamos con ${expr}`)
        break;
}
console.log("Hay algo mas que desees? ");