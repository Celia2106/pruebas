
const argv=require('yargs')
    .command('listar','lista las tareas')
    .command('crear','crea una tarea',{
        descripcion:{
            alias: '-d',
            demand:true,
        }})
    .command('actualizar','actualiza una tarea',{
        descripcion:{
            alias: '-d',
            demand:true,
        },completado:{
            alias: '-c',
            default: true
        }})
    .command('borrar','borrar una tarea',{
        descripcion:{
            alias:'-d',
            demand:true
        }

    })
    .help()
    .argv;

module.exports={
    argv
}