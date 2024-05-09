/* Escribe un código en JavaScript que le pregunte a
los usuarios cuánto es 2 + 2. Si responden bien,
mostramos un mensaje de felicitaciones, pero si responden mal,
volvemos a empezar. */

do{
    numero = prompt("Cuanto es 2 + 2");
    numero = parseInt(numero);

    if (numero == 4){
        alert("Felicitaciones el resultado es correcto.");
    }else {
        console.log("La respuesta no es correcta vuelve a intentarlo")
    }

} while(numero != 4);