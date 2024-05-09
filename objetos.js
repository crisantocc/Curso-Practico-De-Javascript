const tipoDeSuscripcion = "Basic";

const mensajes = {
		Free: "Solo puede tomar los cursos gratis",
		Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
		Expert: "Puedes tomar casi todods los cursos de Platzi duranre un año",
		ExpertPlus: "Tu y alguien mas pueden tomar TODOS los cursos de Platzi durante un año"
};

const mensaje = mensajes[tipoDeSuscripcion] || "Tipo de suscripcion no fue encontrada " + tipoDeSuscripcion;

console.log(mensaje);