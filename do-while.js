let numero;

do {
  numero = prompt("Ingrese un número positivo:");
  numero = parseInt(numero);

  if (numero < 0) {
    alert("¡Error! Ingrese un número positivo.");
  }
} while (numero < 0);

console.log("Número ingresado: " + numero);
