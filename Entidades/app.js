const express = require('express');

//importando RepoMemoria
const RepoMemoria = require('../infraestructura/RepoMemoria');
//importando CasoDeUso
const CrearTarea = require('../casos-de-usos/CrearTarea');
const ListarTarea = require('../casos-de-usos/ListarTarea');
const CompletarTarea = require('../casos-de-usos/CompletarTarea');

const app = express();
app.use(express.json());

//instanciar de RepoMemoria
const repo= new RepoMemoria();

//instanciar casos de uso
const crearTarea = new CrearTarea (repo);
const listarTarea = new ListarTarea (repo);
const completarTarea = new CompletarTarea (repo);

//RUTAS
//post para crear tarea
app.post('/tareas', (req, res) => {
    const { titulo } = req.body;
    if (!titulo) {
        return res.status(400).json({ error: 'El título es obligatorio'});
    }
    const tarea = crearTarea.ejecutar(titulo);
    res.status(201).json(tarea);
} );

//get para listar tareas
app.get('/tareas', (req, res) => {
    const tareas = listarTarea.ejecutar();
    res.json(tareas);
});
//patch para actualizar(completar tarea)
app.patch('/tareas/:id', (req, res) => {
    const { id } = req.params;
    try {
        const tarea = completarTarea.ejecutar(id);
        res.json(tarea);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});





app.listen(3000, () => {
  console.log(`Servidor en http://localhost:3000`);
});

