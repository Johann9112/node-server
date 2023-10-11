const express = require('express');
const app = express();
const PORT = 3000;

const tareas = [
    
        { id: 1, tarea: 'Hacer la compra', responsable: "Ana", cumplida: false },
        { id: 2, tarea: 'Regar las plantas', responsable: "Carlos", cumplida: true },
        { id: 3, tarea: 'Limpiar el baño', responsable: "David", cumplida: false },
        { id: 4, tarea: 'Aspirar la sala', responsable: "Beatriz", cumplida: true },
        { id: 5, tarea: 'Lavar los platos', responsable: "Ana", cumplida: false },
        { id: 6, tarea: 'Hacer la cama', responsable: "David", cumplida: true },
        { id: 7, tarea: 'Sacar la basura', responsable: "Carlos", cumplida: false },
        { id: 8, tarea: 'Lavar la ropa', responsable: "Beatriz", cumplida: true },
        { id: 9, tarea: 'Planchar la ropa', responsable: "Ana", cumplida: false },
        { id: 10, tarea: 'Cocinar', responsable: "Carlos", cumplida: true }
        
];

app.get('/tareas', (req, res) => {
    res.json(tareas);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
