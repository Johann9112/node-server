const obtenerTareas = require('./obtenerTareas');
const guardarTareas = require('./guardarTareas');

function completarTarea(indicador) {
  const tareas = obtenerTareas();
  const tareaACompletar = tareas.find(tarea => tarea.indicador === indicador);
  if (tareaACompletar) {
    tareaACompletar.estado = 'completada';
  }
  guardarTareas(tareas);
}

module.exports = completarTarea;
