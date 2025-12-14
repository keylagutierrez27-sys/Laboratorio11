class ListarTarea {
    constructor(repositorio) {
        this.repositorio = repositorio;
    }

    ejecutar() {
        return this.repositorio.listar();
    }

}
module.exports = ListarTarea;