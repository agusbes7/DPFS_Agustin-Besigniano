module.exports = {
    // Mostrar formulario de login
    show: (req, res) => {
        res.render('contacto')},

    store: (req, res) => {
        const { name, email, message } = req.body;

        // Aquí puedes hacer lo que quieras con los datos, como guardarlos en una base de datos
        // o enviarlos por correo electrónico, por ejemplo.

        // Para propósitos de ejemplo, solo respondemos con un mensaje:
        console.log(`Mensaje recibido de ${name} (${email}): ${message}`);

        // Redirigir a una página de confirmación o agradecer al usuario
        res.send('¡Gracias por tu mensaje!');
    }
}
