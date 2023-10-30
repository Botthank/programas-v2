
/*var personajes = [];


console.log("Bienvenido al programa de almacenamiento de personajes");
function mostrarMenu() {
  console.log("Menú de opciones:");
  console.log("1. Cargar datos");
  console.log("2. Mostrar datos");
  console.log("3. Salir del programa");
}

function cargarDatos() {
  var personaje = prompt("Ingrese el nombre del personaje:");
  personajes.push(personaje);
  console.log("¡Personaje agregado con éxito!");
}


function mostrarDatos() {
  if (personajes.length === 0) {
    console.log("No hay personajes guardados");
  } else {
    console.log("Personajes guardados:");
    for (var i = 0; i < personajes.length; i++) {
      console.log(personajes[i]);
    }
  }
}


var opcion;
do {
  mostrarMenu();
  opcion = parseInt(prompt("Ingrese una opción (1-3):"));

  switch (opcion) {
    case 1:
      cargarDatos();
      break;
    case 2:
      mostrarDatos();
      break;
    case 3:
      console.log("¡Hasta luego!");
      break;
    default:
      console.log("Opción inválida. Por favor, ingrese una opción válida (1, 2 o 3).");
      break;
  }
} while (opcion !== 3);