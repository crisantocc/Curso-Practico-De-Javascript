/* let persona = {
    nombre: "Diego",
    apellido: "De Granada",
    edad: 35
} */


function persona(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

const persona1 = new persona("Juan", "Perez", 20);

console.log(persona1)

persona1.nacionalidad = "Mexicano";
