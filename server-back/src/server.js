const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const userRoutes = require("./routes/usersRoutes")


const app = express();

app.use(express.json()); //Permite que el servidor lea las solicitudes en formato JSON
app.use(morgan("dev"));  //Registra solicitudes http en la conola 
app.use(cors()); 

app.use("/users", userRoutes);

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({ error: err.message});
});

module.exports = app;

