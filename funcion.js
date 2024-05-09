function imprimirInformacion(nombre, apellido, nickname){
    const completeName = nombre + " " + apellido;
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

// Llamada a la funcion con argumentos
imprimirInformacion("Crisanto Eduardo", "Cervantes Cazares", "crisantocc");