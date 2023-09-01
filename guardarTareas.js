const fs = require('fs');
const rutaArchivo = './tareas.json';

function guardarTareas(tareas) {
  fs.writeFileSync(rutaArchivo, JSON.stringify(tareas, null, 2));
}

module.exports = guardarTareas;
