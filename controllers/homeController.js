const { oferta, ProductoOferta, Libros, Juegos, Articulos } = require('../datos'); 


module.exports = {
    home: (req, res) => {
        res.render('Home', { oferta, ProductoOferta, Libros, Juegos, Articulos, page: "Home" });
    }
};