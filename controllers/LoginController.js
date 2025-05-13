module.exports = {
    // Mostrar formulario de login
    show: (req, res) => {
        res.render('Login');
    },

    // Procesar el login
    store: (req, res) => {
        //procesar y guardar datos de usuario
    }
}