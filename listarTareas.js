const obtenerTareas = require('./obtenerTareas');

function listarTareas() {
  const tareas = obtenerTareas();
  console.log('Tareas:');
  tareas.forEach(tarea => {
    console.log(`Indicador: ${tarea.indicador}, Descripción: ${tarea.descripcion}, Estado: ${tarea.estado}`);
  });
}

module.exports = listarTareas;
