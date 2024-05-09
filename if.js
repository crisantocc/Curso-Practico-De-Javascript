const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion == "Free") {
		console.log("Solo puedes tomar los cursos gratis");
}
if (tipoDeSuscripcion == "Basic") {
		console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
if (tipoDeSuscripcion == "Expert") {
		console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
if (tipoDeSuscripcion == "ExpertPlus") {
		console.log("Tu y alguien mas pueden tomar Todos los cursos de Platzi durante un año");
}
if (tipoDeSuscripcion !== "Free" && tipoDeSuscripcion !== "Basic" && tipoDeSuscripcion !== "Expert" && tipoDeSuscripcion !== "ExpertPlus") {
		console.log("Tu tipo de suscripcion no fue encontrada " + tipoDeSuscripcion);
}