class animal{
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }
    emitirSonido() {
        console.log("El animal emite un sonido")
    }
}

class perro extends animal{
    constructor(nombre, tipo, raza){
        super(nombre, tipo);
        this.raza = raza;
    }
    emitirSonido(){
        console.log("El perro ladra")
    }
    correr(){
        console.log(`${this.nombre} corre alegremente`)
    }
}

const perro1 = new perro("Bobby", "Perro", "Pug");
console.log(perro1);
perro1.correr();
perro1.emitirSonido();

perro1.nuevoMetodo = function(){
    console.log("Este es un meotodo");
};

perro.prototype.segundoMetodo = function(){
    console.log("Es otro nuevo metodo");
};