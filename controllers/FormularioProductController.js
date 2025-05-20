const { Producto } = require('../extras/clases');
module.exports =  {
create: (req,res) =>{

    res.render('gestiondeProductos',{})
},
 store: (req, res) => {
    const datos = req.body; // Acá recibís los datos del formulario
    console.log("Datos recibidos del formulario:", datos);

    res.send("Datos recibidos: " + JSON.stringify(datos)); // Mejor mostrarlo como string
  
/*
value="1">Juego</option>
<option value="2">Libro</option>
<option value="3">Artículo*/



 res.render('gestiondeProductos',{})

},
updateDestroy: (req,res) =>{
    const index=req.params.id;
       const listaProductos = Array.from(item.items);
    
            const producto = listaProductos[index];
res.render('gestiondeProductos',{producto})
        }
    

}