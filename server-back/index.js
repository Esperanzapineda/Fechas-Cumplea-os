require("dotenv").config(); // Cargar variables de entorno
const dbCon = require("./src/config/dbCon");
const app = require("./src/server");

dbCon()  // Intentar conectar a la base de datos
    .then(() => {
        app.listen(3000, () => {
            console.log("Escuchando en el puerto 3000");
        });
    })
    .catch((error) => {
        console.error("Error al conectar a la base de datos:", error);
        process.exit(1);  // Termina el proceso si hay error al conectar a la base de datos
    });