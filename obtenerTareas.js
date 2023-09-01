const fs = require('fs');
const rutaArchivo = './tareas.json';

function obtenerTareas() {
  if (!fs.existsSync(rutaArchivo)) return [];
  const data = fs.readFileSync(rutaArchivo, 'utf8');
  return JSON.parse(data);
}

module.exports = obtenerTareas;
