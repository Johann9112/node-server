const readline = require('readline');
const añadirTarea = require('./añadirTarea');
const eliminarTarea = require('./eliminarTarea');
const completarTarea = require('./completarTarea');
const listarTareas = require('./listarTareas');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function promptMenu() {
  console.log('Elige una opción:');
  console.log('1. Añadir tarea');
  console.log('2. Eliminar tarea');
  console.log('3. Completar tarea');
  console.log('4. Listar tareas');

}

function main() {
  promptMenu();

  rl.on('line', (input) => {
    switch (input.trim()) {
      case '1':
        rl.question('Introduce el id y la descripción : ', (answer) => {
          const [indicador, ...descripcionArr] = answer.split(' ');
          const descripcion = descripcionArr.join(' ');
          añadirTarea(indicador, descripcion);
          promptMenu();
        });
        break;
      case '2':
        rl.question('Introduce el id de la tarea a eliminar: ', (indicador) => {
          eliminarTarea(indicador);
          promptMenu();
        });
        break;
      case '3':
        rl.question('Introduce el id de la tarea a completar: ', (indicador) => {
          completarTarea(indicador);
          promptMenu();
        });
        break;
      case '4':
        listarTareas();
        promptMenu();
        break;
      
    }
  });
}

main();
