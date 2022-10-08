const express = require ('express');
const mongoose = require ('mongoose');
require("dotenv").config();
const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use('/api', userRoutes)


//RUTAS
app.get('/', (req,res) => {
    res.send('Bienvenido a la API');
});


//CONEXION A MONGODB
mongoose
.connect(process.env.MONGODB_URI).then (() => console.log("Conexion Completada"))
.catch ((error) => console.error (error));
app.listen(port, () => console.log ('server listo en puerto', port)); 