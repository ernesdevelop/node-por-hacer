
const argv = require ('./config/yargs').argv;

let comando = argv._[0];

const porHacer = require('./por-hacer/por-hacer');


switch (comando){
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado ){
            console.log('=========por hacer========');
            console.log(tarea.descripcion);
            console.log('Estado: ',tarea.completado);
            console.log('==========================');
        }
        break;
        case 'borrar':
            let borrado = porHacer.borrar(argv.descripcion);
            console.log(borrado);
            break;
        case 'actualizar':
        let modifica = porHacer.actualizar(argv.descripcion,argv.completado);
        console.log(modifica);
        break;
    default:
        console.log('comando no reconocido');    
}