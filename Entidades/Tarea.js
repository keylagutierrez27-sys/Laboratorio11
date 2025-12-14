class Tarea {
    constructor(id, titulo, estado = 'pendiente') {
        this.id = id;
        this.titulo = titulo;
        this.estado = estado;
    }
}
module.exports = Tarea;