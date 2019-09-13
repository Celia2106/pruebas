const argv=require('./config/yargs').argv;
const colors=require('colors');
const porHacer=require('./porHacer/por-hacer');


let comando=argv._[0];

switch (comando) {
    case 'crear':
       let tarea= porHacer.crear(argv.descripcion);
       console.log(tarea);
        break;
    case 'listar':
            let listaTareas=porHacer.listar();
            for(let tarea of listaTareas)
                console.log(`Descripcion: ${tarea.des} - Estado: ${tarea.completado}`.red);
        break;

    case 'actualizar':
        let actualizado=porHacer.actualizar(argv.descripcion,argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado=porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('comando no reconocido');
}
