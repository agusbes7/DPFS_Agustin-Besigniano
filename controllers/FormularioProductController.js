const { Producto } = require('../extras/clases');
module.exports =  {
create: (req,res) =>{

    res.render('gestiondeProductos',{})
},
updateDestroy: (req,res) =>{
    const index=req.params.id;
       const listaProductos = Array.from(item.items);
    
            const producto = listaProductos[index];
res.render('gestiondeProductos',{producto})
        }
    

}