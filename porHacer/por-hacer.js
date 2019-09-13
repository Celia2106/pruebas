const fs=require('fs');


let tareasPorHacer=[];

const crear=(des)=>{
    leerDB();
    let tareaPorHacer={
        des,
        completado: false
    };
    tareasPorHacer.push(tareaPorHacer);
    guardarDB();
    return tareasPorHacer;
};

const guardarDB=()=>{
    let data=JSON.stringify(tareasPorHacer);

    fs.writeFile('./db/data.json',data,(err)=>{
        if(err)
            throw new Error('Error al gaurdar');
        else
            console.log('data save');
    })
};
const leerDB=()=>{
    try{
        tareasPorHacer=require('../db/data.json');
    }
    catch (e) {
        tareasPorHacer=[];
    }
};
const actualizar=(descripcion,completado=true)=>{
    leerDB();

    let index=tareasPorHacer.findIndex(tarea=> tarea.des===descripcion)
    if(index>=0){
        tareasPorHacer[index].completado=completado;
        guardarDB();
        return true;
    }else
        return false;

}

const listar=()=>{
    return require('../db/data.json');
};
const borrar=(descripcion)=>{
    leerDB();

    let index=tareasPorHacer.findIndex(tarea=> tarea.des===descripcion)
    if(index>=0){
       delete tareasPorHacer[index];
        guardarDB();
        return true;
    }else
        return false;

};
module.exports={
    crear,listar,actualizar,borrar
};