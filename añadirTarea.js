const obtenerTareas = require('./obtenerTareas');
const guardarTareas = require('./guardarTareas');

function añadirTarea(indicador, descripcion) {
  const tareas = obtenerTareas();
  const nuevaTarea = {
    indicador,
    descripcion,
    estado: 'incompleta',
  };
  tareas.push(nuevaTarea);
  guardarTareas(tareas);
}

module.exports = añadirTarea;
