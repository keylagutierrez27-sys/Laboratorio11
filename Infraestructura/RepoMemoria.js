class RepoMemoria {
    constructor() {
        this.tareas = []; // Almacena las tareas en memoria
        
    }
    guardar(tarea){
        this.tareas.push(tarea);
    }

    listar(){
        return this.tareas;
    }

    buscarPorId(){
        return this.tareas.find(tarea => tarea.id === id);
    }

    actualizar(tarea){
        const indice = this.tareas.findIndex(t => t.id === tarea.id);
        if (indice !== -1) {
            this.tareas[indice] = tarea;
        }
    }
}
module.exports = RepoMemoria;