const { Producto } = require('../extras/clases');
let item=require('../extras/datos');
module.exports ={

    show: (req, res) => { 

const index = parseInt(req.params.id); 
        // Convertimos el Set a Array si es necesario
        const listaProductos = Array.from(item.items);

        const producto = listaProductos[index];

        if (producto) {
            res.render('DetallesProducto.ejs', { producto });
        } else {
            res.status(404).send('Producto no encontrado');
        }
    }
};