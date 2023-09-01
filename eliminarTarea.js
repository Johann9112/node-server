const obtenerTareas = require('./obtenerTareas');
const guardarTareas = require('./guardarTareas');

function eliminarTarea(indicador) {
  const tareas = obtenerTareas();
  const tareasActualizadas = tareas.filter(tarea => tarea.indicador !== indicador);
  guardarTareas(tareasActualizadas);
}

module.exports = eliminarTarea;
