class CompletarTarea {
    constructor(repositorio) {
        this.repositorio = repositorio;
    }

    ejecutar(id) {
        const idNumero = Number(id);
        const tarea = this.repositorio.buscarPorId(idNumero);
        if (tarea) {
            throw new Error('Tarea no encontrada');
        }
        tarea.estado = 'completada';
        this.repositorio.actualizar(tarea);
        return tarea;
    }
}
module.exports = CompletarTarea;