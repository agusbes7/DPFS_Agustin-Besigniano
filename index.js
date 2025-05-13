
const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const items= require('./datos');

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('view cache', false);
// Servir archivos estáticos (si tienes archivos en 'public')
app.use(express.static(path.join(__dirname, 'public')));

//CONFIGURAR SESIONES 
app.use(session({
    secret: 'secret', 
    resave: false,        
    saveUninitialized: true,   
    cookie: { secure: true }     
}));
//_----------------------------------------------------------

app.use((req, res, next) => {
    res.locals.direccion = req.session.username ? "/Profile" : "/Login";
    res.locals.productos=items; //carro de productos
    res.locals.monto=0; 
      next();});

const mainRoutes = require('./routes/mainRoutes');
const loginRoutes=require('./routes/LoginRoutes');
const contacto=require('./routes/ContactoRoutes');
const compra=require('./routes/CarroProductosRoutes');
const detailP=require('./routes/DetalleProductoRoutes');
const cargaProducto=require('./routes/FormularioProductoRoutes');

app.use('/', mainRoutes);
app.use('/', loginRoutes);
app.use('/',contacto);
app.use('/',compra); //añadir logica de guardar y remover items del req.session
app.use('/',detailP);
app.use('/',cargaProducto);
/*
});
app.get('/Products', (req,res) =>{
   
    res.render('ListaProductos',{aside:"hola",datosSecciones});
});
app.get('/admin', (req,res) =>{
   let producto=libro1;
    res.render('gestiondeProductos',{producto});
});*/
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});



