
const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const items= require('./extras/datos');

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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    res.locals.direccion = req.session.username ? "/Profile" : "/Login";
    res.locals.productos=items; //carro de productos
    res.locals.monto=0;
      console.log(`[${req.method}] ${req.url}`); 
      next();});

const mainRoutes = require('./routes/mainRoutes');
const loginRoutes=require('./routes/LoginRoutes');
const contacto=require('./routes/ContactoRoutes');
const compra=require('./routes/CarroProductosRoutes');
const detailProduct=require('./routes/DetalleProductoRoutes');
const cargaProducto=require('./routes/FormularioProductoRoutes');
const productos= require('./routes/ListasProductoRoutes');


app.use('/', mainRoutes);
app.use('/', loginRoutes);
//enviar mensajes a la empresa
app.use('/',contacto);
app.use('/',compra); //añadir logica de guardar y remover items del req.session
//producto por id dinamico
app.use('/',detailProduct);
//pagina de carga y edicion por id dinamico incorporar busqueda en la edicion
app.use('/',cargaProducto);
//generos y aside se reciben(modificar al incorporar base de datos)
app.use('/',productos);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});



