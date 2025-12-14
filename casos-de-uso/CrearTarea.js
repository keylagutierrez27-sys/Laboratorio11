class CrearTarea {
    constructor(repositorio) {
        this.repositorio = repositorio;
    }

    ejecutar(titulo) {
        const nueva = new Tarea(Date.now(), titulo,);
        this.repositorio.guardar(nueva);
        return nueva;           
    }
}
module.exports = CrearTarea;