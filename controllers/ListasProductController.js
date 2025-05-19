
let datos=require('../extras/datos');
module.exports ={
    index: (req,res) => {
const parte=req.params.seccion;
let sector;
let arreglo=datos.datosSecciones;
switch(parte){
    case 'Juegos':
        {sector=1;
break;}
case 'Libros':{
    sector=2;
    break;}
    case 'Articulos':{
        sector=3;
        break;
    }
}
 res.render('ListaProductos', {sector,datosSecciones:arreglo });
}

    }