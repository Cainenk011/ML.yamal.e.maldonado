let express = require ('express'); //requerimos express luego de instalarlo
const path = require ('path'); //requerimos el módulo PATH para poder encontrar las rutas más facilmente
let app = express();// creamos un instancia de express para utilizarlo

//Aquí debemos de poner este método que va a tener a los archivos de la carpte PUBLIC como estáticos.
const publicPath = path.resolve(__dirname, 'public');
app.use (express.static(publicPath));

//Levantamos el server y lo dejamos escuchando en el puerto 3000
const port = process.env.PORT || 3030;
app.listen(port, ()=>console.log(`Servidor corriendo en el puerto
${port}`));

//Así vamos poniendo las rutas de nuestro proyecto,utilizando el "path.join" luego dehaber requerido el módulo "path".
app.get('/', (req, res) => { 
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get('/', (req, res) => { 
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.get("/", (req, res) => { 
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});

