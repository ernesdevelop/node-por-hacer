const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    try {

        fs.writeFileSync('./db/data.json',data);    

    } catch (err) {
        
        throw err;
    }
    

}

const crear = (descripcion) => {

    cargarDB();
    
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const cargarDB = () =>{
    try {
        listadoPorHacer = require('../db/data.json');
        
    } catch (error) {

        listadoPorHacer=[];        
    }

    console.log(listadoPorHacer);
}

const getListado = () => {

    cargarDB();
    return listadoPorHacer;

}

const actualizar = (descripcion,completado=true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion===descripcion);
    if (index>=0){
        listadoPorHacer[index].completado=completado;
        guardarDB();
        return true;
    }else{
        return false;
    }

}

const borrar = (descripcion) => {
       cargarDB();
       let nuevoListado = listadoPorHacer.filter(tarea => {
          return tarea.descripcion!==descripcion;
                
        });
        if (nuevoListado.length===listadoPorHacer.length){
            return false;
        }else{
            listadoPorHacer=nuevoListado;
            guardarDB();
            return true;
        }
       
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}