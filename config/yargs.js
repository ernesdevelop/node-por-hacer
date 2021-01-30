
const descripcion = {
    demand:true,
    alias:'d',
    desc:'borra una tarea'
};
const completado = {
    demand:true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'

};
const argv = require('yargs')
    .command('borrar','Muestra las tareas por hacer',
    {
        descripcion
    })
    .command('crear','crear una tarea por hacer', {
            descripcion
    })
    .command('actualizar','actualiza una tarea', {
        descripcion,
        completado
    })
.help()
.argv;

module.exports = { 
    argv
}