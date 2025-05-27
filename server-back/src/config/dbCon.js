const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // Carga las variables de entorno

const dbCon = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conexión a MongoDB exitosa");
    } catch (error) {
        console.error("Error al conectar a MongoDB:", error.message);
    }
};

module.exports = dbCon;